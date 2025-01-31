import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
export default function ProtectedRoute() {
  //auth fetch api
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://portfolio-8dam.onrender.com/auth", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch auth satutus");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Auth data:", data);
        setAuth(true);
      })
      .catch((err) => {
        console.error("Auth error:", err);
        setAuth(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return auth ? <Outlet /> : <Navigate to="/login" />;
}
