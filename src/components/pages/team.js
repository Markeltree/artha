import React from 'react';
import { Link } from '@reach/router';
import posed from 'react-pose';
import Carouselteam from '../components/carouselteam';
import Testimony from '../components/carouseltestimony';
import Footer from '../components/footer';

const ListContainer = posed.div({
  enter: { staggerChildren: 20 },
  exit: { staggerChildren: 20, staggerDirection: 0 }
});

const Item = posed.section({
  enter: { y: 0, opacity: 1 },
  exit: { y: 0, opacity: 0 }
});


export default () => (
<ListContainer>
  <Item className='jumbotron breadcumb' style={{backgroundImage: `url(${'./img/team.jpg'})`}}>
    <div className='mainbreadcumb'>
      <div className='container-fluid'>
        <div className='row m-10-hor'>
          <div className='col-md-6'>
            <h1>Our Team</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>Team</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Item>


  <Item className='container-fluid'>
      <div className='row m-10-hor'>
        
        <div className='col-md-5'>
            <div className='heading'>
             About Our<span className='br'></span> Team
            </div>
          </div>

          <div className='col-md-7 mb-3'>
            <div className='content'>
              Our studio brings together architects, interior designers, 
              3D visualisers and project managers. 
              Each project gets a dedicated lead designer and project manager 
              who stay with you from the first meeting to the final handover.
            </div>
            <div className='content'>
              Behind them is a trusted network of carpenters, 
              electricians, painters and suppliers 
              we've worked with for years.
            </div>
          </div>
        <Carouselteam />
      </div>
  </Item>

  <section className='container-fluid black_more'>
      <div className='row m-10-hor'>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="./img/team/img1.jpg"
                  className="img-fluid"
                  alt="Bilal Ahmed"
                />
              </div>
              <div className='desc'>
                <div className='name'>Bilal Ahmed</div>
                <div className='title'>Lead Architect</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/", "_blank")}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//linkedin.com/", "_blank")}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//twitter.com/", "_blank")}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="./img/team/img2.jpg"
                  className="img-fluid"
                  alt="Ayesha Khan"
                />
              </div>
              <div className='desc'>
                <div className='name'>Ayesha Khan</div>
                <div className='title'>Founder &amp; Principal Designer</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/", "_blank")}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//linkedin.com/", "_blank")}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//twitter.com/", "_blank")}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="./img/team/img3.jpg"
                  className="img-fluid"
                  alt="Omar Siddiqui"
                />
              </div>
              <div className='desc'>
                <div className='name'>Omar Siddiqui</div>
                <div className='title'>Project Manager</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/", "_blank")}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//linkedin.com/", "_blank")}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//twitter.com/", "_blank")}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-3 slickteam'>
          <div className='slick-slide slick-col'>
            <div>
              <div className='itm'>
              <div className='bg'>
                <img
                  src="./img/team/img4.jpg"
                  className="img-fluid"
                  alt="Sara Malik"
                />
              </div>
              <div className='desc'>
                <div className='name'>Sara Malik</div>
                <div className='title'>Senior Interior Designer</div>
              </div>
              <div className='icon'>
                 <span onClick={()=> window.open("//facebook.com/", "_blank")}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//linkedin.com/", "_blank")}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </span>
                <span onClick={()=> window.open("//twitter.com/", "_blank")}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>

      </div>
  </section>

  <Testimony/>
  <Footer />
</ListContainer>

);
