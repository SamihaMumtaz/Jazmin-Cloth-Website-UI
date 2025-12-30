import React, { useState } from 'react';
import img1 from '../../../../assets/images/DeliaFallWinter/img (24).jpg';
import img2 from '../../../../assets/images/DeliaFallWinter/img (25).jpg';
import img3 from '../../../../assets/images/DeliaFallWinter/img (26).jpg';
import img4 from '../../../../assets/images/DeliaFallWinter/img (27).jpg';
import img5 from '../../../../assets/images/DeliaFallWinter/img (28).jpg';
import img6 from '../../../../assets/images/DeliaFallWinter/img (29).jpg';
import img7 from '../../../../assets/images/DeliaFallWinter/img (30).jpg';
import img8 from '../../../../assets/images/DeliaFallWinter/img (31).jpg';
import Button from '../../../../Utility/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DeliaImg4 = () => {
  const [selectedImg, setSelectedImg] = useState(img1);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  const handleImageClick = (img) => {
    setSelectedImg(img);
  };

  return (
    <div className="deliaimg1">
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-2 columnimg">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Preview ${index + 1}`}
                className="mb-2"
                onClick={() => handleImageClick(img)}
              />
            ))}
          </div>
          <div className="col-6 clickimg">
            <img src={selectedImg} alt="Selected Delia Winter design" />
          </div>
          <div className="col-4 img-details">
            <div className="img-details-text">
              <p>Delia Winter</p>
              <h4>Embroided Slub Khaddar DW'24 D2</h4>
              <p>3 pieces</p>
              <p>Sku: jz-delia-dw24-d2-0</p>
              <h5><b>RS. 8,350</b></h5>
              <hr className="delia-line" />
              <div className="box1">
                <p>Type:</p>
                <span>Unstitched</span>
              </div>
              <div className="box2">
                <p>Buy it now</p>
              </div>
              <Button text="Chat with consultant" />
              <hr className="delia-line" />
              <div className="add">
                <div className='add-icon'>
                    <p>Description</p>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
                <hr className="delia-line" />
                <div className='add-icon'>
                    <p>Product Information</p>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
                <hr className="delia-line" />
                <div className='add-icon'>
                    <p>Shipping Information</p>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
                <hr className="delia-line" />
                <div className='add-icon'>
                    <p>Model Size</p>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
                <hr className="delia-line" />
                <div className='add-icon'>
                    <p>Please Note</p>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
                <hr className="delia-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliaImg4;
