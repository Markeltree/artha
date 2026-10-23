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
                    src="./img/service3.jpg"
                    alt="imgservice"
                  />
              </div>
              <div className='content'>
                <div className='title'>
                  Exterior
                </div>
                <div className='desc'>
                  <p>Your building's exterior is the first impression it makes. We design elevations, facades, entrances and outdoor spaces that look striking and stand up to the weather.</p>
                  <p>Our exterior design service includes facade design and material selection, boundary walls and gates, outdoor lighting, terraces, rooftops and landscaping. We choose finishes that handle heat, dust and monsoon rain, so your home keeps its look for years.</p>
                  <blockquote>
                    A good exterior ties the house to its surroundings, with shade, greenery and outdoor living spaces your family will actually use.
                  </blockquote>
                  <p>Perfect for new builds, facade renovations, rooftop terraces and garden makeovers.</p>
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
                  <Link to="/service2">Architecture</Link>
                </li>
                <li>
                  <Link className='active' to="/service3">Exterior</Link>
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
