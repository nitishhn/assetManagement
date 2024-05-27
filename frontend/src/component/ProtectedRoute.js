/*import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, requiredRole }) => {
  const token = sessionStorage.getItem("token");
  const userRole = sessionStorage.getItem("role");

  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return element;
};

export default ProtectedRoute;

*/

import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, requiredRole }) => {
  const token = sessionStorage.getItem("token");
  const userRole = sessionStorage.getItem("role");

  if (!token) {
    return <Navigate to="/Login" replace />;
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/Login" replace />;
  }

  return element;
};

export default ProtectedRoute;
