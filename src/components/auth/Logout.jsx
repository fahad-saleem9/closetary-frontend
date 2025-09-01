// src/components/auth/Logout.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    navigate("/login"); 
  }, [navigate]);

  return null;
}
