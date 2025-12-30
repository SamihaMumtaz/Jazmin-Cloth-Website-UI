import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/Sale/img-1.jpg';
import img2 from '../../../assets/images/Sale/img-2.jpg';
import img3 from '../../../assets/images/Sale/img-3.jpg';
import img4 from '../../../assets/images/Sale/img-4.jpg';
import img5 from '../../../assets/images/Sale/img-5.jpg';
import img6 from '../../../assets/images/Sale/img-6.jpg';
import img7 from '../../../assets/images/Sale/img-7.jpg';
import img8 from '../../../assets/images/Sale/img-8.jpg';
import img9 from '../../../assets/images/Sale/img-9.jpg';
import img10 from '../../../assets/images/Sale/img-10.jpg';
import img11 from '../../../assets/images/Sale/img-11.jpg';
import img12 from '../../../assets/images/Sale/img-12.jpg';
import img13 from '../../../assets/images/Sale/img-13.jpg';
import img14 from '../../../assets/images/Sale/img-14.jpg';
import img15 from '../../../assets/images/Sale/img-15.jpg';
import img16 from '../../../assets/images/Sale/img-16.jpg';

const SaleLowtoHigh = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);  
  };

  const products = [
    {
        image1: img1,
        image2: img2,
        label: 'Unstitched | Stitched',
        title: 'EMBROIDERED LAWN IL-SS24-D10',
        price: 'Rs. 9,950',
        sale: 'Rs. 7,000',
        link: ''
      },
      {
        image1: img3,
        image2: img4,
        label: 'Unstitched | Stitched',
        title: 'Embroidered Raw Silk UR-7015',
        price: 'Rs. 18,500',
        sale: 'Rs. 9,200',
        link: ''
      },
      {
        image1: img7,
        image2: img8,
        label: 'Unstitched | Stitched',
        title: 'EMBROIDERED CHIFFON UC-3042',
        price: 'Rs. 13,500',
        sale: 'Rs. 10,950',
        link: ''
      },
      {
        image1: img5,
        image2: img6,
        label: 'Unstitched | Stitched',
        title: 'Embroidered Luxury Lawn SL24-D8',
        price: 'Rs. 14,900',
        sale: 'Rs. 9,900',
        link: ''
      },
      {
        image1: img9,
        image2: img10,
        label: 'Unstitched | Stitched',
        title: 'EMBROIDERED CHIFFON UC-3043',
        price: 'Rs. 13,500',
        sale: 'Rs. 10,950',
        link: ''
      },
      {
        image1: img15,
        image2: img16,
        label: 'Unstitched | Stitched',
        title: 'EMBROIDERED CHIFFON UC-3023',
        price: 'Rs. 18,500',
        sale: 'Rs. 13,950',
        link: ''
      },
      {
        image1: img13,
        image2: img14,
        label: 'Unstitched | Stitched',
        title: 'EMBROIDERED CHIFFON UC-3004',
        price: 'Rs. 16,500',
        sale: 'Rs. 13,500',
        link: ''
      },
      {
        image1: img11,
        image2: img12,
        label: 'Unstitched | Stitched',
        title: 'Embroidered Luxury Lawn SL24-D6',
        price: 'Rs. 14,900',
        sale: 'Rs. 11,900',
        link: ''
      },
  ];

  const Product = ({ product }) => (
    <div className="col-lg-4 col-md-6 col-sm-6 mb-4">
      <div className="image">
        <Link to={product.link}>
          <img src={product.image1} alt={product.title} className="main-img" />
          <img src={product.image2} alt={product.title} className="image-hover" />
        </Link>
        <div className="image-text">
          <p>{product.label}</p>
          <Link to={product.link}>{product.title}</Link>
          <div className="price-container">
            <h6 className="product_sale">{product.sale}</h6>
            <h6 className="price">{product.price}</h6>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="sale">
      <hr />
      <h1>Sale</h1>
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
              <Link to="/salefeatured"><p><b>Featured</b></p></Link>
              <Link to="/salebestselling"><li>Best selling</li></Link>
              <Link to="/saleAtoZ"><li>Alphabetically A-Z</li></Link>
              <Link to="/saleZtoA"><li>Alphabetically Z-A</li></Link>
              <Link to="/salelowtohigh"><li>Price, low to high</li></Link>
              <Link to="/salehightolow"><li>Price, high to low</li></Link>
              <Link to="/saleoldtonew"><li>Date, old to new</li></Link>
              <Link to="/salenewtoold"><li>Date, new to old</li></Link>
            </ul>
          </div>
        )}
      </div>
      <hr />
      <div className="container">
        <div className="row">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SaleLowtoHigh;
