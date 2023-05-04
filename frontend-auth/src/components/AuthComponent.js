import React from 'react'
import { useLocation, Navigate } from 'react-router-dom'

export default function AuthComponent({ children }) {

    let auth = JSON.parse(sessionStorage.getItem('tokenKey'))
    let location = useLocation();
  
    if (!auth) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  
    return children;
}
