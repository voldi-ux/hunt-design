import React from "react";
import {AiOutlineGlobal, AiOutlineAppstore} from 'react-icons/ai'
import {FaShoppingBag,FaAppStore} from 'react-icons/fa'

import "./packageBox.scss";

const PackageBox = ({ Package,toggleDrawer }) => {
  let Icon;
     if(Package.title.toLowerCase().includes('static')) {
        Icon = AiOutlineGlobal
     } else if(Package.title.toLowerCase().includes('shops')) {
       Icon = FaShoppingBag
     } else if(Package.title.toLowerCase().includes('applications')) {
       Icon = AiOutlineAppstore
     }

    const renderService = (service) => {
    return <li key={service} class="list-group-item">{service}</li>
    }

  return (
    <div className=" col-sm-6 col-md-4 packageBox">
      <div class="card   py-3">
        <div class="card-body">
          <div className=''>
            <Icon className='icon'/>
          <h1 class="card-title ">{Package.title}</h1>
          </div>
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
