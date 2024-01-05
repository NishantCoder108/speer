import axios from "axios";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

console.log("Env", import.meta.env);
const AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
        // Add any other common headers here
    },
});

export default AxiosInstance;
