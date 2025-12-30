import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/Velvet/img (1).jpg'
import img2 from '../../assets/images/Velvet/img (2).jpg'
import img3 from '../../assets/images/Velvet/img-3.jpg'
import img4 from '../../assets/images/Velvet/img-4.jpg'
import img5 from '../../assets/images/Velvet/img-5.jpg'
import img6 from '../../assets/images/Velvet/img-6.jpg'
import img7 from '../../assets/images/Velvet/img-7.jpg'
import img8 from '../../assets/images/Velvet/img-8.jpg'
import img9 from '../../assets/images/Velvet/img-9.jpg'
import img10 from '../../assets/images/Velvet/img-10.jpg'
import img11 from '../../assets/images/Velvet/img-11.jpg'
import img12 from '../../assets/images/Velvet/img-12.jpg'
import img13 from '../../assets/images/Velvet/img-13.jpg'
import img14 from '../../assets/images/Velvet/img-14.jpg'
import img15 from '../../assets/images/Velvet/img-15.jpg'
import img16 from '../../assets/images/Velvet/img-16.jpg'
import img17 from '../../assets/images/Velvet/img-17.jpg'
import img18 from '../../assets/images/Velvet/img-18.jpg'
import img19 from '../../assets/images/Velvet/img-19.jpg'
import img20 from '../../assets/images/Velvet/img-20.jpg'
import img21 from '../../assets/images/Velvet/img-21.jpg'
import img22 from '../../assets/images/Velvet/img-22.jpg'
import img23 from '../../assets/images/Velvet/img-23.jpg'
import img24 from '../../assets/images/Velvet/img-24.jpg'
import img25 from '../../assets/images/Velvet/img-25.jpg'
import img26 from '../../assets/images/Velvet/img-26.jpg'
import img27 from '../../assets/images/Velvet/img-27.jpg'
import img28 from '../../assets/images/Velvet/img-28.jpg'
import img29 from '../../assets/images/Velvet/img-29.jpg'
import img30 from '../../assets/images/Velvet/img-30.jpg'
import img31 from '../../assets/images/Velvet/img-31.jpg'
import img32 from '../../assets/images/Velvet/img-32.jpg'
import img33 from '../../assets/images/Velvet/img-33.jpg'
import img34 from '../../assets/images/Velvet/img-34.jpg'
import img35 from '../../assets/images/Velvet/img-35.jpg'
import img36 from '../../assets/images/Velvet/img-36.jpg'
import img37 from '../../assets/images/Velvet/img-37.jpg'
import img38 from '../../assets/images/Velvet/img-38.jpg'
import img39 from '../../assets/images/Velvet/img-39.jpg'
import img40 from '../../assets/images/Velvet/img-40.jpg'
import img41 from '../../assets/images/Velvet/img-41.jpg'
import img42 from '../../assets/images/Velvet/img-42.jpg'
import img43 from '../../assets/images/Velvet/img-43.jpg'
import img44 from '../../assets/images/Velvet/img-44.jpg'
import img45 from '../../assets/images/Velvet/img-45.jpg'
import img46 from '../../assets/images/Velvet/img-46.jpg'
import img47 from '../../assets/images/Velvet/img-47.jpg'
import img48 from '../../assets/images/Velvet/img-48.jpg'
import img49 from '../../assets/images/Velvet/img-49.jpg'
import img50 from '../../assets/images/Velvet/img-50.jpg'
import img51 from '../../assets/images/Velvet/img-51.jpg'
import img52 from '../../assets/images/Velvet/img-52.jpg'
import img53 from '../../assets/images/Velvet/img-53.jpg'
import img54 from '../../assets/images/Velvet/img-54.jpg'
import img55 from '../../assets/images/Velvet/img-55.jpg'
import img56 from '../../assets/images/Velvet/img-56.jpg'
import img57 from '../../assets/images/Velvet/img-57.jpg'
import img58 from '../../assets/images/Velvet/img-58.jpg'
const Velvet = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);  
  };

  const products = [
    {
      image1: img1,
      image2: img2,
      label: 'Unstitched',
      title: 'Embroidered Velvet Formal VF-2041',
      price: 'Rs. 14,500',
      link: '/velvetimg1'
    },
    {
      image1: img3,
      image2: img4,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2040',
      price: 'Rs. 24,500',
      link: '/velvetimg2'
    },
    {
      image1: img5,
      image2: img6,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2037',
      price: 'Rs. 24,500',
      link: '/velvetimg3'
    },
    {
      image1: img7,
      image2: img8,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2036',
      price: 'Rs. 29,500',
      link: '/velvetimg4'
    },
    {
      image1: img9,
      image2: img10,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2034',
      price: 'Rs. 26,500',
      link: '/velvetimg5'
    },
    {
      image1: img11,
      image2: img12,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2033',
      price: 'Rs. 25,500',
      link: '/velvetimg6'
    },
    {
      image1: img13,
      image2: img14,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2032',
      price: 'Rs. 19,500',
      link: '/velvetimg7'
    },
    {
      image1: img15,
      image2: img16,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2031',
      price: 'Rs. 22,500',
      link: '/velvetimg8'
    },
    {
      image1: img17,
      image2: img18,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2030',
      price: 'Rs. 22,500',
      link: '/velvetimg9'
    },
    {
      image1: img19,
      image2: img20,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2029',
      price: 'Rs. 22,500',
      link: '/velvetimg10'
    },
    {
      image1: img21,
      image2: img22,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2025',
      price: 'Rs. 23,500',
      link: '/velvetimg11'
    },
    {
      image1: img23,
      image2: img24,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2005',
      price: 'Rs. 22,500',
      link: '/velvetimg12'
    },
    {
      image1: img25,
      image2: img26,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2012',
      price: 'Rs. 20,500',
      link: '/velvetimg13'
    },
    {
      image1: img27,
      image2: img28,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2014',
      price: 'Rs. 21,500',
      link: '/velvetimg14'
    },
    {
      image1: img29,
      image2: img30,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2003',
      price: 'Rs. 20,500',
      link: '/velvetimg15'
    },
    {
      image1: img31,
      image2: img32,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2001',
      price: 'Rs. 18,500',
      link: '/velvetimg16'
    },
    {
      image1: img33,
      image2: img34,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2017',
      price: 'Rs. 20,500',
      link: '/velvetimg17'
    },
    {
      image1: img35,
      image2: img36,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2022',
      price: 'Rs. 24,500',
      link: '/velvetimg18'
    },
    {
      image1: img37,
      image2: img38,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2021',
      price: 'Rs. 24,500',
      link: '/velvetimg19'
    },
    {
      image1: img39,
      image2: img40,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2018',
      price: 'Rs. 24,500',
      link: '/velvetimg20'
    },
    {
      image1: img41,
      image2: img42,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2028',
      price: 'Rs. 22,500',
      link: '/velvetimg21'
    },
    {
      image1: img43,
      image2: img44,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2035',
      price: 'Rs. 18,500',
      link: '/velvetimg22'
    },
    {
      image1: img45,
      image2: img46,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2038',
      price: 'Rs. 24,500',
      link: '/velvetimg23'
    },
    {
      image1: img47,
      image2: img48,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2023',
      price: 'Rs. 26,500',
      link: '/velvetimg24'
    },
    {
      image1: img49,
      image2: img50,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2026',
      price: 'Rs. 22,500',
      link: '/velvetimg25'
    },
    {
      image1: img51,
      image2: img52,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2024',
      price: 'Rs. 26,500',
      link: '/velvetimg26'
    },
    {
      image1: img53,
      image2: img54,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2027',
      price: 'Rs. 23,500',
      link: '/velvetimg27'
    },
    {
      image1: img55,
      image2: img56,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2016',
      price: 'Rs. 22,500',
      link: '/velvetimg28'
    },
    {
      image1: img57,
      image2: img58,
      label: 'Unstitched | Stitched',
      title: 'Embroidered Velvet Formal VF-2039',
      price: 'Rs. 24,500',
      link: '/velvetimg29'
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
    <div className="velvet">
      <hr />
      <h1>Velvet</h1>
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
              <Link to="/Velvet-Featured"><p><b>Featured</b></p></Link>
              <Link to="/Velvet-Bestselling"><li>Best selling</li></Link>
              <Link to="/Velvet-AtoZ"><li>Alphabetically A-Z</li></Link>
              <Link to="/Velvet-ZtoA"><li>Alphabetically Z-A</li></Link>
              <Link to="/Velvet-LowtoHigh"><li>Price, low to high</li></Link>
              <Link to="/Velvet-HightoLow"><li>Price, high to low</li></Link>
              <Link to="/Velvet-OldtoNew"><li>Date, old to new</li></Link>
              <Link to="/Velvet-NewtoOld"><li>Date, new to old</li></Link>
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

export default Velvet;
