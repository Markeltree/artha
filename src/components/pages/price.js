import React from 'react';
import { Link } from '@reach/router';
import Pricing from '../components/pricing';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';

export default () => (
<div>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/price.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Pricing</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>Pricing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Pricing />

  <section className='container-fluid'>
        <div className='row m-10-hor'>

        <div className='col-md-4'>
          <div className='pricelist mt-0'>
            <div className="heading">Site Survey</div>
            <div className="bigprice"><span className='text-gradient'>Rs 10K</span> <small>Visit</small></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> On-site Measurements</li>
              <li><i className="fa fa-check"></i> Existing Layout Drawing</li>
              <li><i className="fa fa-check"></i> Lighting &amp; Ventilation Check</li>
              <li><i className="fa fa-check"></i> Design Recommendations</li>
              <li><i className="fa fa-check"></i> Adjusted Against Final Fee</li>
            </ul>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='pricelist mt-0'>
            <div className="heading">3D Walkthrough</div>
            <div className="bigprice"><span className='text-gradient'>Rs 40K</span> <small>Project</small></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> Photo-realistic Renders</li>
              <li><i className="fa fa-check"></i> Animated Video Walkthrough</li>
              <li><i className="fa fa-check"></i> Day &amp; Night Views</li>
              <li><i className="fa fa-check"></i> Material Variations</li>
              <li><i className="fa fa-check"></i> 2 Revisions</li>
            </ul>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='pricelist mt-0'>
            <div className="heading">Styling Day</div>
            <div className="bigprice"><span className='text-gradient'>Rs 25K</span> <small>Day</small></div>
            <ul className="list">
              <li><i className="fa fa-check"></i> Decor &amp; Accessory Styling</li>
              <li><i className="fa fa-check"></i> Art Placement</li>
              <li><i className="fa fa-check"></i> Plant &amp; Textile Selection</li>
              <li><i className="fa fa-check"></i> Furniture Rearrangement</li>
              <li><i className="fa fa-check"></i> Shopping Assistance</li>
            </ul>
          </div>
        </div>

        </div>
    </section>

  <Testimony/>
  <Footer />
</div>

);
