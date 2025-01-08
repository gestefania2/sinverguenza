const BASE_URL = import.meta.env.VITE_BASE_URL

async function fetchData(pathName, method = 'GET', body = null) {
    try {
        const url = new URL(BASE_URL);
        url.pathname = pathName;
        console.log("Url complete:" + url.toString());
        console.log("Body complete:" + JSON.stringify(body));
        const token = localStorage.getItem("authToken");
        console.log("Profile complete:" + token);
        
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
                'Authorization': `Bearer ${token ? token : ""}`,
            },
            body: body ? JSON.stringify(body) : null,
        };

        const response = await fetch(url.toString(), options);
        
        // Manejar específicamente el error 409
        if (response.status === 409) {
            throw new Error('Usuario ya existente');
        }
        
        // Para otros errores HTTP
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Error en el servidor: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export default fetchData;