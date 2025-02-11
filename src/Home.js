import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/routed");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleNavigate}>Home</button>
    </div>
  );
};

export default Home;