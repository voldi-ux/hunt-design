import React from "react";

import "./projectBox.scss";

const ProjectBox = ({web:{image, color, title , description , link}}) => {
  return (
    <div className=" col-sm-6 col-md-4 projectBox">
      <div class="card  pb-5">
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
  <h2 class="card-title " style={{color}} >{title}</h2>
          <p class="card-text">
            {
              description
            }
          </p>
          <a href={link} class="btn d-block  btn-primary">
            Visit site
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
