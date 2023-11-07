// Import Axios or your preferred HTTP library
import axios from 'axios';

// Access the environment variable for the base URL
const baseUrl = process.env.VUE_APP_API_BASE_URL;


const api = axios.create({
    baseURL: baseUrl,
    // Other Axios configurations here
});

// Add an Axios request interceptor to set the x-auth-token header
api.interceptors.request.use((config) => {
    // Get the authentication token from local storage
    const authToken = localStorage.getItem('authToken');

    // Set the x-auth-token header in the request
    if (authToken) {
        config.headers['x-auth-token'] = authToken;
    }

    return config;
});

// You can now use 'api' to make API requests with the x-auth-token header
export default api;