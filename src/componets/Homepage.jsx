import React from "react";
import "./Navbar.css";

// importing images

import logo from "../assets/websteam.png"
import banner from "../assets/images/banner-illus.png"
import Client1 from "../assets/client-1.png"
// import Client2 from "../assets/client-2.png"
import Client3 from "../assets/client-3.png"

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
<img src={Client1} alt="client2" />
<img src={Client3} alt="client3" />
<p><span>690+</span> happy client</p>
      </div>
   </div>
  );
};

export default Home;
