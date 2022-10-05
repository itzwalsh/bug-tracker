import React from "react";
import "../Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="homeBox">
        <div className="homeBoxTitle">Your Projects</div>
      </div>

      <div className="homeBox">
        <div className="homeBoxTitle">Active Tickets</div>
      </div>

      <div className="homeBox">
        <div className="homeBoxTitle">Completed Tasks</div>
      </div>

      <div className="homeBox">
        <div className="homeBoxTitle">Closed Tickets</div>
      </div>
    </div>
  );
};

export default Home;
