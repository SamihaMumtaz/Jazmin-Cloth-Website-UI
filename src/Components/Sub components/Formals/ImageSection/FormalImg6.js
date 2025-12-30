import React, { useState } from 'react';
import img1 from '../../../../assets/images/Formals/img (6)/img (1).jpg';
import img2 from '../../../../assets/images/Formals/img (6)/img (2).jpg';
import img3 from '../../../../assets/images/Formals/img (6)/img (3).jpg';
import img4 from '../../../../assets/images/Formals/img (6)/img (4).jpg';
import img5 from '../../../../assets/images/Formals/img (6)/img (5).jpg';
import img6 from '../../../../assets/images/Formals/img (6)/img (6).jpg';
import img7 from '../../../../assets/images/Formals/img (6)/img (7).jpg';
import img8 from '../../../../assets/images/Formals/img (6)/img (8).jpg';
import img9 from '../../../../assets/images/Formals/img (6)/img (9).jpg';
import img10 from '../../../../assets/images/Formals/img (6)/img (10).jpg';
import img11 from '../../../../assets/images/Formals/img (6)/img (11).jpg';
import img12 from '../../../../assets/images/Formals/img (6)/img (12).jpg';
import img13 from '../../../../assets/images/Formals/img (6)/img (13).jpg';
import Button from '../../../../Utility/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FormalImg6 = () => {
  const [selectedImg, setSelectedImg] = useState(img1);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

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
              <p>Formal</p>
              <h4>Embroidered Velvet Formal vf-2040</h4>
              <p>3 pieces</p>
              <p>Sku: jz-vf-d2040-0</p>
              <h5><b>RS. 24,500</b></h5>
              <hr className="delia-line" />
              <div className="box1">
                <p>Type:</p>
                <span>RTW</span>
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

export default FormalImg6;