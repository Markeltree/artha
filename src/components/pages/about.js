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
            <h1>About us</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>About</span>
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
              Perfection<span className='br'></span> concept<span className='br'></span> Design
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              Artha Interiors was founded in Karachi with a simple belief: 
              good design should make everyday life easier, not just look good in photos. 
              Today our studio of architects and interior designers works on homes, 
              offices, restaurants and retail spaces across Pakistan.
            </div>
            <div className='content'>
              We handle every stage in-house, from concept and drawings 
              to sourcing, site supervision and final styling, 
              so our clients get one accountable team and a finished space 
              that matches the design.
            </div>
          </div>

        </div>
  </section>

  <section className='container-fluid p-0'>
        <div className='row'>

          <div className="col-md-6 px-0">
            <img src="./img/blog.jpg" className="imgslickz" alt="#"/>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5">
            <div className="p-md-5">
              <div className="subheading">Our Approach</div>
              <div className="heading">
                Listen First, Design Second
              </div>
              <p className="mt-3">
                Every project begins with a detailed conversation about how you live 
                or work, what you love and what isn't working today. 
                That brief guides every decision, from the floor plan 
                to the door handles.
              </p>
              <Link className='btn' to="/service">
                <span className="shine"></span>
                <span>Our Services</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 centered p-md-5 pt-5 pb-5">
            <div className="p-md-5">
              <div className="subheading">Our Promise</div>
              <div className="heading">
                Quality That Lasts
              </div>
              <p className="mt-3">
                We work with trusted craftsmen and suppliers, use materials 
                chosen to last, and stand behind our work with a one-year 
                after-care period on every completed project.
              </p>
              <Link className='btn' to="/works">
                <span className="shine"></span>
                <span>See Our Work</span>
              </Link>
            </div>
          </div>

          <div className="col-md-6 px-0">
            <img src="./img/blog1.jpg" className="imgslickz" alt="#"/>
          </div>

        </div>
  </section>

  <Testimony />
  <Footer />
</div>

);
