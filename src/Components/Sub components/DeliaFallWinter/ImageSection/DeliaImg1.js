import React, { useState } from 'react';
import img1 from '../../../../assets/images/DeliaFallWinter/img (1).jpg';
import img2 from '../../../../assets/images/DeliaFallWinter/img (2).jpg';
import img3 from '../../../../assets/images/DeliaFallWinter/img (3).jpg';
import img4 from '../../../../assets/images/DeliaFallWinter/img (4).jpg';
import img5 from '../../../../assets/images/DeliaFallWinter/img (5).jpg';
import img6 from '../../../../assets/images/DeliaFallWinter/img (6).jpg';
import Button from '../../../../Utility/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const DeliaImg1 = () => {
  const [selectedImg, setSelectedImg] = useState(img1);

  const images = [img1, img2, img3, img4, img5, img6];

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
              <h4>Embroided Jacquard Khaddar DW'24 D3</h4>
              <p>3 pieces</p>
              <p>Sku: jz-delia-dw24-d3-0</p>
              <h5><b>RS. 9,500</b></h5>
              <hr className="delia-line" />
              <div className="box1">
                <p>Type:</p>
                <span>Unstitched</span>
              </div>
              <div className="box2">
                <p>Sold Out</p>
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
                    <p>Description</p>
                    <FontAwesomeIcon icon={faPlus}/>
                </div>
                <p><FontAwesomeIcon icon={faPlus} className="add-icon" /></p>
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
                    <p></p>
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

export default DeliaImg1;
