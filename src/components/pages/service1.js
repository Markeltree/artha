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
                    src="./img/service1.jpg"
                    alt="imgservice"
                  />
              </div>
              <div className='content'>
                <div className='title'>
                  Interior
                </div>
                <div className='desc'>
                  <p>Our interior design service turns empty or outdated rooms into spaces that reflect your personality and support the way you live or work.</p>
                  <p>We take care of everything inside the four walls: layouts, false ceilings, wall finishes, flooring, kitchens, wardrobes, lighting, furniture, curtains and accessories. Our team sources from trusted local workshops and suppliers, and supervises installation so the finished room matches the design.</p>
                  <blockquote>
                    A well-designed interior should be comfortable on a Monday morning, not just beautiful in photographs.
                  </blockquote>
                  <p>Available as a single-room design package or a complete turnkey project for homes, offices, clinics, cafés and restaurants.</p>
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
                  <Link className='active' to="/service1">Interior</Link>
                </li>
                <li>
                  <Link to="/service2">Architecture</Link>
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
