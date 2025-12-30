import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/DeliaFallWinter/img (1).jpg';
import img2 from '../../../assets/images/DeliaFallWinter/img (2).jpg';
import img3 from '../../../assets/images/DeliaFallWinter/img (7).jpg';
import img4 from '../../../assets/images/DeliaFallWinter/img (8).jpg';
import img5 from '../../../assets/images/DeliaFallWinter/img (16).jpg';
import img6 from '../../../assets/images/DeliaFallWinter/img (17).jpg';
import img7 from '../../../assets/images/DeliaFallWinter/img (24).jpg';
import img8 from '../../../assets/images/DeliaFallWinter/img (25).jpg';
import img9 from '../../../assets/images/DeliaFallWinter/img (32).jpg';
import img10 from '../../../assets/images/DeliaFallWinter/img (33).jpg';
import img11 from '../../../assets/images/DeliaFallWinter/img (43).jpg';
import img12 from '../../../assets/images/DeliaFallWinter/img (44).jpg';
import img13 from '../../../assets/images/DeliaFallWinter/img (53).jpg';
import img14 from '../../../assets/images/DeliaFallWinter/img (54).jpg';
import img15 from '../../../assets/images/DeliaFallWinter/img (63).jpg';
import img16 from '../../../assets/images/DeliaFallWinter/img (64).jpg';
import img17 from '../../../assets/images/DeliaFallWinter/img (70).jpg';
import img18 from '../../../assets/images/DeliaFallWinter/img (71).jpg';

const NewtoOld = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);  
  };

  const products = [
    {
        image1: img15,
        image2: img16,
        label: 'Unstitched',
        title: 'EMBROIDERED SLUB KHADDAR DW\'24 D1',
        price: 'Rs. 8,350',
        link: ''
    },
    {
        image1: img7,
        image2: img8,
        label: 'Unstitched',
        title: 'EMBROIDERED SLUB KHADDAR DW\'24 D2',
        price: 'Rs. 8,350',
        link: ''
    },
    {
        image1: img1,
        image2: img2,
        label: 'Unstitched',
        title: 'EMBROIDERED JACQUARD KHADDAR DW\'24 D3',
        price: 'Rs. 9,500',
        link: ''
    },
    {
        image1: img3,
        image2: img4,
        label: 'Unstitched',
        title: 'EMBROIDERED PREMIUM VISCOSE DW\'24 D4',
        price: 'Rs. 8,350',
        link: ''
    },
    {
        image1: img5,
        image2: img6,
        label: 'Unstitched',
        title: 'EMBROIDERED PREMIUM VISCOSE DW\'24 D5',
        price: 'Rs. 8,350',
        link: ''
    },
    {
        image1: img9,
        image2: img10,
        label: 'Unstitched',
        title: 'EMBROIDERED PREMIUM VISCOSE DW\'24 D6',
        price: 'Rs. 9,500',
        link: ''
    },
    {
        image1: img13,
        image2: img14,
        label: 'Unstitched',
        title: 'EMBROIDERED SLUB KHADDAR DW\'24 D7',
        price: 'Rs. 9,500',
        link: ''
    },
    {
        image1: img17,
        image2: img18,
        label: 'Unstitched',
        title: 'EMBROIDERED SLUB KHADDAR DW\'24 D9',
        price: 'Rs. 8,350',
        link: ''
    },
    {
        image1: img11,
        image2: img12,
        label: 'Unstitched',
        title: 'EMBROIDERED SLUB KHADDAR DW\'24 D8',
        price: 'Rs. 8,350',
        link: ''
    },
];


  const Product = ({ product }) => (
    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
      <div className="image">
        <Link to={product.link}>
          <img src={product.image1} alt="" className="main-img" />
          <img src={product.image2} alt="" className="image-hover" />
        </Link>
        <div className="image-text">
          <p>{product.label}</p>
          <Link to={product.link}>{product.title}</Link>
          <h6>{product.price}</h6>
        </div>
      </div>
    </div>
  );

  return (
    <div className="delia-fall-winter">
        <hr />
        <h1>Delia Fall Winter'24</h1>
        <hr />
        <div className="product-info">
            <p className="product-count">{products.length} products</p>
            <div className="vertical-line"></div>
                <div className="sortby" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                    Sort by <FaChevronDown className="ms-3" />
                </div>
                {isOpen && (
                <div className="dropdown-menu">
                    <ul>
                      <Link to="/Featured"><p><b>Featured</b></p></Link>
                      <Link to="/Bestselling"><li>Best selling</li></Link>
                      <Link to="/AtoZ"><li>Alphabetically A-Z</li></Link>
                      <Link to="/ZtoA"><li>Alphabetically Z-A</li></Link>
                      <Link to="/LowtoHigh"><li>Price, low to high</li></Link>
                      <Link to="/HightoLow"><li>Price, high to low</li></Link>
                      <Link to="/OldtoNew"><li>Date, old to new</li></Link>
                      <Link to="/NewtoOld"><li>Date, new to old</li></Link>
                    </ul>
                </div>
                )}
            </div>
            <hr />
            <div className='container'>
            <div className="row">
                {products.map((product, index) => (
                <Product key={index} product={product} />
                ))}
            </div>
        </div>
    </div>
  );
};

export default NewtoOld;