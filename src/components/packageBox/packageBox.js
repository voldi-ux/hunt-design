import React from "react";

import "./packageBox.scss";

const PackageBox = ({ Package }) => {

    const renderService = (service) => {
    return <li key={service} class="list-group-item">{service}</li>
    }

  return (
    <div className="col-sm-4 packageBox">
      <div class="card  mx-2 py-3">
        <div class="card-body">
          <h2 class="card-title ">{Package.title}</h2>
          <ul class="list-group">
              {
                  Package.services.map(renderService)
              }
          </ul>
          <a href="#" class="btn d-block btn-primary">
            Enquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default PackageBox;
