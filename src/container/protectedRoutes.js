import React from 'react';
import { Navigate } from 'react-router-dom';

const useAuth = () => {
  const userInfo = window.localStorage.getItem('user');
  if (userInfo) {
    return true;
  } else {
    return false;
  }
};

export default function PrivateRoutes({ children }) {
  const auth = useAuth();
  return <>{auth ? children : <Navigate to="/login" />};</>;
}
