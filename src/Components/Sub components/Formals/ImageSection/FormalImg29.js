import React, { useState } from 'react';
import img1 from '../../../../assets/images/Formals/img (29)/img (1).jpg';
import img2 from '../../../../assets/images/Formals/img (29)/img (2).jpg';
import img3 from '../../../../assets/images/Formals/img (29)/img (3).jpg';
import img4 from '../../../../assets/images/Formals/img (29)/img (4).jpg';
import img5 from '../../../../assets/images/Formals/img (29)/img (5).jpg';
import img6 from '../../../../assets/images/Formals/img (29)/img (6).jpg';
import Button from '../../../../Utility/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FormalImg29 = () => {
  const [selectedImg, setSelectedImg] = useState(img1);

  const images = [img1, img2, img3, img4, img5, img6];

  const handleImageClick = (asset) => {
    setSelectedImg(asset);
  };

  return (
    <div className="deliaimg1">
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-2 columnimg">
            {images.map((asset, index) => (
              <img
                key={index}
                src={asset}
                alt={`Preview ${index + 1}`}
                className="mb-2"
                onClick={() => handleImageClick(asset)}
              />
            ))}
          </div>

          <div className="col-6 clickimg">
            <img src={selectedImg} alt="Selected Delia Winter design" />
          </div>

          <div className="col-4 img-details">
            <div className="img-details-text">
              <p>Formals</p>
              <h4>Embroideredd Velvet Formal vf-2041</h4>
              <p>3 pieces</p>
              <p>Sku: jz-vf-d2041-1</p>
              <h5><b>RS. 20,500</b></h5>
              <hr className="delia-line" />

              <div className="box1">
                <p>Type:</p>
                <span>Shawl & Unstitched Dress</span>
              </div>

              <div className="box2">
                <p>Buy it now</p>
              </div>

              <Button text="Chat with consultant" />
              <hr className="delia-line" />

              <div className="add">
                {['Description', 'Product Information', 'Shipping Information', 'Model Size', 'Please Note'].map((text) => (
                  <React.Fragment key={text}>
                    <div className="add-icon">
                      <p>{text}</p>
                      <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <hr className="delia-line" />
                  </React.Fragment>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormalImg29;
