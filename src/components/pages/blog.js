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
            <h1>Blog</h1>
          </div>
          <div className='col-md-6'>
            <div className='list'>
              <Link className='link' to="/home">Home</Link>
              <span className='dash'>/</span>
              <span>Blog</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className='container-fluid' id="blog">
        <div className='row m-10-hor'>
          <div className='col-md-8'>
            <div className='left'>
              <div className='mainimg'>
                <img
                    src="./img/imghome2.jpg"
                    alt="Bright, open living room"
                  />
              </div>
              <div className='content'>
                <div className='title'>
                  5 Ways to Make a Small Living Room <span className='color'>Feel Bigger</span>
                </div>
                <div className='desc'>
                  <p>Compact apartments are now the norm in most cities, but a small living room doesn't have to feel cramped. With the right choices, even a modest lounge can feel open, bright and relaxing.</p>
                  <p><strong>1. Keep the palette light.</strong> Soft whites, warm greys and pale wood reflect light and make walls appear further away. <strong>2. Raise your furniture.</strong> Sofas and cabinets on slim legs show more floor, which tricks the eye into reading a bigger room. <strong>3. Use mirrors wisely.</strong> A large mirror opposite a window doubles the daylight. <strong>4. Build storage into the walls.</strong> Floor-to-ceiling units keep clutter out of sight without eating into floor space.</p>
                  <blockquote>
                    The biggest mistake we see is too many small pieces of furniture. Fewer, well-scaled pieces always make a room feel larger.
                  </blockquote>
                  <p><strong>5. Layer your lighting.</strong> Combine a soft ceiling light with floor lamps and wall lights so no corner is left dark. If you'd like help planning your own space, our designers offer one-room consultations starting from a single site visit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='right'>
              <h3>Recent posts</h3>
              <ul className='recent-post'>
                <li>
                  <Link className='recent' to="/blog">
                    <div className='img'>
                      <img
                        src="./img/service.jpg"
                        alt="imgservice"
                      />
                    </div>
                    <div className='contblog'>
                      <div className='title'>
                        Choosing the Right Lighting
                      </div>
                      <div className='descblog'>
                        How to layer ambient, task and accent light
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='recent' to="/blog">
                    <div className='img'>
                      <img
                        src="./img/service2.jpg"
                        alt="imgservice"
                      />
                    </div>
                    <div className='contblog'>
                      <div className='title'>
                        Planning a Modern Kitchen
                      </div>
                      <div className='descblog'>
                        Layouts, storage and finishes that work
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link className='recent' to="/blog">
                    <div className='img'>
                      <img
                        src="./img/service3.jpg"
                        alt="imgservice"
                      />
                    </div>
                    <div className='contblog'>
                      <div className='title'>
                        Materials for a Hot Climate
                      </div>
                      <div className='descblog'>
                        Finishes that handle heat, dust and rain
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
              <h3>Tags</h3>
              <ul className='tags'>
                <li>
                  <Link className='tag' to="/blog">Interior</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Trends</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Lighting</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Design</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Exterior</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Kitchen</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Small Spaces</Link>
                </li>
                <li>
                  <Link className='tag' to="/blog">Creative</Link>
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
