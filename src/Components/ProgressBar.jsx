import React, { useState } from "react";
import "../App.css"
const ProgressBar = () => {
  const [progress, setProgress] = useState("received");

  const handleClick = (status) => {
    setProgress(status);
  };

  return (
    <div className="progress-bar">
      <div
        className={`progress-step ${progress === "received" ? "active" : ""}`}
        onClick={() => handleClick("received")}
      >
        Received
      </div>
      <div
        className={`progress-step ${progress === "prepared" ? "active" : ""}`}
        onClick={() => handleClick("prepared")}
      >
        Prepared
      </div>
      <div
        className={`progress-step ${progress === "served" ? "active" : ""}`}
        onClick={() => handleClick("served")}
      >
        Served
      </div>
      <div
        className={`progress-step ${progress === "billing" ? "active" : ""}`}
        onClick={() => handleClick("billing")}
      >
        Billing
      </div>
    </div>
  );
};

export default ProgressBar;
