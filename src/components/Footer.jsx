import React from 'react'
import image from '../assets/logo.png'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='main-footer--parent bg-[#081B33]'>
        <div className="inner-footer--wrapper">
            <div className="upper-footer footer-up p-[2rem]">
                <div className="footer-blocks-wrapper w-full flex justify-between">
                    <div className="website-info w-[30%]">
                        <img src={image} alt="footer-logo-alt" width="50%" height="auto" />
                        <p className="website-desc-para mb-[10px]">Curating the world's finest bath, tile and <br />lighting brands for exceptional spaces.</p>
                        <div className="social-icons flex w-full justify-left gap-[1rem] my-[10px]">
                            <li className="icons icon-instagram list-none">
                                <i class="fa-brands fa-instagram text-[20px]"></i>
                            </li>
                            <li className="icons icon-facebook list-none">
                                <i class="fa-brands fa-facebook text-[20px]"></i>
                            </li>
                            <li className="icons icon-pinterest list-none">
                                <i class="fa-brands fa-pinterest text-[20px]"></i>
                            </li>
                            <li className="icons icon-youtube list-none">
                                <i class="fa-brands fa-youtube text-[20px]"></i>
                            </li>
                        </div>
                    </div>
                    <div className="footer-menu w-[17.5%]">
                        <h4 className="menu-block-heading uppercase font-semibold mb-[20px]">Menu</h4>
                        <ul className="menu-links--wrapper">
                            <li className="menu-link-element mb-[10px] text-[16px]">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="menu-link-element mb-[10px] text-[16px]">
                                <Link to="/brands">Our Brands</Link>
                            </li>
                            <li className="menu-link-element mb-[10px] text-[16px]">
                                <Link to="/outlets">Outlets</Link>
                            </li>
                            <li className="menu-link-element mb-[10px] text-[16px]">
                                <a href="#">Gallary</a>
                            </li>
                            <li className="menu-link-element mb-[10px] text-[16px]">
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-categories w-[17.5%]">
                        <h4 className="categories-block-heading uppercase font-semibold mb-[20px]">Categories</h4>
                        <ul className="menu-links--wrapper">
                            <li className="menu-link-element mb-[10px] text-[16px]">
                                <Link to="/bath-products">Bath Products</Link>
                            </li>
                            <li className="menu-link-element mb-[10px] text-[16px]">
                                <Link to="/tiles">Tiles</Link>
                            </li>
                            <li className="menu-link-element mb-[10px] text-[16px]">
                                <Link to="/lights">Lights</Link>
                            </li>
                            <li className="menu-link-element mb-[10px] text-[16px]">
                                <Link to="/others">Other Products</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-visit w-[17.5%]">
                        <h4 className="visit-block-heading uppercase font-semibold mb-[20px]">Visit</h4>
                        <p className="visit-address">Indore, Madhya Pradesh <br /> India</p>
                        <br />
                        <Link to="/outlets" className="view-all-outlet uppercase tracking-[0]">View All Outlets →</Link>
                    </div>
                    <div className="footer-contact-block w-[17.5%]">
                        <h4 className="contact-block-heading uppercase font-semibold mb-[20px]">Contact</h4>
                        <div className="contact-blocks--wrapper">
                            <div className="contact-block--1 mb-[10px] text-[16px]">
                               <i class="fa-solid fa-phone"></i>  +91 98989 98098
                            </div>
                            <div className="contact-block--2 mb-[10px] text-[16px]">
                               <i class="fa-solid fa-envelope"></i>  hello@mvpatelco.com
                            </div>
                            <div className="contact-block--3 mb-[10px] text-[16px]">
                                <i class="fa-solid fa-calendar"></i>  Mon - Sat: 10:00AM - 8:00PM
                            </div>
                            <div className="contact-block--4 mb-[10px] text-[16px]">
                                <i class="fa-solid fa-calendar"></i>  Sunday: 10:00AM - 8:00PM
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lower-footer footer-down px-[5rem] py-[10px] flex justify-between">
                <div className="copyright-text text-[#fff] uppercase text-[14px] tracking-[0.6px]">©2026 MV patel & Co. All Right Reserved</div>
                <div className="footer-policies flex gap-[20px]">
                    <li className="privacy-policy policy-text list-none text-[#fff] uppercase text-[14px]">
                        <a href="#">Privacy Policy</a>
                    </li>
                    <div className="separator-vertical w-[2px] h-[100%] bg-[#ffffff23] "></div>
                    <li className="terms-condition policy-text list-none text-[#fff] uppercase text-[14px]">
                        <a href="#">Terms & Condition</a>
                    </li>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
