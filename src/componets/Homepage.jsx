import React from "react";
import "./Navbar.css";

// importing images

import logo from "../assets/websteam.png"
import banner from "../assets/images/banner-illus.png"
import Client1 from "../assets/images/client-1.jpg"
import Client2 from "../assets/images/client-2.jpg"
import Client3 from "../assets/images/client-3.jpg"
import serviceicon1 from "../assets/images/service-icon1.png"
import serviceicon from "../assets/images/service-icon2.png"
import serviceicon2 from "../assets/images/service-icon3.png"

const Home = () => {
  return (
   <div className="container">
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="WEBSTEAM LOGO" />
  
      </div>
      
       <li>support@logoorweb.com</li>
        <li>tel:(414) 626-7032</li>
     
      <li>Menu</li>
    </div>

    <div className="hero-sec">
      <div className="paragraph">
<p>Say hello to our representative</p>
<h2>We Design <br /> Experiences, We</h2>
<h1>Develop Success</h1>
 <button>Contact With Us</button>
 <span>tel:(414) 626-7032</span>
      </div>
      <div className="img-sec">
<img src={banner} alt="banner-img" />
      </div>
      
    </div>
<div className="client-exp">
<img src={Client1} alt="client1" />
<img src={Client2} alt="client2" />
<img src={Client3} alt="client3" />
<p><span>690+</span> happy client</p>
      </div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
      <div className="main-box-sec">
      <div className="box-sec1">
        <img src={serviceicon1} alt="" />
        <h2>Product Development</h2>
        <p>Advanced technology IT solutions help smooth product development for the success of your business.</p>
      </div>
      <div className="box-sec2">
        <img src={serviceicon} alt="" />
        <h2>Digital Services</h2>
        <p>Boost your business with stronger digital solutions and connect with customers in a trustworthy way.</p>
      </div>
      <div className="box-sec3">
      <img src={serviceicon2} alt="" />
        <h2>IT Advisor</h2>
        <p>Boost the business with smooth creative thinking and growth with excellent IT consultation and solutions.</p>
      </div>
      </div>

      <div className="service-sec">
        <h2>what we do</h2>
        <p>Your <span>Vision,</span> Our<span>Inspiration,</span><br /> Business <span>Revolution</span> 
        </p>
        <h3>Your vision motivates us to launch a business revolution with amazing IT services and <br /> consultancy, and as a team, we shape the achievement of goals.</h3>
      </div>
   </div>
  );
};

export default Home;
