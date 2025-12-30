import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Customer = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 1500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: false, 
    vertical: true, 
    verticalSwiping: true, 
  };

  return (
    <>
        <div className="customer">
            <p>What our customer says</p>
        </div>
        <Slider {...settings} className="slider">
        <div className="customer-text">
            <p>
                Very responsive and reliable service. ordered from Australia then received on time. 
                no compromised with materials. really happy with their service. look forward to order 
                more
            </p>
            <span>Nehal Majumdar</span>
        </div>
        <div className="customer-text">
            <p>
                My experience is awesome with jazmin as always they delivered beautiful dresses. 
                They are very cooperative. I recommend jazmin
            </p>
            <span><b>Ishrat Sehar</b></span>
        </div>
        <div className="customer-text">
            <p>
                Gorgeous dress, exactly like shown in the picture. The delivery
                was on time. I really recommend everyone to buy clothes from this
                brand. I bought a second time from their website. Awesome experience.
            </p>
            <span><b>Areesha Aslam</b></span>
        </div>
        <div className="customer-text">
            <p>
                Received my dress. It's amazing and quality is more than my
                expectations. Will definitely buy again.
            </p>
            <span>Anila Sultana</span>
        </div>
      </Slider>
      <hr className="line-1"/>
    </>
  );
};

export default Customer;