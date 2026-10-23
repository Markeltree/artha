import React from 'react';
import ImageGallery from "../components/ImageGallery";
import Footer from '../components/footer';


export default () => (
  <div>
      <section className='jumbotron breadcumb h-vh' style={{backgroundImage: `url(${'./img/imghome2.jpg'})`}}>
        <div className='homebread'>
          <div className='container-fluid'>
            <div className='row m-10-hor'>
              <div className='col-md-10 mx-auto text-center '>
                <div className='heading'>
                  Experience Design With Precision
                </div>
                <div className='content mx-auto'>
                  Browse a selection of our recent homes, offices and villas, 
                  and see how thoughtful design changes the way a space feels.
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

      <section className='container-fluid pb-0 black_more'>
        <div className='row m-10-hor'>

          <div className='col-md-5'>
            <div className='heading'>
              Concept <span className='br'></span>Design 
            </div>
            <div className='subheading'>
              With Precision
            </div>
          </div>

          <div className='col-md-7'>
            <div className='content'>
              Good design starts with a clear concept. For every project we 
              create a story built on colour, texture, light and layout, 
              then carry it through every room so the whole space feels connected.
            </div>
            <div className='content'>
              Below are a few of our favourite recent projects. 
              Click any image to see it full size.
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
      
    <Footer />

  </div>
);
