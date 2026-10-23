import React from 'react';
import { Link } from '@reach/router';
import Carouselteam from '../components/carouselteam';
import Bannercontact from '../components/bannercontact';
import Pricing from '../components/pricing';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';


export default () => (
  <div>
      <section className='jumbotron breadcumb h-vh' style={{backgroundImage: `url(${'./img/imghome1.jpg'})`}}>
        <div className='homebread'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-8 mr-auto '>
                <div className='heading'>
                  Homes Designed Around You
                </div>
                <div className='content'>
                  Whether it's a new apartment, a family villa or a full renovation, 
                  we design spaces that fit the way you actually live, 
                  beautifully and practically.
                </div>
                <div className="btn" onClick={()=> window.open("/works", "_self")}>
                  <span className="shine"></span>
                  <span>View Our Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container-fluid black_more'>
        <div className='row m-10-hor'>

          <div className='col-md-5'>
            <div className='heading'>
              Residential <span className='br'></span> Interiors
            </div>
            <div className='subheading'>
              Designed for your lifestyle
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              Every family lives differently. Before we draw a single line, 
              we spend time understanding your routines, your storage needs, 
              how you entertain and how much light you love. 
              That brief becomes the foundation of every room we design.
            </div>
            <div className='content'>
              The result is a home with flowing layouts, 
              hard-wearing finishes and thoughtful details, 
              styled to feel calm, warm and completely yours.
            </div>
          </div>

        </div>
    </section>

    <section className='container-fluid p-0 black'>
        <div className='row'>

          <div className="col-md-6 pr-md-0">
            <img src="./img/blog.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-5">
            <div className='p-md-5'>
              <div className="subheading">March 12, 2026</div>
              <div className="heading">
                5 Ways to Make a Small Living Room Feel Bigger
              </div>
              <p className="mt-3">
                Light colours, mirrors, raised furniture and smart storage can 
                transform a compact lounge. Our designers share the simple 
                tricks they use in apartments across the city.
              </p>
              <Link className='btn' to="/blog">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 centered p-5 pb-5">
            <div className='p-md-5'>
              <div className="subheading">April 03, 2026</div>
              <div className="heading">
                Choosing the Right Lighting for Every Room
              </div>
              <p className="mt-3">
                Ambient, task and accent lighting each have a job to do. 
                Here's how to layer them so your home feels bright by day 
                and cosy in the evening.
              </p>
              <Link className='btn' to="/blog">
                <span className="shine"></span>
                <span>More Detail</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 pl-md-0">
            <img src="./img/blog1.jpg" className="imgslickz" alt="#"/>
          </div>

        </div>
    </section>

    <section className='container-fluid black_more'>
        <div className='row m-10-hor'>
          <div className='col-12 text-center'>
            <div className='subheading'>Our team</div>
            <div className='heading'>About Our Team</div>
            <div className='row'>
              <div className='col-md-8 mx-auto'>
                <p className='content'>
                  Meet the people behind every Artha project: architects, 
                  interior designers and project managers who care about 
                  getting the details right, and about making the whole process 
                  enjoyable for you. 
                </p>
              </div>
            </div>
          </div>
          <Carouselteam />
        </div>
    </section>

    <Bannercontact/>
    <Pricing />
    <Testimony />
    <Footer />

  </div>
);
