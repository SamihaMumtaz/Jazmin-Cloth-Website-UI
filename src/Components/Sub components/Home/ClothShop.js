import React from 'react'
import img13 from '../../../assets/images/Home/img-13.webp'
import img14 from '../../../assets/images/Home/img-14.webp'
import img15 from '../../../assets/images/Home/img-15.webp'
import img16 from '../../../assets/images/Home/img-16.webp'
import img17 from '../../../assets/images/Home/img-17.webp'
import img18 from '../../../assets/images/Home/img-18.webp'
import img19 from '../../../assets/images/Home/img-19.webp'
import img20 from '../../../assets/images/Home/img-20.webp'
import img21 from '../../../assets/images/Home/img-21.webp'
import img22 from '../../../assets/images/Home/img-22.webp'
import Button from '../../../Utility/Button'
import { Link } from 'react-router-dom'
const ClothShop = () => {
  return (
    <>
    <div className='clothshop-text'>
        <h3>Shop the look</h3>
    </div>
    <div className='container-fluid'>
        <div className='shop'>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className='row gx-0'>
                            <div className='col-8'>
                                <img src={img13} alt='' className='Image-main' />
                            </div>
                            <div className='col-4'>
                                <div className='Image'>
                                    <img src={img14} alt='' className="main-img" />
                                    <img src={img15} alt='' className="image-hover" />
                                    <div className='image_text'>
                                        <p>Unstitched | Stitched</p>
                                        <p>EMBROIDERED CHIFFON UC-3063</p>
                                        <h6>Rs. 12,500</h6>
                                        <Link to="" ><Button text="View Product" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row gx-0'>
                            <div className='col-8'>
                                <img src={img13} alt='' className='Image-main'/>
                            </div>
                            <div className='col-4'>
                                <div className='Image'>
                                    <img src={img16} alt='' className="main-img" />
                                    <img src={img17} alt='' className="image-hover" />
                                    <div className='image_text'>
                                        <p>Unstitched | Stitched</p>
                                        <p>EMBROIDERED CHIFFON UC-3062</p>
                                        <h6>Rs. 14,500</h6>
                                        <Link to="" ><Button text="View Product" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row gx-0'>
                            <div className='col-8'>
                                <img src={img18} alt='' className='Image-main'/>
                            </div>
                            <div className='col-4'>
                                <div className='Image'>
                                    <img src={img19} alt='' className='main-img' />
                                    <img src={img20} alt='' className='image-hover' />
                                    <div className='image_text'>
                                        <p>Unstitched | Stitched</p>
                                        <p>Embroidered Velvet Formal VF - </p><p>2024</p>
                                        <h6>Rs. 26,500</h6>
                                        <Link to="" ><Button text="View Product" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className='row gx-0'>
                            <div className='col-8'>
                                <img src={img18} alt='' className='Image-main'/>
                            </div>
                            <div className='col-4'>
                                <div className='Image'>
                                    <img src={img21} alt='' className='main-img' />
                                    <img src={img22} alt='' className='image-hover' /> 
                                    <div className='image_text'>
                                        <p>Unstitched | Stitched</p>
                                        <p>Embroidered Velvet Formal VF - </p><p>2024</p>
                                        <h6>Rs. 26,500</h6>
                                        <Link to="" ><Button text="View Product" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" 
                        data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" 
                        data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ClothShop
