import React from 'react';
import { Link } from '@reach/router';
import ImageGallery from "../components/ImageGallery";
import Footer from '../components/footer';


export default () => (
<div>
  <section className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/porto.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Portfolio</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>Portfolio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid black'>
        <div className='row m-10-hor'>

        <div className='col-md-5'>
            <div className='heading'>
              Our <span className='br'></span>Recent<span className='br'></span> Projects
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              Every project in our portfolio started with a conversation. 
              From compact city apartments to family villas and modern offices, 
              each space was designed around the people who use it every day.
            </div>
            <div className='content'>
              Click any image to view it full size, 
              and get in touch if you'd like 
              something similar for your own space.
            </div>
          </div>

        </div>
  </section>

  <section className='container-fluid black_more'>
    <div className='row m-10-hor'>
      <div className='col-12'>
        <div className='AppContainer'>
          <ImageGallery />
        </div>
      </div>
    
    </div>
  </section>

  <Footer />
</div>

);
