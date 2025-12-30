import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className=" text-white pt-4">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <h5 className='footer_text'>Contact Us</h5>
                    <div className='ul_text'>
                        <ul className='list-unstyled'>
                            <li><Link to="">Call Us</Link></li>
                            <li><Link to="">Email Us</Link></li>
                            <li><Link to="/Contact-Us">Contact Us</Link></li>
                            <li><Link to="/FAQ">FAQ</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <h5 className='footer-text'>Services</h5>
                    <div className='ul-text'>
                        <ul className="list-unstyled">
                            <li><Link to="/stitching">Stitching Service</Link></li>
                            <li><Link to="/international-shipping">International Shipping</Link></li>
                            <li><Link to="/pakistan-shipping">Pakistan Shipping</Link></li>
                            <li><Link to="/gift-packaging">Gift Packaging</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <h5 className='footertext'>Policies</h5>
                    <div className='ultext'>
                        <ul className='list-unstyled'>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link to="/refund-policy">Refund & Exchange Policy</Link></li>
                            <li><Link to="/shipping-policy">Shipping Policy</Link></li>
                            <li><Link to="/terms-of-services">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="social_icons">
                <Link to="https://www.facebook.com/jazminonline"><FaFacebookF /></Link>
                <Link to="https://www.instagram.com/jazminonline/"><FaInstagram /></Link>
                <Link to="https://www.youtube.com/channel/UCW_TvIVtH8DBcR3IuztkeOA"><FaYoutube /></Link>
                <Link to="https://www.tiktok.com/@jazminonline"><FaTiktok /></Link>
                <Link to="https://www.linkedin.com/company/102874888"><FaLinkedin /></Link>
                <Link to="https://api.whatsapp.com/send/?phone=923484848914&text&type=phone_number&app_absent=0"><FaWhatsapp /></Link>
            </div>
            <div className="footer-botom pb-3">
                <p className="mb-0">&copy; 2024 - Jazmin</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
