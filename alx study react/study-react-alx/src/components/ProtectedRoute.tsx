import React from 'react';
import { Outlet , Navigate } from 'react-router';

const ProtectedRoute = () => {
    const user = localStorage.getItem("userToken") && true;
    return user ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoute;