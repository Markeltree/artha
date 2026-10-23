import React from 'react';
import Slider from '../components/sliderhome';
import Carouselteam from '../components/carouselteam';
import Bannercontact from '../components/bannercontact';
import Pricing from '../components/pricing';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';


export default () => (
  <div>
      <section className="jumbotron jumbomain">
          <Slider />
          <div className="icon-scroll-wraper">
            <div className="icon-scroll">
              <div className="icon-scroll-screen"></div>
            </div>
          </div>
      </section>

      <section className='container-fluid p-0'>
        <div className='row'>

          <div className='col-md-4 p-0'>
            <div className='features'>
              <div className='bg'>
                <img
                    src="./img/bg-serv-1.jpg"
                    alt="bg-features"
                  />
              </div>
              <div className='content'>
                <div className='heading'>
                  Concept Design
                </div>
                <div className='con-text'>
                  We start with your lifestyle, budget and taste, then turn 
them into mood boards, layouts and 3D concepts you can 
see before a single wall is touched.
                </div>
                <div className='link'>
                  <span className="shine"></span>
                  Read More
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 p-0'>
            <div className='features'>
              <div className='bg'>
                <img
                    src="./img/bg-serv-2.jpg"
                    alt="bg-features"
                  />
              </div>
              <div className='content'>
                <div className='heading'>
                  Interior
                </div>
                <div className='con-text'>
                  Furniture, lighting, materials and finishes chosen to work 
together, creating rooms that are comfortable, practical 
and unmistakably yours.
                </div>
                <div className='link'>
                  <span className="shine"></span>
                  Read More
                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 p-0'>
            <div className='features'>
              <div className='bg'>
                <img
                    src="./img/bg-serv-3.jpg"
                    alt="bg-features"
                  />
              </div>
              <div className='content'>
                <div className='heading'>
                  Architecture
                </div>
                <div className='con-text'>
                  New builds, extensions and renovations designed around 
natural light, ventilation and the local climate, 
built to look good for decades.
                </div>
                <div className='link'>
                  <span className="shine"></span>
                  Read More
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='container-fluid black pb-0'>
        <div className='row m-10-hor'>

          <div className='col-md-5'>
            <div className='heading'>
              why <span className='br'></span>choose<span className='br'></span> us?
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              For over a decade, Artha Interiors has designed homes, apartments, 
              offices and restaurants across Karachi and beyond. 
              We combine an architect's eye for structure with a designer's love of detail, 
              so every space we create looks beautiful and works hard every day.
            </div>
            <div className='content'>
              One team handles everything: concept, drawings, sourcing, 
              contractors and final styling. 
              You get one point of contact, a clear budget, 
              and a finished space you'll love coming home to.
            </div>
          </div>

        </div>
    </section>

    <section className='container-fluid pt-0 black'>
        <div className='row m-10-hor'>
         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              01.
            </div>
            <div className='heading'>
              MODERN DESIGN
            </div>
            <div className='content'>
              Clean lines, warm materials and timeless layouts 
              that won't feel dated in a few years.
            </div>
          </div>
         </div>

         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              02.
            </div>
            <div className='heading'>
              END-TO-END SERVICE
            </div>
            <div className='content'>
              From the first sketch to the last cushion, 
              we manage design, sourcing and installation for you.
            </div>
          </div>
         </div>

         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              03.
            </div>
            <div className='heading'>
              ON-TIME DELIVERY
            </div>
            <div className='content'>
              Clear schedules, weekly updates and a dedicated 
              project manager keep every job on track.
            </div>
          </div>
         </div>

         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              04.
            </div>
            <div className='heading'>
              EXPERT TEAM
            </div>
            <div className='content'>
              Architects, interior designers and skilled craftsmen 
              working together under one roof.
            </div>
          </div>
         </div>

         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              05.
            </div>
            <div className='heading'>
              TRANSPARENT PRICING
            </div>
            <div className='content'>
              Detailed quotations up front, with no hidden 
              charges or surprise costs along the way.
            </div>
          </div>
         </div>

         <div className='col-md-4 mt-5'>
          <div className='col-feature'>
            <div className='sub-color text-gradient'>
              06.
            </div>
            <div className='heading'>
              AFTER-CARE SUPPORT
            </div>
            <div className='content'>
              We stay with you after handover, with a one-year 
              after-care period on all completed projects.
            </div>
          </div>
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
