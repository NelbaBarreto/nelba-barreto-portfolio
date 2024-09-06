import axios from "axios";

export async function getSpotifyData(containerName, fileName) {
    const functionUrl = process.env.REACT_APP_FUNCTION_URL;

    const data = {
        connection_string: process.env.REACT_APP_CONNECTION_STRING,
        container_name: containerName,
        file_name: fileName
    };

    try {
        // Realizar el POST request a la Azure Function
        const { data: response } = await axios.post(functionUrl, data);
        return response
    } catch (error) {
        console.error(`Error en la solicitud: ${error}`);
    }
}