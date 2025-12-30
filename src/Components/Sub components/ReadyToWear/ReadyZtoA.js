import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/ReadyToWear/img-1.jpg';
import img2 from '../../../assets/images/ReadyToWear/img-2.jpg';
import img3 from '../../../assets/images/ReadyToWear/img-3.jpg';
import img4 from '../../../assets/images/ReadyToWear/img-4.jpg';
import img5 from '../../../assets/images/ReadyToWear/img-5.jpg';
import img6 from '../../../assets/images/ReadyToWear/img-6.jpg';
import img7 from '../../../assets/images/ReadyToWear/img-7.jpg';
import img8 from '../../../assets/images/ReadyToWear/img-8.jpg';
import img9 from '../../../assets/images/ReadyToWear/img-9.jpg';
import img10 from '../../../assets/images/ReadyToWear/img-10.jpg';
import img11 from '../../../assets/images/ReadyToWear/img-11.jpg';
import img12 from '../../../assets/images/ReadyToWear/img-12.jpg';
import img13 from '../../../assets/images/ReadyToWear/img-13.jpg';
import img14 from '../../../assets/images/ReadyToWear/img-14.jpg';
import img15 from '../../../assets/images/ReadyToWear/img-15.jpg';
import img16 from '../../../assets/images/ReadyToWear/img-16.jpg';
import img17 from '../../../assets/images/ReadyToWear/img-17.jpg';
import img18 from '../../../assets/images/ReadyToWear/img-18.jpg';
import img19 from '../../../assets/images/ReadyToWear/img-19.jpg';
import img20 from '../../../assets/images/ReadyToWear/img-20.jpg';
import img21 from '../../../assets/images/ReadyToWear/img-21.jpg';
import img22 from '../../../assets/images/ReadyToWear/img-22.jpg';
import img23 from '../../../assets/images/ReadyToWear/img-23.jpg';
import img24 from '../../../assets/images/ReadyToWear/img-24.jpg';
import img25 from '../../../assets/images/ReadyToWear/img-25.jpg';
import img26 from '../../../assets/images/ReadyToWear/img-26.jpg';
import img27 from '../../../assets/images/ReadyToWear/img-27.jpg';
import img28 from '../../../assets/images/ReadyToWear/img-28.jpg';
import img29 from '../../../assets/images/ReadyToWear/img-29.jpg';
import img30 from '../../../assets/images/ReadyToWear/img-30.jpg';
import img31 from '../../../assets/images/ReadyToWear/img-31.jpg';
import img32 from '../../../assets/images/ReadyToWear/img-32.jpg';
import img33 from '../../../assets/images/ReadyToWear/img-33.jpg';
import img34 from '../../../assets/images/ReadyToWear/img-34.jpg';
import img35 from '../../../assets/images/ReadyToWear/img-35.jpg';
import img36 from '../../../assets/images/ReadyToWear/img-36.jpg';
import img37 from '../../../assets/images/ReadyToWear/img-37.jpg';
import img38 from '../../../assets/images/ReadyToWear/img-38.jpg';
import img39 from '../../../assets/images/ReadyToWear/img-39.jpg';
import img40 from '../../../assets/images/ReadyToWear/img-40.jpg';
import img41 from '../../../assets/images/ReadyToWear/img-41.jpg';
import img42 from '../../../assets/images/ReadyToWear/img-42.jpg';
import img43 from '../../../assets/images/ReadyToWear/img-43.jpg';
import img44 from '../../../assets/images/ReadyToWear/img-44.jpg';
import img45 from '../../../assets/images/ReadyToWear/img-45.jpg';
import img46 from '../../../assets/images/ReadyToWear/img-46.jpg';
import img47 from '../../../assets/images/ReadyToWear/img-47.jpg';
import img48 from '../../../assets/images/ReadyToWear/img-48.jpg';
import img49 from '../../../assets/images/ReadyToWear/img-49.jpg';
import img50 from '../../../assets/images/ReadyToWear/img-50.jpg';
import img51 from '../../../assets/images/ReadyToWear/img-51.jpg';
import img52 from '../../../assets/images/ReadyToWear/img-52.jpg';
import img53 from '../../../assets/images/ReadyToWear/img-53.jpg';
import img54 from '../../../assets/images/ReadyToWear/img-54.jpg';
import img55 from '../../../assets/images/ReadyToWear/img-55.jpg';
import img56 from '../../../assets/images/ReadyToWear/img-56.jpg';
import img57 from '../../../assets/images/ReadyToWear/img-57.jpg';
import img58 from '../../../assets/images/ReadyToWear/img-58.jpg';
import img59 from '../../../assets/images/ReadyToWear/img-59.jpg';
import img60 from '../../../assets/images/ReadyToWear/img-60.jpg';
import img61 from '../../../assets/images/ReadyToWear/img-61.jpg';
import img62 from '../../../assets/images/ReadyToWear/img-62.jpg';
import img63 from '../../../assets/images/ReadyToWear/img-63.jpg';
import img64 from '../../../assets/images/ReadyToWear/img-64.jpg';
import img65 from '../../../assets/images/ReadyToWear/img-65.jpg';
import img66 from '../../../assets/images/ReadyToWear/img-66.jpg';
import img67 from '../../../assets/images/ReadyToWear/img-67.jpg';
import img68 from '../../../assets/images/ReadyToWear/img-68.jpg';
import img69 from '../../../assets/images/ReadyToWear/img-69.jpg';
import img70 from '../../../assets/images/ReadyToWear/img-70.jpg';
import img71 from '../../../assets/images/ReadyToWear/img-71.jpg';
import img72 from '../../../assets/images/ReadyToWear/img-72.jpg';
import img73 from '../../../assets/images/ReadyToWear/img-73.jpg';
import img74 from '../../../assets/images/ReadyToWear/img-74.jpg';
import img75 from '../../../assets/images/ReadyToWear/img-75.jpg';
import img76 from '../../../assets/images/ReadyToWear/img-76.jpg';
import img77 from '../../../assets/images/ReadyToWear/img-77.jpg';
import img78 from '../../../assets/images/ReadyToWear/img-78.jpg';
import img79 from '../../../assets/images/ReadyToWear/img-79.jpg';
import img80 from '../../../assets/images/ReadyToWear/img-80.jpg';
import img81 from '../../../assets/images/ReadyToWear/img-81.jpg';
import img82 from '../../../assets/images/ReadyToWear/img-82.jpg';
import img83 from '../../../assets/images/ReadyToWear/img-83.jpg';
import img84 from '../../../assets/images/ReadyToWear/img-84.jpg';
import img85 from '../../../assets/images/ReadyToWear/img-85.jpg';
import img86 from '../../../assets/images/ReadyToWear/img-86.jpg';
import img87 from '../../../assets/images/ReadyToWear/img-87.jpg';
import img88 from '../../../assets/images/ReadyToWear/img-88.jpg';
const ReadyZtoA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(prevState => !prevState);  
  };

  const products = [
    {
        image1: img49,
        image2: img50,
        label: '3 Pieces',
        title: 'EMBROIDERED VISCOSE RTW-1136',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img65,
        image2: img66,
        label: '3 Pieces',
        title: 'EMBROIDERED VISCOSE RTW-1135',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img61,
        image2: img62,
        label: '3 Pieces',
        title: 'EMBROIDERED VISCOSE RTW-1134',
        price: 'Rs. 11,950',
        link: ''
      },
      {
        image1: img69,
        image2: img70,
        label: '3 Pieces',
        title: 'EMBROIDERED VISCOSE RTW-1133',
        price: 'Rs. 11,950',
        link: ''
      },
      {
        image1: img17,
        image2: img18,
        label: '3 Pieces',
        title: 'EMBROIDERED SLUB KHADDAR RTW-1157',
        price: 'Rs. 8,950',
        link: ''
      },
      {
        image1: img41,
        image2: img42,
        label: '2 Pieces',
        title: 'EMBROIDERED SLUB KHADDAR RTW-1151',
        price: 'Rs. 6,950',
        link: ''
      },
      {
        image1: img43,
        image2: img44,
        label: '3 Pieces',
        title: 'EMBROIDERED SLUB KHADDAR RTW-1150',
        price: 'Rs. 10,950',
        link: ''
      },
      {
        image1: img33,
        image2: img34,
        label: '2 Pieces',
        title: 'Embroidered Slub Khaddar RTW-1004',
        price: 'Rs. 6,950',
        link: ''
      },
      {
        image1: img81,
        image2: img82,
        label: '2 Pieces',
        title: 'Embroidered Slub Khaddar RTW-1002',
        price: 'Rs. 7,950',
        link: ''
      },
      {
        image1: img3,
        image2: img4,
        label: '3 Pieces',
        title: 'EMBROIDERED SLUB KHADDAR RTW - 1166',
        price: 'Rs. 8,650',
        link: ''
      },
      {
        image1: img45,
        image2: img46,
        label: '3 Pieces',
        title: 'EMBROIDERED PREMIUM VISCOSE RTW-1148',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img37,
        image2: img38,
        label: '3 Pieces',
        title: 'EMBROIDERED PREMIUM VISCOSE RTW-1147',
        price: 'Rs. 10,950',
        link: ''
      },
      {
        image1: img7,
        image2: img8,
        label: '3 Pieces',
        title: 'EMBROIDERED PREMIUM VISCOSE RTW - 1165',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img39,
        image2: img40,
        label: '3 Pieces',
        title: 'EMBROIDERED KHADDAR RTW-1153',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img53,
        image2: img54,
        label: '3 Pieces',
        title: 'EMBROIDERED KHADDAR RTW-1142',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img77,
        image2: img78,
        label: '3 Pieces',
        title: 'EMBROIDERED KHADDAR RTW-1139',
        price: 'Rs. 9,650',
        link: ''
      },
      {
        image1: img51,
        image2: img52,
        label: '3 Pieces',
        title: 'EMBROIDERED KHADDAR RTW-1138',
        price: 'Rs. 9,650',
        link: ''
      },
      {
        image1: img55,
        image2: img56,
        label: '3 Pieces',
        title: 'EMBROIDERED KHADDAR RTW-1137',
        price: 'Rs. 11,950',
        link: ''
      },
      {
        image1: img79,
        image2: img80,
        label: '3 Pieces',
        title: 'EMBROIDERED KHADDAR RTW-1132',
        price: 'Rs. 8,450',
        link: ''
      },
      {
        image1: img75,
        image2: img76,
        label: '3 Pieces',
        title: 'EMBROIDERED KHADDAR RTW-1131',
        price: 'Rs. 11,950',
        link: ''
      },
      {
        image1: img59,
        image2: img60,
        label: '3 Pieces',
        title: 'EMBROIDERED KHADDAR RTW-1130',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img71,
        image2: img72,
        label: '3 Pieces',
        title: 'EMBROIDERED KHADDAR RTW-1129',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img73,
        image2: img74,
        label: '3 Pieces',
        title: 'EMBROIDERED KHADDAR RTW-1128',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img47,
        image2: img48,
        label: '2 Pieces',
        title: 'Embroidered Khaddar RTW-1001',
        price: 'Rs. 7,650',
        link: ''
      },
      {
        image1: img21,
        image2: img22,
        label: '2 Pieces',
        title: 'EMBROIDERED KHADDAR RTW - 1161',
        price: 'Rs. 7,950',
        link: ''
      },
      {
        image1: img19,
        image2: img20,
        label: '3 Pieces',
        title: 'EMBROIDERED JACQUARD KHADDAR RTW-1159',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img5,
        image2: img6,
        label: '3 Pieces',
        title: 'EMBROIDERED JACQUARD KHADDAR RTW - 1169',
        price: 'Rs. 11,950',
        link: ''
      },
      {
        image1: img1,
        image2: img2,
        label: '3 Pieces',
        title: 'EMBROIDERED JACQUARD KHADDAR RTW - 1168',
        price: 'Rs. 12,950',
        link: ''
      },
      {
        image1: img63,
        image2: img64,
        label: '3 Pieces',
        title: 'Embroidered Fine Slub RTW-1007',
        price: 'Rs. 9,950',
        link: ''
      },
      {
        image1: img67,
        image2: img68,
        label: '2 Pieces',
        title: 'DYED CUTPANA KHADDAR RTW-1146',
        price: 'Rs. 7,950',
        link: ''
      },
      {
        image1: img85,
        image2: img86,
        label: '2 Pieces',
        title: 'DYED CUTPANA KHADDAR RTW-1145',
        price: 'Rs. 7,950',
        link: ''
      },
      {
        image1: img83,
        image2: img84,
        label: '2 Pieces',
        title: 'DYED CUTPANA KHADDAR RTW-1144',
        price: 'Rs. 7,950',
        link: ''
      },
      {
        image1: img57,
        image2: img58,
        label: '2 Pieces',
        title: 'DYED CUTPANA KHADDAR RTW-1143',
        price: 'Rs. 7,950',
        link: ''
      },
      {
        image1: img9,
        image2: img10,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW-1158',
        price: 'Rs. 9,450',
        link: ''
      },
      {
        image1: img35,
        image2: img36,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW-1156',
        price: 'Rs. 8,950',
        link: ''
      },
      {
        image1: img27,
        image2: img28,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW-1155',
        price: 'Rs. 8,950',
        link: ''
      },
      {
        image1: img29,
        image2: img30,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW-1154',
        price: 'Rs. 8,950',
        link: ''
      },
      {
        image1: img31,
        image2: img32,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW-1152',
        price: 'Rs. 8,950',
        link: ''
      },
      {
        image1: img25,
        image2: img26,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW- 1160',
        price: 'Rs. 8,950',
        link: ''
      },
      {
        image1: img87,
        image2: img88,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW - 1170',
        price: 'Rs. 8,950',
        link: ''
      },
      {
        image1: img11,
        image2: img12,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW - 1167',
        price: 'Rs. 9,450',
        link: ''
      },
      {
        image1: img13,
        image2: img14,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW - 1164',
        price: 'Rs. 8,950',
        link: ''
      },
      {
        image1: img23,
        image2: img24,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW - 1163',
        price: 'Rs. 8,650',
        link: ''
      },
      {
        image1: img15,
        image2: img16,
        label: '3 Pieces',
        title: 'DIGITAL PRINTED PREMIUM VISCOSE RTW - 1162',
        price: 'Rs. 8,650',
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
    <div className="ready-to-wear">
        <hr />
        <h1>Ready to wear</h1>
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
                    <Link to="/ReadyFeatured"><p><b>Featured</b></p></Link>
                    <Link to="/ReadyBestselling"><li>Best selling</li></Link>
                    <Link to="/ReadyAtoZ"><li>Alphabetically A-Z</li></Link>
                    <Link to="/ReadyZtoA"><li>Alphabetically Z-A</li></Link>
                    <Link to="/Readylowtohigh"><li>Price, low to high</li></Link>
                    <Link to="/Readyhightolow"><li>Price, high to low</li></Link>
                    <Link to="/Readyoldtonew"><li>Date, old to new</li></Link>
                    <Link to="/Readynewtoold"><li>Date, new to old</li></Link>
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

export default ReadyZtoA;