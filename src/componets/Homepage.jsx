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
import volume from "../assets/images/volume.png"
import phone from "../assets/images/phone.png"
import calculater from "../assets/images/calculater.png"
import search from "../assets/images/search.png"
import tab from "../assets/images/tab-web-1.png"
import tab1 from "../assets/images/tab-web-2.png"
import cube from "../assets/images/cube.png"
import Resturant from "../assets/images/restaurant1-opt.jpg"
import Resturant3 from "../assets/images/restaurant3-opt.jpg"
import eccomerce from "../assets/images/ecommerce/4.jpg"
import frmae from "../assets/images/frame.png"
import formbg from "../assets/images/form-bg.jpg"
import Footerimg from "../assets/images/footer-img.jpg"
import coun1 from "../assets/images/coun-1_compressed.webp"
import coun2 from "../assets/images/coun-2.png"
import coun3 from "../assets/images/coun-3.png"

// importing icons

import { FaPhoneAlt } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Home = () => {
  return (
   <div className="container">
    <div className="nav">
      <div className="logo">
        <img src={logo} alt="WEBSTEAM LOGO" />
  
      </div>
      
      <li><IoMailUnreadOutline/>support@logoorweb.com</li>
        <li><FaPhoneAlt />tel:(414) 626-7032</li>
     
      <li>Menu<IoMdMenu /></li>
    </div>

    <div className="hero-sec">
      <div className="paragraph">
<p>Say hello to our representative</p>
<h2>We Design <br /> Experiences, We</h2>
<h1>Develop Success</h1>
 <button>Contact With Us</button>
 <span><FaPhoneAlt />tel:(414) 626-7032</span>
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
      <br />
      <br />
      <br />
     

      <div className="service-box-sec">
      <div className="brand-box1">
        <img src={volume} alt="volume image" />
        <h4>Comprehensive Web <br /> Solutions</h4>
      </div>
      <div className="brand-box2">
      <img src={phone} alt="phone image" />
      <h4>identity and branding <br />Expertices</h4>
      </div>
      <div className="brand-box3">
   <img src={calculater} alt="calculater image" />
        <h4>stragectic digital <br /> merketing</h4>
      </div>
      <div className="brand-box4">
   <img src={search} alt="search image" />
        <h4>Identity and Branding <br /> Expertise</h4>
      </div>
     </div>

<div className="hero-serv-sec">
  <div className="para-sec-set">
    <p>Tailored, Dynamic, Integrated</p>
    <h1>Customized solutions, <br /> constantly evolving.</h1>
    <span>From concept to execution, we specialize in crafting visually appealing websites <br /> and user-friendly interfaces</span>
  </div>
  <img src={banner} alt="" />
</div>
<div className="card-serv">
  <div className="sec-card">
    <h3>
      <img src={tab} alt="" />
    Concept to Execution</h3>
    <p>From ideation to realization, we bring visions to life</p>
  </div>
  <div className="sec-card">
    <h3>
      <img src={tab1} alt="" />
      User-Friendly Experience</h3>
    <p>Seamless interactions, delighting users effortlessly</p>
  </div>
</div>
<br />
<br />
<br />
<br />

<div class="marquee-container">
        <div class="marquee-text">
            .Brand    .Brand    .Brand    .Brand    .Brand    .Brand    .Brand .Brand    .Brand    .Brand     .Brand    .Brand
        </div>
    </div>
    <div class="marquee-container2">
        <div class="marquee-text2">
            .Brand    .Brand    .Brand    .Brand    .Brand    .Brand    .Brand .Brand    .Brand    .Brand     .Brand    .Brand
        </div>
    </div>
    <br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


<div className="our-serv">
    <div className="our-serv1">
<p>OUR SERVICES</p>
<h5>What we offer for you</h5>
    </div>
    <div className="our-serv2">
<p>Discover growth with our customized IT solutions. Different global organizations trust us for our best software, services, and brand. Join us now.</p>
</div>
    </div>
<div className="main-sec">
  <div className="sec-logo">
    <img src={cube} alt="" />
<h2>Logo designing</h2>
<p>Creating unique brand identities through creative logo design that reflects the personality of your <br /> business and creates an eternal mark online.</p>
  <div className="align-box">
  <div className="sec-card">
    <h3>
    Logo Design <br />
    Learn more about logo design service</h3>
    <a href="#">read more</a>
  </div>
  <div className="sec-card">
    <h3>
    Logo Portfolio
    Check out our logo design portfolio</h3>
    <a href="#">click more</a>
  </div>
  <div className="sec-card">
    <h3>
    Logo Packages
    Check out our logo design packages</h3>
    <a href="#">click more</a>
  </div>
  </div>
  </div>
  <div className="sec-web">
    <p>Web designing</p>
  </div>
  <div className="sec-digt"></div>
  <div className="sec-brand"></div>
</div>
<div className="ratting-main">
  <div className="rate-box1">
    <img src={cube} alt="" />
    <h1>+858k</h1>
    <p>Happy Clients</p>
  </div>
  <div className="rate-box2">
  <img src={cube} alt="" />
    <h1>+356k</h1>
    <p>Projects Completed</p>
  </div>
  <div className="rate-box3">
  <img src={cube} alt="" />
    <h1>+145k</h1>
    <p>Business Partners</p>
  </div>
  <div className="rate-box4">
  <img src={cube} alt="" />
    <h1>+29</h1>
    <p>Awards Wining</p>
  </div>
</div>


<div className="project-sec">
 <div className="project-para-sec">
 <p>RECENT PROJECTS</p>
  <h1>Our latest case studies</h1>
 </div>
 <div className="project-nav">
<li>WEB DESIGN</li>
<li>LOGO DESIGN</li>
<li>BRANDING DESIGN</li>
 </div>
</div>
<div className="project-main">
  <div className="pro-sec-box1">
  <div className="project1">
    <img src={Resturant} alt="" />
  </div>
  </div>
  <div className="project2">
  <img src={Resturant3} alt="" />
  </div>
  <div className="project3">
  <img src={eccomerce} alt="" />
  </div>
  <div className="project4">
  <img src={Resturant} alt="" />
  <button><a href="#">VIEW MORE</a></button>
  </div>
  <div className="project5">
  <img src={Resturant3} alt="" />
  </div>
</div>

<div className="project-sec">
 <div className="project-para-sec">
 <p>TESTIMONIALSS</p>
  <h1>What PeopleSay About <br /> LogoOrWeb</h1>
  <h3>We always connected dots across ecosystems.</h3>
 </div>
 </div>
<div className="video-container">
  <img src={frmae} alt="" />
  <img src={frmae} alt="" />
  <img src={frmae} alt="" />
</div>

<br />
<br />
<div className="project-sec">
 <div className="project-para-sec">
 <p>With Best Pricing</p>
  <h1>Website Packages</h1>
 </div>
 <div className="btn-con-men">
  <button>Web Design</button>
  <button>E-Commerce</button>
  <button>Custome Dashboard</button>
 </div>
 </div>

<div className="main-pay-con-sec">
<div className="pay-container">
  <div className="payment1">
    <h1>Startup <br /> <span>Web Package</span></h1>
    <p>$ 299
    </p>
    <div className="bot-border"></div>
    <div className="ul-con">
      <li>5 Stock Photos</li>
      <li>5 Page Website</li>
      <li>3 Banner Design</li>
      <li>1 jQuery Slider Banner</li>
      <li>FREE Google Friendly Sitemap</li>
      <li>48 to 72 hours TAT</li>
    </div>
    <button>Equare Now</button>
    <h6>15 days time period</h6>
  </div>


</div>
<div className="pay-container2">
<div className="payment2">
    <h1>Startup <br /> <span>Web Package</span></h1>
    <p>$ 299
    </p>
    <div className="bot-border"></div>
    <div className="ul-con">
      <li>5 Stock Photos</li>
      <li>5 Page Website</li>
      <li>3 Banner Design</li>
      <li>1 jQuery Slider Banner</li>
      <li>FREE Google Friendly Sitemap</li>
      <li>48 to 72 hours TAT</li>
    </div>
    <button>Equare Now</button>
    <h6>15 days time period</h6>
  </div>
</div>
</div>
<div className="main-pay-con-sec">
<div className="pay-container">
  <div className="payment1">
    <h1>Startup <br /> <span>Web Package</span></h1>
    <p>$ 299
    </p>
    <div className="bot-border"></div>
    <div className="ul-con">
      <li>5 Stock Photos</li>
      <li>5 Page Website</li>
      <li>3 Banner Design</li>
      <li>1 jQuery Slider Banner</li>
      <li>FREE Google Friendly Sitemap</li>
      <li>48 to 72 hours TAT</li>
    </div>
    <button>Equare Now</button>
    <h6>15 days time period</h6>
  </div>


</div>
<div className="pay-container2">
<div className="payment2">
    <h1>Startup <br /> <span>Web Package</span></h1>
    <p>$ 299
    </p>
    <div className="bot-border"></div>
    <div className="ul-con">
      <li>5 Stock Photos</li>
      <li>5 Page Website</li>
      <li>3 Banner Design</li>
      <li>1 jQuery Slider Banner</li>
      <li>FREE Google Friendly Sitemap</li>
      <li>48 to 72 hours TAT</li>
    </div>
    <button>Equare Now</button>
    <h6>15 days time period</h6>
  </div>
</div>
</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<div className="project-sec">
 <div className="project-para-sec">
  <h1>Frequently Asked <br /> Queries</h1>
  <h3>The most frequently asked queries and their answers</h3>
 </div>
 </div>
 <div className="main-heading-box">
  <div className="headin-sec1">
    <h1> How long does it take to design a logo?</h1>
    </div>
    <div className="headin-sec2">
    <h1> How long does it take to design a logo?</h1>
    </div>
    <div className="headin-sec3">
    <h1> How long does it take to design a logo?</h1>
    </div>
    <div className="headin-sec4">
    <h1> How long does it take to design a logo?</h1>
    </div>
    <div className="headin-sec5">
    <h1> How long does it take to design a logo?</h1>
    </div>
    <div className="headin-sec6">
    <h1> How long does it take to design a logo?</h1>
    </div>
 </div>
 <div className="banner-sec">
<img src={formbg} alt="" />
 </div>
<div className="banner-heading">
<h1>Get free <br /> consultancy</h1>
<button>Get Free Counsolaty</button>
<div className="banner-form">
<input type="text" placeholder="Name"/> <br />
<input type="text" placeholder="Email"/> <br />
<input type="text" placeholder="Your Company"/>
</div>
</div>
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


<div className="social-links">
  <a href="#"><FaInstagram /></a>
 <a href="#"> <FaFacebook /></a>
</div>
   </div>
  );
};

export default Home;
