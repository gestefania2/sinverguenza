import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkAuthToken } from '../../api/apiPlayer';

const ProtectedRoute = ({ children }) => {
    const profile = checkAuthToken();
    
    if (!profile) {
        // Si no hay token, redirige al login
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;