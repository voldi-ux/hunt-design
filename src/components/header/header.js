import React from 'react';
import image from '../../assets/images/image-1.png'

import NavBar from '../Navbar/navBar'

import './header.scss'

const Header = () => {

    return <>
    <NavBar />
     <header id='Home' className='header'>
         <img className='header__image mt-5' src={image} alt ='b-image'/>
          <div className='header__content'>
             <h1>
                 HuntDesign
             </h1>
             <aside>
                 <p>
                 Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator,
                 </p>
                 <a href='#about'>
                     Read more
                 </a >
             </aside>
          </div>
       </header>
    </>
}

export default Header