import React from 'react';
import Logo from '../../assets/images/logo.png'

import './navBar.scss'


const NavBar = () => {

    return <nav className="navbar navBar navbar-expand-lg  navbar-light bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Projects">Projects</a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link" href="#Packages">Packages</a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link " href="#About" aria-disabled="true">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#Contacts" aria-disabled="true">Contacts</a>
          </li>
        </ul>
      </div>
          <img className='navBar__logo' alt='logo' src={Logo}/>
    </div>
  </nav>
}

export default NavBar