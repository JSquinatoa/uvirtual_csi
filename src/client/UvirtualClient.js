import axios from "axios";

const guardarUsuario = async (nombre, password) => {
    try {
        const response = await axios.post("https://cripto-api-xv5i.onrender.com//api/university/v1/students", {
            username: nombre,
            password: password
        });
    } catch (error) {
        console.error("Error al guardar usuario:", error);
    }
}

// función fachada
export const guardarUsuarioFachada = async(nombre, password) => {
    return await guardarUsuario(nombre, password);
}