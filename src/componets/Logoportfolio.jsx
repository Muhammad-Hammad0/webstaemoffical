import React from 'react'
import "./Navbar.css";
import "./logoport.css"
// import "./function.js"

import logo from "../assets/websteam.png"
import Portbg from "../assets/images/portbg.jpg"
import Brand1 from "../assets/images/branding-port/1.webp"
import Brand2 from "../assets/images/branding-port/2.webp"
import Brand3 from "../assets/images/branding-port/3.webp"
import Brand4 from "../assets/images/branding-port/4.webp"
// import Brand5 from "../assets/images/branding-port/5.webp"
import Footerimg from "../assets/images/footer-img.jpg"
import coun1 from "../assets/images/coun-1_compressed.webp"
import coun2 from "../assets/images/coun-2.png"
import coun3 from "../assets/images/coun-3.png"




import { FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


function Logoportfolio() {
  return (
   <div className="container"> <div className="nav">
          <div className="logo">
            <img src={logo} alt="WEBSTEAM LOGO" />
      
          </div>
          
          <li><IoMailUnreadOutline/>support@logoorweb.com</li>
            <li><FaPhoneAlt />tel:(414) 626-7032</li>
         
          <li>Menu<IoMdMenu /></li>
        </div>
        <div className="hero-con">
        <div className="heading-main">
            <h1>LOGO <span>PORFOLIO</span></h1>
            </div>
            <div className="bg-img">
                <img src={Portbg} alt="" />
            </div>
        </div>
        <div className="project-sec">
 <div className="project-para-sec">
 <p>Our Portfolio</p>
  <h1>We­ Work­ With­ Top­ Brands­</h1>
 </div>
 <div className="project-nav">
<li>LOGO</li>
<li>Animated LOGO</li>

 </div>
</div>
<div className="brand-con">
    <div className="brand1">
    <img src={Brand1} alt="" />
    <img src={Brand2} alt="" />
    <img src={Brand3} alt="" />
    <img src={Brand4} alt="" />
    </div>
<div className="brand2">
    <img src={Brand1} alt="" />
    <img src={Brand2} alt="" />
    <img src={Brand3} alt="" />
    <img src={Brand4} alt="" />
    </div>
</div>
 
<br />
<br />
<br />
<br />


<div className="main-footer-sec">
  <img src={Footerimg} alt="" />
  <div className="footer">
  </div>
  <div className="card-coun1">
      <img src={coun1} alt="" />
<h1>CAN <br />
+1 437 739 1483</h1>
<p>320 Bay St., Toronto, <br /> ON M5H 4A6, Canada</p>
    </div>
    <div className="card-coun2">
      <img src={coun2} alt="" />
<h1>UK <br />
+44 20 3286 7999</h1>
<p>Office # 207 1-45 <br /> Durham St, London </p>
    </div>
    <div className="card-coun3">
      <img src={coun3} alt="" />
<h1>US <br />
(414) 626-7032</h1>
<p>6 Jean Drive, Towaco, <br /> Montville, New Jersey</p>
    </div>
   <div className="foot-con">
    <h1>WebSteam<br /><span>Offical site</span></h1>
    <p>A creative digital design studio and technology solutions supplier influencing creativity and excellence in the digital world.</p>
   </div>
<div className="foot-nav-main">
<div className="quick-links">
  <h1>Quick Links</h1>
  <li><a href="#">Home</a></li>
  <li><a href="#">About us</a></li>
  <li><a href="#">Contact us</a></li>
  <li><a href="#">Term and Condition</a></li>
  <li><a href="#">Privicy Policy</a></li>
</div>
<div className="Services">
  <h1>Services</h1>
  <li><a href="#">Website development</a></li>
  <li><a href="#">Logo Design</a></li>
  <li><a href="#">Branding Design</a></li>
  <li><a href="#">Digital Merketing</a></li>
  <li><a href="#">Mobile and App Development</a></li>
</div>
<div className="Porfolio">
  <h1>Porfolio</h1>
  <li><a href="#">Logo Design Portfolio</a></li>
  <li><a href="#">Website Development</a></li>
  <li><a href="#">Branding Portfolio</a></li>
  <li><a href="#">Mobile App Portfolio</a></li>
  <li><a href="#">Graphis Design Portfolio</a></li>
</div>
</div>
</div>
<br />
<hr />
<div className="social-links">
  <a href="#"><FaInstagram /></a>
 <a href="#"> <FaFacebook /></a>
</div>
</div>
       
           
  )
}

export default Logoportfolio
