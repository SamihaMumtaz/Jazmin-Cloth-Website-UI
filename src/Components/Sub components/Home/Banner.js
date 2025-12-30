import React from 'react';
import bannerimage from '../../../assets/images/Home/background.jpg';
import Button from '../../../Utility/Button';
import { Link } from 'react-router-dom';
function Banner() {
  return (
    <div className="banner-img">
      <img src={bannerimage} className="img-fluid Image" alt="Banner" />
      <div className="banner-text">
        <Link to={"/Unstitched-Winter"} ><p>Unstitched Winter</p><Button text="Shop Now"/></Link>
      </div>
    </div>
  );
}

export default Banner;
