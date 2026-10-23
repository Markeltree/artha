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
                    src="./img/service.jpg"
                    alt="imgservice"
                  />
              </div>
              <div className='content'>
                <div className='title'>
                  Modern <span className='color'>Design</span>
                </div>
                <div className='desc'>
                  <p>Modern design is about clarity: clean lines, honest materials and spaces that feel open and calm. We create contemporary interiors that are easy to live in and still look fresh years later.</p>
                  <p>Our modern design service covers space planning, colour and material palettes, built-in joinery, lighting design and furniture selection. You get detailed 2D plans and realistic 3D renders, so you can see and approve every room before work begins on site.</p>
                  <blockquote>
                    Modern doesn't mean cold. We balance minimal forms with warm wood, soft textiles and layered lighting, so every space feels welcoming.
                  </blockquote>
                  <p>Ideal for new apartments, villa renovations, offices and showrooms looking for a clean, contemporary identity.</p>
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
                  <Link className='active' to="/service">Modern Design</Link>
                </li>
                <li>
                  <Link to="/service1">Interior</Link>
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
