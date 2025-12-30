import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/UnstitchedBestselling/img-1.jpg';
import img2 from '../../../assets/images/UnstitchedBestselling/img-2.webp';
import img3 from '../../../assets/images/UnstitchedBestselling/img-3.jpg';
import img4 from '../../../assets/images/UnstitchedBestselling/img-4.jpg';
import img5 from '../../../assets/images/UnstitchedBestselling/img-5.jpg';
import img6 from '../../../assets/images/UnstitchedBestselling/img-6.jpg';
import img7 from '../../../assets/images/UnstitchedBestselling/img-7.jpg';
import img8 from '../../../assets/images/UnstitchedBestselling/img-8.jpg';
import img9 from '../../../assets/images/UnstitchedBestselling/img-9.webp';
import img10 from '../../../assets/images/UnstitchedBestselling/img-10.webp';
import img11 from '../../../assets/images/UnstitchedBestselling/img-11.jpg';
import img12 from '../../../assets/images/UnstitchedBestselling/img-12.jpg';
import img13 from '../../../assets/images/UnstitchedBestselling/img-13.jpg';
import img14 from '../../../assets/images/UnstitchedBestselling/img-14.jpg';
import img15 from '../../../assets/images/UnstitchedBestselling/img-15.jpg';
import img16 from '../../../assets/images/UnstitchedBestselling/img-16.jpg';
import img17 from '../../../assets/images/UnstitchedBestselling/img-17.jpg';
import img18 from '../../../assets/images/UnstitchedBestselling/img-18.jpg';
import img19 from '../../../assets/images/UnstitchedBestselling/img-19.webp';
import img20 from '../../../assets/images/UnstitchedBestselling/img-20.webp';
import img21 from '../../../assets/images/UnstitchedBestselling/img-21.jpg';
import img22 from '../../../assets/images/UnstitchedBestselling/img-22.jpg';
import img23 from '../../../assets/images/UnstitchedBestselling/img-23.jpg';
import img24 from '../../../assets/images/UnstitchedBestselling/img-24.jpg';
import img25 from '../../../assets/images/UnstitchedBestselling/img-25.jpg';
import img26 from '../../../assets/images/UnstitchedBestselling/img-26.jpg';
import img27 from '../../../assets/images/UnstitchedBestselling/img-27.jpg';
import img28 from '../../../assets/images/UnstitchedBestselling/img-28.jpg';
import img29 from '../../../assets/images/UnstitchedBestselling/img-29.jpg';
import img30 from '../../../assets/images/UnstitchedBestselling/img-30.jpg';
import img31 from '../../../assets/images/UnstitchedBestselling/img-31.jpg';
import img32 from '../../../assets/images/UnstitchedBestselling/img-32.jpg';
import img33 from '../../../assets/images/UnstitchedBestselling/img-33.webp';
import img34 from '../../../assets/images/UnstitchedBestselling/img-34.webp';
import img35 from '../../../assets/images/UnstitchedBestselling/img-35.jpg';
import img36 from '../../../assets/images/UnstitchedBestselling/img-36.jpg';
import img37 from '../../../assets/images/UnstitchedBestselling/img-37.jpg';
import img38 from '../../../assets/images/UnstitchedBestselling/img-38.jpg';
import img39 from '../../../assets/images/UnstitchedBestselling/img-39.jpg';
import img40 from '../../../assets/images/UnstitchedBestselling/img-40.jpg';
import img41 from '../../../assets/images/UnstitchedBestselling/img-41.jpg';
import img42 from '../../../assets/images/UnstitchedBestselling/img-42.jpg';
import img43 from '../../../assets/images/UnstitchedBestselling/img-43.jpg';
import img44 from '../../../assets/images/UnstitchedBestselling/img-44.jpg';
import img45 from '../../../assets/images/UnstitchedBestselling/img-45.jpg';
import img46 from '../../../assets/images/UnstitchedBestselling/img-46.jpg';
import img47 from '../../../assets/images/UnstitchedBestselling/img-47.jpg';
import img48 from '../../../assets/images/UnstitchedBestselling/img-48.jpg';
import img49 from '../../../assets/images/UnstitchedBestselling/img-49.jpg';
import img50 from '../../../assets/images/UnstitchedBestselling/img-50.jpg';
import img51 from '../../../assets/images/UnstitchedBestselling/img-51.jpg';
import img52 from '../../../assets/images/UnstitchedBestselling/img-52.jpg';
import img53 from '../../../assets/images/UnstitchedBestselling/img-53.jpg';
import img54 from '../../../assets/images/UnstitchedBestselling/img-54.jpg';
import img55 from '../../../assets/images/UnstitchedBestselling/img-55.jpg';
import img56 from '../../../assets/images/UnstitchedBestselling/img-56.jpg';
import img57 from '../../../assets/images/UnstitchedBestselling/img-57.jpg';
import img58 from '../../../assets/images/UnstitchedBestselling/img-58.jpg';
import img59 from '../../../assets/images/UnstitchedBestselling/img-59.jpg';
import img60 from '../../../assets/images/UnstitchedBestselling/img-60.jpg';
import img61 from '../../../assets/images/UnstitchedBestselling/img-61.jpg';
import img62 from '../../../assets/images/UnstitchedBestselling/img-62.jpg';
import img63 from '../../../assets/images/UnstitchedBestselling/img-63.jpg';
import img64 from '../../../assets/images/UnstitchedBestselling/img-64.jpg';
import img65 from '../../../assets/images/UnstitchedBestselling/img-65.jpg';
import img66 from '../../../assets/images/UnstitchedBestselling/img-66.jpg';
import img67 from '../../../assets/images/UnstitchedBestselling/img-67.jpg';
import img68 from '../../../assets/images/UnstitchedBestselling/img-68.jpg';
import img69 from '../../../assets/images/UnstitchedBestselling/img-69.jpg';
import img70 from '../../../assets/images/UnstitchedBestselling/img-70.jpg';
import img71 from '../../../assets/images/UnstitchedBestselling/img-71.jpg';
import img72 from '../../../assets/images/UnstitchedBestselling/img-72.jpg';
import img73 from '../../../assets/images/UnstitchedBestselling/img-73.jpg';
import img74 from '../../../assets/images/UnstitchedBestselling/img-74.jpg';
import img75 from '../../../assets/images/UnstitchedBestselling/img-75.jpg';
import img76 from '../../../assets/images/UnstitchedBestselling/img-76.jpg';
import img77 from '../../../assets/images/UnstitchedBestselling/img-77.jpg';
import img78 from '../../../assets/images/UnstitchedBestselling/img-78.jpg';
import img79 from '../../../assets/images/UnstitchedBestselling/img-79.jpg';
import img80 from '../../../assets/images/UnstitchedBestselling/img-80.jpg';
import img81 from '../../../assets/images/UnstitchedBestselling/img-81.jpg';
import img82 from '../../../assets/images/UnstitchedBestselling/img-82.jpg';
import img83 from '../../../assets/images/UnstitchedBestselling/img-83.jpg';
import img84 from '../../../assets/images/UnstitchedBestselling/img-84.jpg';
import img85 from '../../../assets/images/UnstitchedBestselling/img-85.jpg';
import img86 from '../../../assets/images/UnstitchedBestselling/img-86.jpg';
import img87 from '../../../assets/images/UnstitchedBestselling/img-87.jpg';
import img88 from '../../../assets/images/UnstitchedBestselling/img-88.jpg';
import img89 from '../../../assets/images/UnstitchedBestselling/img-89.jpg';
import img90 from '../../../assets/images/UnstitchedBestselling/img-90.jpg';
import img91 from '../../../assets/images/UnstitchedBestselling/img-91.jpg';
import img92 from '../../../assets/images/UnstitchedBestselling/img-92.jpg';
import img93 from '../../../assets/images/UnstitchedBestselling/img-93.jpg';
import img94 from '../../../assets/images/UnstitchedBestselling/img-94.jpg';
import img95 from '../../../assets/images/UnstitchedBestselling/img-95.jpg';
import img96 from '../../../assets/images/UnstitchedBestselling/img-96.jpg';
const UnstitchedBestselling = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);  
  };

  const products = [
    {
      image1: img1,
      image2: img2,
      label: 'Unstitched',
      title: 'EMBROIDERED JACQUARD KHADDAR UW-0016',
      price: 'Rs. 8,250',
      link: ''
    },
    {
      image1: img3,
      image2: img4,
      label: 'Unstitched',
      title: 'EMBROIDERED SLUB KHADDAR-DW23-D4',
      price: 'Rs. 11,950',
      link: ''
    },
    {
      image1: img5,
      image2: img6,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0076',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img7,
      image2: img8,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0047',
      price: 'Rs. 6,950',
      link: ''
    },
    {
      image1: img9,
      image2: img10,
      label: 'Unstitched',
      title: 'EMBROIDERED JACQUARD KHADDAR UW-0055',
      price: 'Rs. 6,950',
      link: ''
    },
    {
      image1: img11,
      image2: img12,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0111',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img13,
      image2: img14,
      label: 'Unstitched',
      title: 'DIGITAL PRINTED CORDUROY UWP-0032',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img15,
      image2: img16,
      label: 'Unstitched',
      title: 'DIGITAL PRINTED CORDUROY UWP-0027',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img17,
      image2: img18,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0073',
      price: 'Rs. 7,950',
      link: ''
    },
    {
      image1: img19,
      image2: img20,
      label: 'Unstitched',
      title: 'EMBROIDERED VISCOSE UW-0068',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img21,
      image2: img22,
      label: 'Unstitched',
      title: 'EMBROIDERED JACQUARD KHADDAR UW-0054',
      price: 'Rs. 6,950',
      link: ''
    },
    {
      image1: img23,
      image2: img24,
      label: 'Unstitched',
      title: 'DIGITAL PRINTED CORDUROY UWP-0024',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img25,
      image2: img26,
      label: 'Unstitched',
      title: 'DIGITAL PRINTED CORDUROY UWP-0022',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img27,
      image2: img28,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0060',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img29,
      image2: img30,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0051',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img31,
      image2: img32,
      label: 'Unstitched',
      title: 'EMBROIDERED JACQUARD KHADDAR UW-0077',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img33,
      image2: img34,
      label: 'Unstitched',
      title: 'DIGITAL PRINTED CORDUROY UWP-0029',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img35,
      image2: img36,
      label: 'Unstitched',
      title: 'EMBROIDERED JACQUARD KHADDAR UW-0078',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img37,
      image2: img38,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0052',
      price: 'Rs. 5,950',
      link: ''
    },
    {
      image1: img39,
      image2: img40,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0069',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img41,
      image2: img42,
      label: 'Unstitched',
      title: 'EMBROIDERED JACQUARD KHADDAR UW-0139',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img43,
      image2: img44,
      label: 'Unstitched',
      title: 'DIGITAL PRINTED CORDUROY UWP-0031',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img45,
      image2: img46,
      label: 'Unstitched',
      title: 'EMBROIDERED PREMIUM VISCOSE UW-0132',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img47,
      image2: img48,
      label: 'Unstitched',
      title: 'EMBROIDERED VISCOSE UW-0062',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img49,
      image2: img50,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0072',
      price: 'Rs. 7,950',
      link: ''
    },
    {
      image1: img51,
      image2: img52,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0059',
      price: 'Rs. 8,450',
      link: ''
    },
    {
      image1: img53,
      image2: img54,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0058',
      price: 'Rs. 7,450',
      link: ''
    },
    {
      image1: img55,
      image2: img56,
      label: 'Unstitched',
      title: 'EMBROIDERED PREMIUM VISCOSE UW-0085',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img57,
      image2: img58,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0065',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img59,
      image2: img60,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0050',
      price: 'Rs. 7,450',
      link: ''
    },
    {
      image1: img61,
      image2: img62,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0064',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img63,
      image2: img64,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0071',
      price: 'Rs. 7,450',
      link: ''
    },
    {
      image1: img65,
      image2: img66,
      label: 'Unstitched',
      title: 'EMBROIDERED SLUB KHADDAR UW-0082',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img67,
      image2: img68,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0067',
      price: 'Rs. 10,950',
      link: ''
    },
    {
      image1: img69,
      image2: img70,
      label: 'Unstitched',
      title: 'EMBROIDERED KHADDAR UW-0070',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img71,
      image2: img72,
      label: 'Unstitched',
      title: 'DIGITAL PRINTED PREMIUM VISCOSE UW-0100',
      price: 'Rs. 5,950',
      link: ''
    },
    {
      image1: img73,
      image2: img74,
      label: 'Unstitched',
      title: 'EMBROIDERED PREMIUM VISCOSE UW-0097',
      price: 'Rs. 8,650',
      link: ''
    },
    {
      image1: img75,
      image2: img76,
      label: 'Unstitched',
      title: 'EMBROIDERED JACQUARD KHADDAR UW-0127',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img77,
      image2: img78,
      label: 'Unstitched',
      title: 'DIGITAL PRINTED PREMIUM VISCOSE UW-0124',
      price: 'Rs. 6,450',
      link: ''
    },
    {
      image1: img79,
      image2: img80,
      label: 'Unstitched',
      title: 'EMBROIDERED VISCOSE UW-0048',
      price: 'Rs. 8,450',
      link: ''
    },
    {
      image1: img81,
      image2: img82,
      label: 'Unstitched',
      title: 'EMBROIDERED VISCOSE UW-0056',
      price: 'Rs. 9,950',
      link: ''
    },
    {
      image1: img83,
      image2: img84,
      label: 'Unstitched',
      title: 'EMBROIDERED JACQUARD KHADDAR UW-0129',
      price: 'Rs. 8,950',
      link: ''
    },
    {
      image1: img85,
      image2: img86,
      label: 'Unstitched',
      title: 'EMBROIDERED VISCOSE UW-0057',
      price: 'Rs. 9,950',
      link: ''
    },
    {
      image1: img87,
      image2: img88,
      label: 'Unstitched',
      title: 'DIGITAL PRINTED PREMIUM VISCOSE UW-0105',
      price: 'Rs. 5,650',
      link: ''
    },
    {
      image1: img89,
      image2: img90,
      label: 'Unstitched',
      title: 'EMBROIDERED SLUB KHADDAR UW-0088',
      price: 'Rs. 7,950',
      link: ''
    },
    {
      image1: img91,
      image2: img92,
      label: 'Unstitched',
      title: 'EMBROIDERED SLUB KHADDAR UW-0075',
      price: 'Rs. 11,95',
      link: ''
    },
    {
      image1: img93,
      image2: img94,
      label: 'Unstitched',
      title: 'EMBROIDERED PREMIUM VISCOSE UW-0084',
      price: 'Rs. 8,650',
      link: ''
    },
    {
      image1: img95,
      image2: img96,
      label: 'Unstitched',
      title: 'EMBROIDERED JACQUARD KHADDAR UW-0125',
      price: 'Rs. 9,950',
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
    <div className="unstitched">
        <hr />
        <h1>Unstitched Winter</h1>
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
                    <Link to="/unstitched-featured"><p><b>Featured</b></p></Link>
                    <Link to="/unstitched-bestselling"><li>Best selling</li></Link>
                    <Link to="/unstitched-AtoZ"><li>Alphabetically A-Z</li></Link>
                    <Link to="/unstitched-ZtoA"><li>Alphabetically Z-A</li></Link>
                    <Link to="/unstitched-lowtohigh"><li>Price, low to high</li></Link>
                    <Link to="/unstitched-hightolow"><li>Price, high to low</li></Link>
                    <Link to="/unstitched-oldtonew"><li>Date, old to new</li></Link>
                    <Link to="/unstitched-newtoold"><li>Date, new to old</li></Link>
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

export default UnstitchedBestselling;