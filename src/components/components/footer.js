import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <footer className='container-fluid black_more'>
  <div className='bg-footer'>
    <img src='./img/footer-img.jpg' alt='bg-footer'/>
  </div>
    <div className='row m-10-hor'>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            <h2 className='font-weight-bold '>About Us</h2>
          </div>
          <div className='content'>
             <p>Artha Interiors is a Karachi-based interior design and architecture 
             studio creating homes and workspaces that are beautiful, practical and built to last.</p>
          </div>
          <div className='link-call' onClick={()=> window.open("mailto:info@arthainteriors.com", "_self")}>Email at. info@arthainteriors.com</div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Useful Links
          </div>
          <div className='content'>
             <Link className='link d-block' to="/about">About Us</Link>
             <Link className='link d-block' to="/works">Our Work</Link>
             <Link className='link d-block' to="/blog">Blog</Link>
             <Link className='link d-block' to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className='col-md-2'>
        <div className='footer-col'>
          <div className='heading'>
            Services
          </div>
          <div className='content'>
            <Link className='link d-block' to="/service">Modern Design</Link>
            <Link className='link d-block' to="/service1">Interior</Link>
            <Link className='link d-block' to="/service2">Architecture</Link>
            <Link className='link d-block' to="/service3">Exterior</Link>
          </div>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='footer-col'>
          <div className='heading'>
            Follow Us
          </div>
          <div className='content'>
            <p>See our latest projects, behind-the-scenes work 
               and design tips on social media.</p>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-facebook-f"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-linkedin"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa fa-twitter"></i>
            </div>
            <div className='socialicon'>
            <span className="shine"></span>
              <i className="fa  fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='subfooter'>
      <div className='row m-10-hor'>
        <div className='col-md-6'>
          <div className='content'>© Copyrights 2026 <span className='font-weight-bold'>Artha Interiors</span> All rights reserved.</div>
        </div>
      </div>
    </div>
  </footer>
);
