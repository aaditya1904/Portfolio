import React from "react";
import "./Project.css";
import frontendImage from "./frontend_card_image.jpeg";
import backendImage from "./backend_card_image.jpeg";
const fClick = () =>{
  let url = "https://github.com/aaditya1904/Projects/tree/aff7001c309c7f860faa5ee2bb9c9137d7ff44c9/frontend%20project";
  window.open(url, '_blank')
}
const bClick = () =>{
  let url = "https://github.com/aaditya1904/Projects/tree/aff7001c309c7f860faa5ee2bb9c9137d7ff44c9/backend%20project";
  window.open(url,'_blank');
}
function Project() {
  return (
    <>
      <div className="Pbody">
        <div className="card-container">
          <div className="frontend" onClick={fClick}>
            <img src={frontendImage} alt="img" className="image" />
            <h2>Front-End</h2>
            <p>Click Here For Front End Projects</p>
          </div>
          <div className="backend" onClick={bClick}>
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
