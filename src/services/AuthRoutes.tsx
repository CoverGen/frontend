// this file contains the "helpers" to verify and redirect if necessary
import { Navigate, Outlet } from "react-router-dom";
// check the localstorage for "email"
const emailLogged = () => {
    return localStorage.getItem("email");
};
// if email exists, redirect to the protected routes, otherwise to login page
export const AuthRoutes = () => {
    return emailLogged() ? <Outlet /> : <Navigate to="/login" replace />;
};
// if email exists and the path contains "/login" specifically, redirect to the protected routes, otherwise to login page
export const LoginCheck = () => {
    return emailLogged() ? <Navigate to="/" replace /> : <Outlet />;
};
