import React from 'react';
import { Link } from '@reach/router';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';


export default () => (
<div className='wraperitem'>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/testimony.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Service</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>Service</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid' id="service">
        <div className='row m-10-hor'>
          <div className='col-md-8'>
            <div className='left'>
              <div className='mainimg'>
                <img
                    src="./img/service2.jpg"
                    alt="imgservice"
                  />
              </div>
              <div className='content'>
                <div className='title'>
                  Architecture
                </div>
                <div className='desc'>
                  <p>Great interiors start with great architecture. Our architects design new homes, extensions and commercial buildings that make the most of their plot, light and climate.</p>
                  <p>We prepare concept designs, detailed working drawings and approval drawings, and coordinate with structural and MEP engineers. Because our architects and interior designers work side by side, the building and its interiors are planned together from day one.</p>
                  <blockquote>
                    We design for the local climate first: cross-ventilation, shaded openings and natural light keep homes comfortable and reduce energy bills.
                  </blockquote>
                  <p>From residential houses and farmhouses to small commercial buildings, we guide you through every stage from concept to completion.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='right'>
              <ul className='services-list'>
                <li>
                  <Link to="/works">All Works</Link>
                </li>
                <li>
                  <Link to="/service">Modern Design</Link>
                </li>
                <li>
                  <Link to="/service1">Interior</Link>
                </li>
                <li>
                  <Link className='active' to="/service2">Architecture</Link>
                </li>
                <li>
                  <Link to="/service3">Exterior</Link>
                </li>
              </ul>
              <div className='bannerservice'>
                <div className='imgbg'>
                  <img
                    src="./img/bg-widget.jpg"
                    alt="imgservice"
                  />
                </div>
                <div className='contb'>
                  <div className='headingb'>
                    Get a Free Quote
                  </div>
                  <div className='descb'>
                    Talk to our design experts
                  </div>
                  <div className="btn" onClick={()=> window.open("/contact", "_self")}>
                    <span className="shine"></span>
                    <span>Contact Us</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>

  <Testimony />
  <Footer />
</div>

);
