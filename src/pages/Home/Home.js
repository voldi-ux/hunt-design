import React from "react";
import Header from "../../components/header/header";
import Form from "../../components/form/form";
import ContentBox from "../../components/contentBox/contentBox";
import ProjectBox from "../../components/projectBox/projectBox";
import findme from "../../assets/images/image-2.png";
import trilo from "../../assets/images/image-3.png";
import natours from "../../assets/images/image-4.png";
import aboutImage from "../../assets/images/vector.png";
import {
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
  AiOutlinePhone,
  AiOutlineGithub,
} from "react-icons/ai";
import Footer from '../../components/footer/footer'

import "./Home.scss";
import PackageBox from "../../components/packageBox/packageBox";

const HomePage = () => {
  const websites = [
    {
      title: "Findme Website",
      image: findme,
      color: "#1647C1",
    },
    {
      title: "Trilo Website",
      image: trilo,
      color: "#ED1E79",
    },
    {
      title: "Natours Website",
      image: natours,
      color: "#15B756",
    },
  ];

  const packages = [
    {
      title: "Static Website",
      services: [
        "3 pages",
        "2 x Desigins",
        "ssl security",
        "SEO",
        "Responsive",
        "1 month maintenance",
      ],
    },
    {
      title: "Online Shops",
      services: [
        "Shopping Cart",
        "Online Payments",
        "2 x Desigins",
        "ssl security",
        "SEO",
        "Responsive",
        "2 month maintenance",
        "Database",
      ],
    },
    {
      title: "Web Applications",
      services: [
        "User Authentication",
        "Loggin implementation",
        "ssl security",
        "SEO",
        "Responsive",
        "3 month maintenance",
        "Database",
      ],
    },
  ];

  const renderWebsite = (web) => {
    return <ProjectBox web={web} />;
  };
  const renderPackages = (Package) => {
    return <PackageBox key={Package.title} Package={Package} />;
  };
  return (
    <>
      {/* header */}
      <Header  />
      <div className="row padding">
        <div className="col-md-4"></div>
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <Form />
        </div>
      </div>
      {/* header ends here */}

      {/* offer section start */}

      <section className="row offers ">
        <ContentBox
          detail={{
            title: "Web Design",
          }}
        />
        <ContentBox
          detail={{
            title: "UX/UI",
          }}
        />
        <ContentBox
          detail={{
            title: "SEO",
          }}
        />
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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum
          </p>
        </div>
       </div>
      </section>

      <section id="Contacts" className="contact text-center">
        <h1 className="line mb-5">Contacts</h1>
        <div className=" ">
          <div className='row contact-content'>
          <div className="col-md-6">
              
            <ul class="list-group ">
              <li class="list-group-item d-flex">
                <AiOutlineMail className="icon pink" />
                <h3 className="align-self-center">huntdesign@gmail.com</h3>
              </li>

              <li class="list-group-item d-flex">
                <AiOutlinePhone className="icon yellow" />
                <h3 className="align-self-center">0671530612</h3>
              </li>

              <li class="list-group-item d-flex">
                <AiOutlineWhatsApp className="icon green" />
                <h3 className="align-self-center">0671530612</h3>
              </li>

              <li class="list-group-item d-flex">
                <AiOutlineLinkedin className="icon blue" />
                <a href="#ffff" className="align-self-center">
                  <h3>
                  Linkedin
                  </h3>
                </a>
              </li>

              <li class="list-group-item d-flex">
                <AiOutlineGithub className="icon red" />
                <a href="#ffff" className="align-self-center">
                  <h3>
                  Github
                  </h3>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <Form />
          </div>
          </div>
        </div>
      </section>
    <Footer />
    </>
  );
};

export default HomePage;
