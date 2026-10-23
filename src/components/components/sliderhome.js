import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/vertical.css';

const content = [
  {
    title: "Spaces That Feel Like You",
    description:
      "Interior design with precision",
    button: "View Our Work",
    link: "/works",
    image: "./img/bg-1.jpg"
  },
  {
    title: "Concept to Completion",
    description:
      "Stylish, functional living",
    button: "Our Services",
    link: "/service",
    image: "./img/bg-2.jpg"
  },
  {
    title: "Homes Built Around Life",
    description:
      "Architecture for your lifestyle",
    button: "Get a Quote",
    link: "/contact",
    image: "./img/bg-3.jpg"
  }
];

export default () => (
  <Slider className="slider-wrapper" autoplay={6000}>
            {content.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{ background: `url('${item.image}') no-repeat center center` }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button onClick={()=> window.open(item.link, "_self")}>
                    <span className="shine"></span>
                    <span>
                      {item.button}
                    </span>
                  </button>
                </div>
              </div>
            ))}
        </Slider>
);
