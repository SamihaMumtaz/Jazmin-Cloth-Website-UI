import React from 'react';
import img1 from '../../../assets/images/Home/img-1.webp';
import img2 from '../../../assets/images/Home/img-2.webp';
import img3 from '../../../assets/images/Home/img-3.webp';
import img4 from '../../../assets/images/Home/img-4.webp';
import Button from '../../../Utility/Button';
import { Link } from 'react-router-dom';

function Ready() {
  const imageData = [
    { src: img1, label: 'velvet', link: '/Velvet' },
    { src: img2, label: "Delia Fall Winter'24", link: '/Delia-Fall-Winter' },
    { src: img3, label: 'Ready to wear', link: '/Ready-to-wear' },
    { src: img4, label: 'Formals', link: '/Formals' },
  ];

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        {imageData.map((data, index) => (
          <div className="col" key={index}>
            <Link to={data.link} className="img-link">
              <div className={`img-container img-overlay-${index + 1}`}>
              <img src={data.src} alt={data.label} className="img-responsive" />
              </div>
              <h3>{data.label}</h3>
              <Button text="Shop Now" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ready;
