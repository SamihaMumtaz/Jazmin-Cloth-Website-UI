import React from 'react';
import { Link } from 'react-router-dom';
import img5 from '../../../assets/images/Home/img-5.webp';
import img6 from '../../../assets/images/Home/img-6.webp';
import img7 from '../../../assets/images/Home/img-7.webp';
import img8 from '../../../assets/images/Home/img-8.webp';
import img9 from '../../../assets/images/Home/img-9.webp';
import img10 from '../../../assets/images/Home/img-10.webp';
import img11 from '../../../assets/images/Home/img-11.webp';
import img12 from '../../../assets/images/Home/img-12.webp';

const products = [
  {
    image1: img5,
    image2: img6,
    label: 'Unstitched | Stitched',
    title: 'Embroided Velvet Formal Vf - 2033',
    price: 'Rs. 25,500',
    link: ''
  },
  {
    image1: img7,
    image2: img8,
    label: 'Ready to wear',
    title: 'Embroided Khaddar rtw- 1153',
    price: 'Rs. 9,950',
    link: ''
  },
  {
    image1: img9,
    image2: img10,
    label: 'Unstitched',
    title: 'Digital Printed Premium Viscose uw-0094',
    price: 'Rs. 5,950',
    link: ''
  },
  {
    image1: img11,
    image2: img12,
    label: 'Unstitched | Stitched',
    title: 'Embroided raw silk ur-7001',
    price: 'Rs. 19,500',
    link: ''
  }
];

const Product = ({ product }) => (
  <div className="col-lg-3 col-md-6 col-6 mb-4">
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

const Cloth = () => (
  <>
    <hr className="line" />
    <div className="cloth-text">
      <p>Trending</p>
      <h1>This Week's Top 4</h1>
    </div>
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
    <hr className="line" />
  </>
);

export default Cloth;
