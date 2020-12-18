import React from "react";
import image from "../../assets/images/image-1.jpg";
import slide1 from "../../assets/images/image (2).jpg";
import slide2 from "../../assets/images/slide (2).jpg";
import NavBar from "../Navbar/navBar";

import "./header.scss";

const Header = () => {
  return (
    <>
      <NavBar />
      <header id="Home" className="header">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img src={image} className="d-block w-100" alt="..." />
              <div className='header__content'>
             <h1>
                 HuntDesign
             </h1>
             <aside>
                 <p className='mb-5'>
                      Welcome to huntDesign. If you are here, you are likely looking for a professional looking and functioning website or you have a website already but you need some improvements. You are at the right place.
                 </p>
                 <a href='#About'>
                     Read more
                 </a >
             </aside>
          </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={slide1} className="d-block w-100" alt="..." />
              <div className='header__content'>
             <h1>
                 HuntDesign
             </h1>
             <aside>
                 <p className='mb-5'>
                   HuntDesign caters for all type of businesses, from small to medium and large enterprises
                 </p>
                 <a href='#About'>
                     Read more
                 </a >
             </aside>
          </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={slide2} className="d-block w-100" alt="..." />
              <div className='header__content'>
             <h1>
                 HuntDesign
             </h1>
             <aside>
                 <p className='mb-5'>
                    Get an awesome looking, outstanding and professional website or web application.
                 </p>
                 <a href='#About'>
                     Read more
                 </a >
             </aside>
          </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
