import React from "react";
import image from "../../assets/images/image-1.jpg";
import slide1 from "../../assets/images/slide (1).jpg";
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
            <div className="carousel-item active">
              <img src={image} className="d-block w-100" alt="..." />
              <div className='header__content'>
             <h1>
                 HuntDesign
             </h1>
             <aside>
                 <p className='mb-5'>
                 Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator,
                 </p>
                 <a href='#About'>
                     Read more
                 </a >
             </aside>
          </div>
            </div>
            <div className="carousel-item">
              <img src={slide1} className="d-block w-100" alt="..." />
              <div className='header__content'>
             <h1>
                 HuntDesign
             </h1>
             <aside>
                 <p className='mb-5'>
                 Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator,
                 </p>
                 <a href='#about'>
                     Read more
                 </a >
             </aside>
          </div>
            </div>
            <div className="carousel-item">
              <img src={slide2} className="d-block w-100" alt="..." />
              <div className='header__content'>
             <h1>
                 HuntDesign
             </h1>
             <aside>
                 <p className='mb-5'>
                 Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator,
                 </p>
                 <a href='#about'>
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
