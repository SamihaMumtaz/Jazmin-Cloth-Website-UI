import React from 'react';
import { Link } from 'react-router-dom';
import fimg1 from '../../../assets/images/Footer/img-1.jpg';
import Button from '../../../Utility/Button';
import img2 from '../../../assets/images/Footer/img-2.webp';
import img3 from '../../../assets/images/Footer/img-3.webp';
import img4 from '../../../assets/images/Footer/img-4.webp';

const Blog = () => {
  return (
    <div className='blog'>
      <h3>News</h3>
      <Link to="">
        <div className='img-container F-img-1'>
          <img src={fimg1} alt='' className='img-responsive' />
          <div className='f-img-text'>
            <h4>Best winter dress designs and velvet dresses</h4>
            <Button text="Read More" />
          </div>
        </div>
      </Link>
      <div className='blog-row'>
        <div className='container'>
          <div className='row g-4'>
            <div className='col-md-4 col-sm-6'>
              <div className='img-container'>
                <Link to=""><img src={img2} alt='' className='img-responsive'/></Link>
              </div>
              <div className='blog-text'>
                <Link to=""><span>Buy Elegant Formal Dresses for Women</span></Link>
                <p>When it comes to fashion, nothing captures the elegance and rich heritage of our 
                culture quite like Pakistani formal dresses. Whether it’s a wedding, a formal dinner or 
                a festive occasion, the righ...</p>
                <Link to="">Read More</Link>
              </div>
            </div>
            <div className='col-md-4 col-sm-6'>
              <div className='img-container'>
                <Link to=""><img src={img3} alt='' className='img-responsive'/></Link>
              </div>
              <div className='blog-text'>
                <Link to=""><span>Affordable Luxury of Unstitched Embroidered Lawn at Jazmin.pk</span></Link>
                <p>When it comes to upgrading your wardrobe with high-quality and stylish outfits, 
                Jazmin.pk is the go-to destination for women’s fashion in Pakistan. With a wide range of 
                designs in embroidered piece...</p>
                <Link to="">Read More</Link>
              </div>
            </div>
            <div className='col-md-4 col-sm-12'>
              <div className='img-container'>
                <Link to=""><img src={img4} alt='' className='img-responsive'/></Link>
              </div>
              <div className='blog-text'>
                <Link to=""><span>Luxury Dresses Online – Raw Silk & Lawn Collection</span></Link>
                <p>In fashion, elegance and comfort are essential for creating outstanding outfits. 
                Whether you are seeking a modern look or something versatile for the summer season, 
                luxury lawn dresses offer the p...</p>
                <Link to="">Read More</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
          <div className='col-md-4 col-sm-12'>
              <div className='blog-text'>
                <Link to=""><span>Formal Dresses for Women: Style with Elegance</span></Link>
                <p>Formal dresses for women are the symbol of sophistication and grace, offering a 
                timeless elegance that can make you shine in any occasion. Whether you are attending 
                a black-tie event or a wedding, ...</p>
                <Link to="">Read More</Link>
              </div>
            </div>
            <div className='col-md-4 col-sm-12'>
              <div className='blog-text'>
                <Link to=""><span>Women's Ready-to-Wear: Casual, Party and Pakistani Dresses</span></Link>
                <p>Fashion has always been a reflection of the times, changing with society and 
                technological advancements. There are a lot of new ideas that have revolutionized 
                fashion. The most prominent is ready-...</p>
                <Link to="">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
