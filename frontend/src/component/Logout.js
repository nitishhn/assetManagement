import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to login page
    navigate("/");
  };

  return <div onClick={handleLogout}>Logout</div>;
}

export default Logout;
