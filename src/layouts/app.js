import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AppLayout = () => {
  // Check if the user is authenticated (replace with your authentication logic)
  const isAuthenticated = true; // Replace with your actual authentication check

  if (isAuthenticated) {
    return <Outlet />;
  } else {
    // Redirect to the login page or show an error message
    return <Navigate to="/auth/login" />;
  }
};

export default AppLayout;
