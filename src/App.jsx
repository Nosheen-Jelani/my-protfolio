
import './index.css'
import React, { useEffect } from 'react'
// import { FaClone, FaBandcamp } from "react-icons/fa";
import { FaChevronRight, FaCalendarAlt, FaRegUserCircle } from "react-icons/fa";
import { BiCalendar,  BiLogoOkRu } from "react-icons/bi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import { BiBookAlt, BiCreditCardFront,BiMobile,BiUserCircle,BiWindows, BiPrinter } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// import logo from '/public/logo.png';
AOS.init();
function App() {
 
  return (

  <div className='main_container'>

  <ul className='navbar'>
  <div class="navebar-logo">
  <img src="/pictures/logo.png" alt="logo" />
  </div>
  <li class="dropdown">
    <a href="#" class="dropbtn">Home</a>
    <div class="dropdown-content">
      <a href="#">Software Startup</a>
      <a href="#">digital Marketting</a>
      <a href="#">Buisness Consulting</a>
      <a href="#">IT Agency</a>
      <a href="#">Buisness Consulting</a>
    </div>
    </li>
    <li class="dropdown">
    <a href="#" class="dropbtn">Services</a>
    <div class="dropdown-content">
      <a href="#">Service Style1</a>
      <a href="#">Service Style2</a>
      <a href="#">Service Style3</a>
    </div>
    </li>
    <li class="dropdown dropdown3 ">
    <a href="#" class="dropbtn">About Us</a>
   
    </li>
    <li class="dropdown">
    <a href="#" class="dropbtn">Protfolio</a>
    <div class="dropdown-content">
      <a href="#">Protfolio Details1</a>
      <a href="#">Protfolio Details2</a>
     
    </div>
    </li>
    <li class="dropdown">
    <a href="#" class="dropbtn">Pages</a>
    <div class="dropdown-content">
      <a href="#">Team</a>
      <a href="#">Pricing</a>
      <a href="#">Services</a>
      <a href="#">FAQ</a>
    </div>
    </li>
    <li class="dropdown">
    <a href="#" class="dropbtn">Contact Us</a>
  
    </li>

  </ul>

<div class="customer">
<div class="customerimg"> </div>
<div class="customername">  

      <h4> __Hello I'm </h4><br></br>
      <h1>Nosheen Jelani</h1>
      <h3>Software Develpopr</h3>  
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra
         maecenas accumsan lacus vel facilisis.</p>
      <button type="button" class="btn btn-outline-primary">Contact With Me</button>
</div>
</div>

<div class="separate-border"></div>
<div class="my-expertise">
<div class="container">
<div class="section-title style-two">

 <h2>My Expertise</h2>
</div>
<div class="row justify-content-center">
<div class="col-lg-4 col-md-6 col-sm-6">
<div class="expertises aos-init aos-animate"
    data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">

<i class="icon fa-solid bi/BiBookAlt"> <BiBookAlt /></i>
  <h3>Product Design</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
</div>
</div>
<div class="col-lg-4 col-md-6 col-sm-6">
  <div class="expertises aos-init aos-animate" 
     data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
      <i class="icon fa-solid BiCreditCardFront"> <BiCreditCardFront /></i>
      <h3>Web Design</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
      </div></div>
      <div class="col-lg-4 col-md-6 col-sm-6">
      <div class="expertises aos-init aos-animate"
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
        <i class="icon bg-f3f9e7 fa-brands BiUserCircle"> <BiUserCircle/> </i>
        <h3>Branding &amp; Logo</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
        </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="expertises aos-init aos-animate" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <i class="icon fa-solid BiPrinter"><BiPrinter /></i>
          <h3>Print Design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
          </div>
 </div>
 <div class="col-lg-4 col-md-6 col-sm-6">
   <div class="expertises aos-init aos-animate"
    data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
     <i class="icon bg-eaf6ff fa-solid BiMobile"><BiMobile/></i>
     <h3>App Design</h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
     </div>
     </div>
     <div class="col-lg-4 col-md-6 col-sm-6">
       <div class="expertises aos-init aos-animate" 
       data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
         <i class="icon bg-faf2ff fa-solid BiWindows"><BiWindows/></i>
           <h3>Motion &amp; Animation</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
           </div>
           </div>
           </div>
           </div>
</div>
<div class="separate-border"></div>
  <div class="my-projects">
  <div className='container'>
<div class="section-title style-two">
    <h2>My Projects</h2>
</div>
<div class="row justify-content-center">


 <div class="col-lg-4 col-sm-6 col-md-6">
 <div class="projects  aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
   <img src="/pictures/project-img1.jpg" alt="image" />
    <h3>Startup Business</h3>
     <a class="link-btn" href="#"></a>
  </div>
  </div>
  <div class="col-lg-4 col-sm-6 col-md-6">
    <div class="projects  aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <img src="/pictures/project-img2.jpg" alt="image" />
    <h3>App Landing</h3>
    <a class="link-btn" href="#"></a>
    </div>
    </div>

    <div class="col-lg-4 col-sm-6 col-md-6">
    <div class="projects  aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <img src="/pictures/project-img3.jpg" alt="image" />
    <h3>Digital Marketting</h3>
    <a class="link-btn" href="#"></a>
    </div>
    </div>
    <div class="col-lg-4 col-sm-6 col-md-6">
    <div class="projects  aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
    <img src="/pictures/project-img4.jpg" alt="image" />
    <h3>Business Startup</h3>
    <a class="link-btn" href="#"></a>
    </div>
    </div>
    <div class="col-lg-4 col-sm-6 col-md-6">
    <div class="projects  aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
    <img src="/pictures/project-img5.jpg" alt="image" />
    <h3>Digital Agency</h3>
    <a class="link-btn" href="#"></a>
    </div>
    </div>
    <div class="col-lg-4 col-sm-6 col-md-6">
    <div class="projects  aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
    <img src="/pictures/project-img6.jpg" alt="image" />
    <h3>Blog Business </h3>
    <a class="link-btn" href="#"></a>
    </div>
    </div>
      </div>
     </div>
     </div>   
                               
<div class="separate-border"></div>
   <div class="my-skills">
       <div class="container">
 <div class="section-title style-two" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
     <h2>My Skills</h2>
     {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
     tempor incididunt ut labore et dolore
      magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p> */}
 </div>
 <div class="row justify-content-center align-items-center">
     <div class="col-lg-3 col-md-6 col-sm-6">
         <div class="skills  aos-init aos-animate" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
               <img src="/pictures/skills-img1.png" alt="image" />
         </div>
     </div>
     <div class="col-lg-3 col-md-6 col-sm-6">
         <div class="skills  aos-init aos-animate" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
               <img src="/pictures/skills-img2.png" alt="image" />
         </div>
     </div>
     <div class="col-lg-3 col-md-6 col-sm-6">
         <div class="skills  aos-init aos-animate" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">
              <img src="/pictures/skills-img3.png" alt="image" />
         </div>
     </div>
     <div class="col-lg-3 col-md-6 col-sm-6">
         <div class="skills  aos-init aos-animate" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
         <img src="/pictures/skills-img4.png" alt="image" />
         </div>
     </div>
 </div>
       </div>
   </div>

   <div class="separate-border"></div>
<div class="my-details">
  
  <div class="container">
 
    <div class="row">
   
<div class="detailed-block">
<div class="short-brief-content">
    <div class="section-title style-two">
        <h2>My Education</h2>
          </div>
<ul class="timeline">
    <li class="timeline-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <div class="timeline-info">
            <div class="sub-title">
               D.P.S & Inter Science college Bhakhar
              - <span>2007</span>
            </div>
        </div>
<div class="timeline-marker"></div>
<div class="timeline-content">
  <h3>Secondary Education</h3>
  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
     consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
    </div>
    </li>
    <li class="timeline-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div class="timeline-info">
            <span class="sub-title">
            D.P.S & Inter Science college Bhakhar
              - <span>2010</span>
            </span>
        </div>
<div class="timeline-marker"></div>
<div class="timeline-content">
    <h3>Higher Secondary Education</h3>
    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
       consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
        </div>
    </li>
    <li class="timeline-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <div class="timeline-info">
            <span class="sub-title">
                Arid University
             - <span>2014</span>
            </span>
        </div>
<div class="timeline-marker"></div>
<div class="timeline-content">
 <h3>Bachlors(BSCS) in Computer science</h3>
  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, 
    consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
    </div>
    </li>
  <li class="timeline-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <div class="timeline-info">
      <span class="sub-title">
        Gomal University
        - <span>2021</span>
            </span>
        </div>
<div class="timeline-marker"></div>
<div class="timeline-content">
  <h3>Masters(MSCS) in Computer science</h3>
  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
     consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
  </div>
  </li>
  </ul>
<div class="detailed-block">
<div class="short-brief-content">
<div class="section-title style-two">
        <h2>My Experience</h2>
    </div>
<ul class="timeline">
<li class="timeline-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
    <div class="timeline-info">
      <span class="sub-title">
        Year
      - <span>2019 - 2022</span>
      </span>
    </div>
<div class="timeline-marker"></div>
<div class="timeline-content">
  <h3>Researcher</h3>
  <p>  Publish four research articales in high impact factor Journal  </p>
    </div>
  </li>
  <li class="timeline-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
    <div class="timeline-info">
      <span class="sub-title">
        Year
      - <span>2017 - 2019</span>
      </span>
    </div>
<div class="timeline-marker"></div>
<div class="timeline-content">
  <h3>Software Project Manager</h3>
  <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, 
    consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
    </div>
  </li>
<li class="timeline-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
  <div class="timeline-info">
    <span class="sub-title">
    Year
      - <span>2016 - 2017</span>
      </span>
       </div>
<div class="timeline-marker"></div>
<div class="timeline-content">
    <h3>Project Manager</h3>
    <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a,
       consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
      </div>
</li>
<li class="timeline-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
    <div class="timeline-info">
        <span class="sub-title">
           Year
         
            - <span>2015</span>
        </span>
    </div>
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Internship</h3>
        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, 
          consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut.</p>
    </div>
</li>
</ul>
      </div>
      </div>
      </div>
      </div>
      </div>


</div>
</div>
<div class="separate-border"></div>
<div class="my-clients">
  <div class="container">
<div class="section-title style-two">
    <h2>My Best Clients</h2>
</div>
<div class="swiper partner-slides">
<div class="swiper-wrapper">
 <div class="swiper-slide">
    <div class="partner-item text-center">
           <img src="/pictures/partner1.png" alt="image" />
            </div>
        </div>
<div class="swiper-slide">
            <div class="partner-item text-center">
            <img src="/pictures/partner2.png" alt="image" />          
              </div>
        </div>
<div class="swiper-slide">
            <div class="partner-item text-center">
            <img src="/pictures/partner3.png" alt="image" />          
              </div>
        </div>
<div class="swiper-slide">
            <div class="partner-item text-center">
            <img src="/pictures/partner4.png" alt="image" />           
             </div>
        </div>
<div class="swiper-slide">
            <div class="partner-item text-center">
            <img src="/pictures/partner5.png" alt="image" />           
             </div>
        </div>
<div class="swiper-slide">
            <div class="partner-item text-center">
            <img src="/pictures/partner6.png" alt="image" />             
             </div>
              </div>
<div class="swiper-slide">
             <div class="partner-item text-center">
             <img src="/pictures/partner4.png" alt="image" />            
             </div>
            </div>
          </div>
<div class="swiper-button-prev"></div>
<div class="swiper-button-next"></div>
  </div>
  </div>
  </div><div class="separate-border"></div>
  <div class="blog-post">
<div class="container">
    <div class="section-title style-two">
        <h2>Latest Blog Post</h2>
    </div>
    <div class="row justify-content-center">
     <div class="col-lg-4 col-md-6">
      <div class="pp-post-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
        <div class="post-content">
          <ul class="meta">
          <li>
    <i class="FaCalendarAlt"><FaCalendarAlt /></i>
      
        Sep 03, 2021
             </li>
            <li>
                <i class="FaRegUserCircle"> <FaRegUserCircle/> </i>
                Shelley Percy
            </li>
          </ul>
     <h3>
         <a href="#">Top 5 Tips To Create An Eye-Catching Website</a>
     </h3>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
     <a class="link-btn" href="#">
         Read More <i class="fas fa-chevron-right"></i>
     </a>
      </div>
     </div>
     </div>
   <div class="col-lg-4 col-md-6">
    <div class="pp-post-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <div class="post-content">
<ul class="meta">
    <li>
    <i class="FaCalendarAlt"><FaCalendarAlt /></i>
      
        Jan 03, 2022
    </li>
    <li>
    <i class="FaRegUserCircle"> <FaRegUserCircle/> </i>
        Stevn Smith
    </li>
</ul>
<h3>
    <a href="#">Improve Marketing Techniques For Lead Generation</a>
</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
  sed do eiusmod tempor incididunt.</p>
<a class="link-btn" href="#">
Read More <i class="fas fa-chevron-right"></i>
</a>
</div>
</div>
</div>
<div class="col-lg-4 col-md-6">
    <div class="pp-post-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
     <div class="post-content">
      <ul class="meta">
      <li>
    <i class="FaCalendarAlt"><FaCalendarAlt /></i>
      
        Dec 03, 2023
    </li>
    <li>
    <i class="FaRegUserCircle"> <FaRegUserCircle/> </i>
         David Jon
  </li>
  </ul>
  <h3>
    <a href="#">Esit And A Case For Successful Fast Delivery</a>
  </h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
  <a class="link-btn" href="#">
     Read More <i class="fas fa-chevron-right"></i>
   </a>
  </div>
  </div>
</div>
</div>
</div>
</div>
<div class="separate-border"></div>
<div class="contact-area">
<div class="container">
  <div class="row align-items-center">
    <div class="col-lg-6">
    <div class="contact-img"> <img src="/pictures/hireee.png" alt="image" /> 
      </div>
    </div>
<div class="col-lg-6">
    <div class="contact-form">
        <div class="contact-title">
        <h2>Hire Me!</h2>
<p>
I am available for freelancing work. Please connect with me <br></br>via phone:
         
<a href="tel:92-3002025353">+92-3002025353</a>
          or email: <a href= ""><h5>nosheen.jillani@gmail.com</h5></a>
          {/* <a href="/cdn-cgi/l/email-protection#a1c9c4cdcdcee1d1d4cfc6c4cfd58fc2cecc">
  <span class="__cf_email__" data-cfemail="6109040d0d0e2111140f06040f154f020e0c">[email &#160;protected]</span>
          </a> */}
      </p>
  </div>
  <form>
      <div class="contact-form-box">
    <div class="row">
    <div class="col-md-6">
    <div class="form-group">
    <input type="text" placeholder="Name" class="form-control" required="" name="name" value=""/>
      </div>
      </div>
    <div class="col-md-6">
<div class="form-group">
  <input type="email" placeholder="Email" class="form-control" required="" name="email" value=""/>
    </div>
    </div>
    <div class="col-md-6">
    <div class="form-group">
      <input type="tel" placeholder="Phone number" class="form-control" required="" name="number" value=""/>
        </div>
          </div>
         <div class="col-md-6">
         <div class="form-group">
         <input type="text" placeholder="Subject" class="form-control" required="" name="subject" value=""/>
          </div>
        </div>
         <div class="col-lg-12 col-md-12">
        <div class="form-group">
           <textarea name="message" cols="30" rows="6" placeholder="Write your message..." class="form-control" required=""></textarea>
        </div>
         </div>
      <div class="col-lg-12 col-sm-12">
       <button type="submit" class="btn btn-primary">Send Message</button>
        </div>
        </div>
        </div>
    </form>
</div>
</div>
</div>
</div>
</div>
{/* footer */}
<footer class="footer-area">
<div class="container">
    <div class="row justify-content-center">
    <div class="col-lg-3 col-sm-6">
    <div class="single-footer-widget" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100">
      <div class="logo">
          <a href="#">
         <img src="/pictures/logo.png" alt="logo" />
          </a>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam.</p>
         <ul class="social-links">
          <li>
         
          <a href="https://www.facebook.com/" target="_blank">
            <i class="fa-brands fa-facebook-f"><FaFacebookF/></i>
                        </a>
            </li>
            <li>
            <a href="https://twitter.com/" target="_blank">
              <i class="fa-brands fa-twitter"><FaTwitter/></i>
              </a>
             </li>
             <li>
                 <a href="https://linkedin.com/" target="_blank">
                     <i class="fa-brands fa-linkedin-in"><FaLinkedinIn/></i>
                 </a>
             </li>
             <li>
                 <a href="https://www.instagram.com/" target="_blank">
                     <i class="fa-brands fa-instagram"><GrInstagram/></i>
                 </a>
             </li>
                </ul>
            </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="single-footer-widget ml-4 pl-5" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200">
            <h3>Explore</h3>
            <ul class="list">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about/">About</a>
                </li>
                <li>
                    <a href="/services/">Services</a>
                </li>
                <li>
                    <a href="/portfolio/">Portfolio</a>
                </li>
                <li>
                    <a href="/team/">Team</a>
                </li>
            </ul>
        </div>
</div>
<div class="col-lg-3 col-sm-6">
    <div class="single-footer-widget ml-4" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="300">
        <h3>Quick Links</h3>
        <ul class="list">
            <li>
                <a href="/contact-us/">Contact Us</a>
            </li>
            <li>
                <a href="/pricing/">Pricing</a>
            </li>
            <li>
                <a href="/faq/">Faq</a>
            </li>
            <li>
                <a href="/privacy-policy/">Privacy Policy</a>
            </li>
            <li>
                <a href="/terms-conditions/">Terms &amp;Conditions</a>
            </li>
        </ul>
    </div>
</div>
<div class="col-lg-3 col-sm-6">
    <div class="single-footer-widget" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="400">
    <h3>Get in Touch</h3>
    <ul class="get-in-touch">
    <li>
        <i class="fa-solid fa-location-dot"><IoLocationOutline/></i>
                 Lahore Punajb Pakistan 
    </li>
    <li>
        <i class="fa-solid fa-headset"><FaHeadset/></i>
        <a href="tel:+92-3002025353">+92-3002025353</a>
        <br/>
        <a href="tel:+92-3217785353">+92-3217785353</a>
    </li>
    <li>
        <i class="fa-solid fa-envelope"><BiEnvelope /></i>
        <a href="nosheen.jillani@gmail.com">
        nosheen.jillani@gmail.com
        </a>
        
    </li>
        </ul>
    </div>
</div>
</div>
 </div>
 <div class="copyright-area">
     <div class="container">
         <p>
             Copyright © 
             
             2024
          
             NJ. All Rights Reserved By
         
             <a href="#">Nosheen Jelani</a>
         </p>
     </div>
 </div>
</footer>










   
</div>
  )
}

export default App
