import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";
import { useContext } from "react";

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);

  return (logged)
    ? children
    : <Navigate to="/login" />
}
