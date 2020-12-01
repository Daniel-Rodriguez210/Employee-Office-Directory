import React from "react";
import "./style.css";

function EmployeeCard({ name, image, occupation }) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="employee" src={image} />
      </div>
      <div className="content">
        <p>{name}</p>
        <p>{occupation}</p>
      </div>
    </div>
  );
}

export default EmployeeCard;
