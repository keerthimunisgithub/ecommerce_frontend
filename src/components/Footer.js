import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from "react-icons/bs";

const Footer = () => {
  return ( <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex align-items-center gap-30">
              <img src='images/newsletter.png' alt='newsletter'/>
              <h2 className='mb-0 text-white'>Sign up for Newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group">
  <input type="text" className="form-control py-1" 
  placeholder="Your Email Address" 
  aria-label="Your Email Address" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2">Subscribe</span>
</div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-4">
          <h4 className='text-white mb-4'>Contact Us </h4>
          <div>
            <address className='text-white fs-6'>Hno: 184, Aspect 14, <br/>
              Elmwood Lane,Leeds,<br/>
              LS28WG</address>
              <a href="tel:+44 7438779200" className="mt-4 d-block mb-1 text-white">
                +44 7438779200
              </a>
              <a href="mailto:keerthiga4010@gmail.com" className="mt-4 d-block mb-0 text-white">
                keerthiga4010@gmail.com
              </a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a className='text-white' href="#">
                  <BsLinkedin className='fs-4'/>
                  </a>
                <a className='text-white' href="#">
                  <BsInstagram className='fs-4'/>
                </a>
                <a className='text-white' href="#">
                  <BsGithub className='fs-4'/></a>
                <a className='text-white' href="#">
                <BsYoutube className=' fs-4'/>
                  </a>
              </div>
          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4'>Information</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Privacy Policy</Link>
            <Link className='text-white py-2 mb-1'>Refund Policy</Link> 
            <Link className='text-white py-2 mb-1'>Shipping Policy</Link> 
            <Link className='text-white py-2 mb-1'>Terms & Condition</Link> 
            <Link className='text-white py-2 mb-1'>Blogs</Link> 

          </div>
        </div>
        <div className="col-3">
          <h4 className='text-white mb-4'>Accounts</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>About us</Link>
            <Link className='text-white py-2 mb-1'>FAQ</Link> 
            <Link className='text-white py-2 mb-1'>Contact</Link> 

          </div>
        </div>
        <div className="col-2">
          <h4 className='text-white mb-4'>Quick Links</h4>
          <div className='footer-link d-flex flex-column'>
            <Link className='text-white py-2 mb-1'>Latops</Link>
            <Link className='text-white py-2 mb-1'>Headphones</Link> 
            <Link className='text-white py-2 mb-1'>Tablet</Link> 
            <Link className='text-white py-2 mb-1'>Watch</Link> 

          </div>
        </div>

      </div>
    </div>
    </footer>
    <footer className='py-4'>
   <div className="container-xxl">
   <div className="row">
 <div className="col-12">
  <p className='text-center mb-0 text-white'> &copy; 
  {new Date().getFullYear()}; Powered By MukeeKart
  </p>
 </div>
   </div>
   </div></footer>
    </>
  );
};

export default Footer;