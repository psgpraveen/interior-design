// src/Edit/Auth/Index.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  // Replace this with your actual authentication check
  return !!localStorage.getItem('authToken'); // Make sure this matches your token name
};

const ProtectedRoute = ({ element: Component }) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
