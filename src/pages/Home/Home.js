import React, {useState} from "react";
import Header from "../../components/header/header";
import Form from "../../components/form/form";
import ContentBox from "../../components/contentBox/contentBox";
import ProjectBox from "../../components/projectBox/projectBox";
import Drawer from "react-bottom-drawer";


import aboutImage from "../../assets/images/vector.png";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineGithub,
  AiOutlineGooglePlus
} from "react-icons/ai";
import {websites,packages, ContentDetails,aboutContent} from '../../data/data'
import Footer from '../../components/footer/footer'

import "./Home.scss";
import PackageBox from "../../components/packageBox/packageBox";

const HomePage = () => {
  const [drawerVisible,setDrawerVisible] = useState(false)
  
  const onClose = React.useCallback(() => {
    setDrawerVisible(false);
  }, []);
  const renderWebsite = (web) => {
    return <ProjectBox web={web} />;
  };
  const toggleDrawer = () => setDrawerVisible(!drawerVisible)

  const renderPackages = (Package) => {
    return <PackageBox toggleDrawer={toggleDrawer} key={Package.title} Package={Package} />;
  };
  const renderContentBox = box => {
    return <ContentBox detail={box}/>
  }
  return (
    <>
      {/* header */}
      <Header  />
      <div className="row padding">
        <div className="col-md-4 "></div>
        <div className="col-md-4 "></div>
        <div className="col-md-4  move-top">
          <Form title='Get In Touch'/>
        </div>
      </div>
      {/* header ends here */}

      {/* offer section start */}

      <section className="row offers ">
          {
            ContentDetails.map(renderContentBox)
          }
      
      </section>
      {/* offer section ends here */}

      {/* Projects section starts here */}
      <section id="Projects" className="projects  text-center">
        <h1 className="line">Projects</h1>
        <div className="row my-5">{websites.map(renderWebsite)}</div>
      </section>

      <section id="Packages" className="packages  text-center">
        <h1 className="line">Packages</h1>
        <div className="row my-5">{packages.map(renderPackages)}</div>
      </section>

      <section id="About" className="about text-center">
        <h1 className="line mb-5">About</h1>
       <div className='about-content'>
       <div className=" row">
          <div className="col-md-6">
            <img src={aboutImage} alt="about image" className="col-6" />
          </div>
          <p className="col-md-6">
           {aboutContent.content}
          </p>
        </div>
       </div>
      </section>

      <section id="Contacts" className="contact text-center">
        <h1 className="line mb-5">Contacts</h1>
        <div className=" ">
          <div className='row contact-content'>
          <div className="col-md-6 mb-4">
              
            <ul class="list-group ">
              <li class="list-group-item d-flex">
                <AiOutlineMail className="icon pink" />
                <h3 className="align-self-center">huntdesign@gmail.com</h3>
              </li>

              <li class="list-group-item d-flex">
                <AiOutlinePhone className="icon yellow" />
                <h3 className="align-self-center">+27 671 530 612</h3>
              </li>

              <li class="list-group-item d-flex">
                <AiOutlineWhatsApp className="icon green" />
                <h3 className="align-self-center">+27 671 530 612</h3>
              </li>

              <li class="list-group-item d-flex">
                <AiOutlineLinkedin className="icon blue" />
                <a href="https://www.linkedin.com/in/voldi-muyumba-21a43914b/" className="align-self-center">
                  <h3>
                  Linkedin
                  </h3>
                </a>
              </li>

              <li class="list-group-item d-flex">
                <AiOutlineGithub className="icon red" />
                <a href="https://github.com/voldi-ux/" className="align-self-center">
                  <h3>
                  Github
                  </h3>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <Form title='Contact'/>
          </div>
          </div>
        </div>
      </section>
    <Footer />
    <Drawer 
      isVisible={drawerVisible}
      onClose={onClose}
    >
      <div classname='drawer'>
        <div className=''>
           <Form title='Enquire'/>
        </div>
      </div>
    </Drawer>
    </>
  );
};

export default HomePage;
