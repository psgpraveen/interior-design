import React  from 'react';
import { Navigate,useLocation  } from 'react-router-dom';


const ProtectedRoute = ({ element: Component }) => {
  const location = useLocation();
  const tokenFromProps = location.state?.token; 
  const localToken = localStorage.getItem('authToken'); 

  if (!localToken || localToken !== tokenFromProps) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default ProtectedRoute;
