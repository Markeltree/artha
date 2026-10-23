import React from 'react';
import { Link } from '@reach/router';

export default () => (
  <section className='container-fluid p-md-0'>
        <div className='row'>

          <div className='col-md-6'>
            <img src='./img/mocks.jpg' alt='Living room designed by Artha Interiors' className='w-100 border-radius'/>
          </div>
          <div className='col-md-6 centered'>
            <div>
              <div className="subheading mt-md-0 mt-5">
                You can trust us
              </div>
              <div className="heading">
                Let's Design Your Space
              </div>
              <p>
                From a single room makeover to a complete home, 
                <span className='br'></span>we handle design, sourcing and execution 
                <span className='br'></span>so you can simply move in and enjoy.
              </p>
              <Link className='btn' to="/contact">
                <span className="shine"></span>
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
          
        </div>
    </section>
);
