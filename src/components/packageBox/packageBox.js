import React from "react";

import "./packageBox.scss";

const PackageBox = ({ Package,toggleDrawer }) => {

    const renderService = (service) => {
    return <li key={service} class="list-group-item">{service}</li>
    }

  return (
    <div className=" col-sm-6 col-md-4 packageBox">
      <div class="card   py-3">
        <div class="card-body">
          <h1 class="card-title ">{Package.title}</h1>
          <ul class="list-group">
       
              {
                  Package.services.map(renderService)
              }
          </ul>
          <a onClick={(e) => {
            e.preventDefault()
            toggleDrawer()
          }} href="#" class="btn d-block btn-primary">
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageBox;
