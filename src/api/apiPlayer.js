import fetchData from "./apiCallController";

async function login(body) {
    try {
        const response = await fetchData("login", "POST", body);
        if (!response || !response.token) {
            throw new Error("Login fallido, se necesita token");
        }
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("authPlayerId", response.player_id);
        return response.token;

    } catch (error) {
        console.error("Error al intentar iniciar sesión:", error);
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
        const player_id= localStorage.getItem("authPlayerId");
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
} //OK



export { login, logout, register, checkAuthToken };