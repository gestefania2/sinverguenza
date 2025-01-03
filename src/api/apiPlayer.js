import fetchData from "./apiCallController";


async function getPlayer(playerId) {
    try {
        const response = await fetchData(`player/${playerId}`, "GET");
        return response;
    } catch (error) {
        if (error.status === 403) {
            throw new Error("No autorizado para acceder a estos datos");
        }
        throw error;
    }
}

async function login(body) {
    try {
        const response = await fetchData("login", "POST", body);
        const tokenParts = response.token.split('.');
        const payload = JSON.parse(atob(tokenParts[1]));
        console.log("Token payload:", payload); // Añade este log
        const playerId = payload.player_id;
        console.log("Player ID:", playerId); // Y este log

        localStorage.setItem("authToken", response.token);
        localStorage.setItem("authPlayerId", playerId);
        return response.token;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

async function logout() {
    try {
        if (localStorage.getItem("authToken") != null) {
            localStorage.removeItem("authToken");
        } else {
            throw new Error("No hay token para eliminar");
        }
    } catch (error) {
        console.error("Error al salir:", error);
    }
}

async function register(body) {
    try {
        const response = await fetchData(
            "register",
            "POST",
            body
        );

        if (!response || !response.success) {
            throw new Error(response?.message || "Error en el registro");
        }

    } catch (error) {
        console.error("Error al obtener el registro:", error);
        throw error;
    }
}


async function checkAuthToken() {
    try {
        const token = localStorage.getItem("authToken");
        const player_id = localStorage.getItem("authPlayerId");
        if (!token) {
            throw new Error("No hay token para verificar");
        }
        const profile = {
            token,
            player_id,
        };
        return profile;
    } catch (error) {
        console.error("Error al verificar el token:", error);
    }
} 




export { getPlayer, login, logout, register, checkAuthToken };