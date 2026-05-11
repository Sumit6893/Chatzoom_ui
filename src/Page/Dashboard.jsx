import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
   const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    
    <>
      <h1>Hello to dashboard</h1>
    </>
  );
};

export default Dashboard;