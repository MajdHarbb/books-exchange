import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthNav from "./components/AuthNav";
//check if token exists in local storage
const useAuth = () => {
    var user = { loggedIn: false };
    if (localStorage.getItem("token") != null && localStorage.getItem("user") != null && localStorage.getItem("authenticated") != null) {
        user = { loggedIn: true };
        return user && user.loggedIn;
    }

    return user && user.loggedIn;
};
//if user is authenticated allow outlet children, else nigavigate back to login page
const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <React.Fragment><AuthNav/> <Outlet /></React.Fragment> : <Navigate to="/" />;
};

export default ProtectedRoutes;
