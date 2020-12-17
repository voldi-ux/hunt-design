import React from 'react';


import './footer.scss'


const Footer = () => {

    return <footer className='footer d-flex flex-column'>
        <ul className='footer__links d-flex ' >
           <li  className='footer__link' >
               <a href='#Home' >
                   Home
               </a>
           </li>
           <li  className='footer__link' >
               <a href='#Projects' >
                   Projects
               </a>
           </li>
           <li  className='footer__link' >
               <a href='#Packages' >
                   Packages
               </a>
           </li>
           <li  className='footer__link' >
               <a href='#About' >
                   About
               </a>
           </li>
           <li  className='footer__link' >
               <a href='#Contacts' >
                   Contacts
               </a>
           </li>
        </ul>
        <p className='footer__copyright' >
          &copy;copyright, {
              new Date().getFullYear()
          }, HuntDesigin
        </p>
    </footer>
}

export default Footer