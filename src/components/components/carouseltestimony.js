import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return (
      <div {...props}></div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    };
    return (
    <section className='container-fluid  wraper-testimony' 
    style={{backgroundImage: `url(${'./img/testimony.jpg'})`}}>
      <div className='row m-10-hor'>
        <div className='testimony'>
          <Slider {...settings}>

            <CustomSlide className='itm' index={1}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  Artha turned our empty apartment into a warm, functional home. 
                  They listened to every detail and finished 
                  on time and on budget.
                  </p>
                  <div className="bytesti">
                    Hina &amp; Faisal, DHA Karachi
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={2}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  Our new office layout has completely changed how the team works. 
                  Bright, practical and exactly 
                  what we asked for.
                  </p>
                  <div className="bytesti">
                    Usman Tariq, Founder, Brightline Studio
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={3}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  The 3D renders made decisions easy. 
                  What we saw on screen is exactly 
                  what we got in our living room.
                  </p>
                  <div className="bytesti">
                    Mariam Javed, Clifton
                  </div>
                </div>
              </div>
            </CustomSlide>

            <CustomSlide className='itm' index={4}>
              <div className='blockquote'>
                <div className="fa"></div>
                <div className="conesti">
                  <p>
                  From architecture drawings to the final cushions, 
                  one team handled everything. 
                  Highly recommended.
                  </p>
                  <div className="bytesti">
                    Ahmed Raza, Bahria Town
                  </div>
                </div>
              </div>
            </CustomSlide>

          </Slider>
        </div>
      </div>
    </section>
    );
  }
}
