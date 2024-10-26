import React from "react";
import "./Project.css";
import frontendImage from "./frontend_card_image.jpeg";
import backendImage from "./backend_card_image.jpeg";
function Project() {
  return (
    <>
      <div className="Pbody">
        <div className="card-container">
          <div className="frontend">
            <img src={frontendImage} alt="img" className="image" />
            <h2>Front-End</h2>
            <p>Click Here For Front End Projects</p>
          </div>
          <div className="backend">
            <img src={backendImage} alt="img" className="image" />
            <h2>Back-End</h2>
            <p>Click Here For Back End Project</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
