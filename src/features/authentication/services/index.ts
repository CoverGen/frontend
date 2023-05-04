import AuthRequests from "./authentication";

const apiBaseUrl = import.meta.env.VITE_DEV_BACKEND_URL;

export const AuthServices = new AuthRequests(apiBaseUrl);
