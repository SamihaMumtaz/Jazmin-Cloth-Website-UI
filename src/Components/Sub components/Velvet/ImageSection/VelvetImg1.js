import React, { useState } from 'react';
import img1 from '../../../../assets/images/Velvet/img (1).jpg';
import img2 from '../../../../assets/images/Velvet/img (2).jpg';
import img3 from '../../../../assets/images/Velvet/img (3).jpg';
import img4 from '../../../../assets/images/Velvet/img (4).jpg';
import video1 from '../../../../assets/videos/velvet/video (1).mp4';
import Button from '../../../../Utility/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const VelvetImg1 = () => {
  const [selectedImg, setSelectedImg] = useState(img1);

  const images = [video1, img1, img2, img3, img4 ];

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
              asset.endsWith('.mp4') ? (
                <div key={index} onClick={() => handleImageClick(asset)}>
                  <video 
                    controls={false} 
                    muted 
                    className="mb-2"
                    style={{ cursor: "pointer", maxWidth: "80px" }}
                  >
                    <source src={asset} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : (
                <img
                  key={index}
                  src={asset}
                  alt={`Preview ${index + 1}`}
                  className="mb-2"
                  onClick={() => handleImageClick(asset)}
                />
              )
            ))}
          </div>
          <div className="col-6 clickimg">
            {selectedImg.endsWith('.mp4') ? (
              <video key="selected-video" controls>
                <source src={selectedImg} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={selectedImg} alt="Selected Delia Winter design" />
            )}
          </div>
          <div className="col-4 img-details">
            <div className="img-details-text">
              <p>Velvet</p>
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

export default VelvetImg1;