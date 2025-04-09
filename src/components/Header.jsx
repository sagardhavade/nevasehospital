// src/components/Header.jsx
import React, { useEffect, useState } from 'react';
// import './Header.css'; // Import any specific styles for the header
import { Link } from 'react-router-dom';
const Header = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the time as needed
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* Preloader Start */}
            {loading && (
                <div id="preloader">
                    <div id="status">
                        <img src="/images/preloader.gif" id="preloader_image" alt="loader" />
                    </div>
                </div>
            )}
            {/* Top Header Start */}
            <div className="top_header_wrapper d-none d-sn-none d-md-block d-lg-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="top_header_add">
                                <ul>
                                    <li><i className="fa fa-map-marker" aria-hidden="true"></i><span>Address :</span> Pune</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"></i><span>Call us :</span> +91 9100000000</li>
                                    <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="#"><span>Email :</span> info@nevasehospital.com</a></li>
                                </ul>
                            </div>
                            <div className="top_login">
                                <ul>
                                    <li><i className="fa fa-sign-in" aria-hidden="true"></i><a href="login_register.html">Appointment</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header Menu Wrapper */}
            <div className="menu_wrapper header-area hidden-menu-bar stick">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-2 col-xs-12">
                            <div className="header_logo">
                                <a href="index.html" className="hidden-xs">
                                    <img src="/images/logo/NCLOGO.png" width={150} height={140} alt="logo" title="logo" className="img-responsive d-none d-sm-none d-md-block d-lg-block mt-3" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-10 col-xs-12">
                            <div className="kv_navigation_wrapper">
                                {/* <div className="et_navbar_search_wrapper d-none d-sm-none d-md-block d-lg-block">
                                    <div className="et_search_bar" id="search_button">
                                        <a href="#">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                            </a>
                                    </div>
                                    <div id="search_open" className="et_search_box">
                                        <input type="text" placeholder="Search here" />
                                        <button><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </div>
                                </div> */}
                                <div className="mainmenu d-xl-block d-lg-block d-md-block d-sm-none d-none mb-4">
                                    <ul className="main_nav_ul">
                                        <li className="has-mega gc_main_navigation">
                                            {/* <a href="index_clinic.html" className="gc_main_navigation hover_color">Home&nbsp;</a> */}
                                            <Link to="/" className="gc_main_navigation hover_color">Home&nbsp;</Link>
                                        </li>
                                        <li className="has-mega gc_main_navigation">
                                            {/* <a href="" className="gc_main_navigation hover_color">About Us&nbsp;</a> */}
                                            <Link to="/about" className="gc_main_navigation hover_color">About Us&nbsp;</Link>
                                        </li>
                                        <li className="has-mega gc_main_navigation">
                                            {/* <a href="#" className="gc_main_navigation hover_color">Services&nbsp;</a> */}
                                            <Link to="/services" className="gc_main_navigation hover_color">Services&nbsp;</Link>
                                            <ul>
                                                <li className="parent">
                                                    {/* <a href="services.html">Services</a> */}
                                                <Link to="/services" >Services</Link>
                                                </li>
                                                {/* <li className="parent"><a href="event.html">Events</a></li> */}
                                                <li className="parent">
                                                    {/* <a href="pricing.html">Pricing</a> */}
                                                    <Link to="/pricing" >Pricing</Link>
                                                    </li>
                                            </ul>
                                        </li>
                                        <li className="has-mega gc_main_navigation">
                                            <a href="#" className="gc_main_navigation hover_color">Doctors&nbsp;</a>
                                            <ul>
                                                <li className="parent"><a href="doctor.html">Doctor Single</a></li>
                                                <li className="parent"><a href="our_doctors.html">Our Doctors</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-mega gc_main_navigation">
                                            <a href="#" className="gc_main_navigation hover_color">Gallery&nbsp;</a>
                                            <ul>
                                                <li className="parent"><a href="gallery_2.html">Gallery 2</a></li>
                                                <li className="parent"><a href="gallery_3.html">Gallery 3</a></li>
                                                <li className="parent"><a href="gallery_4.html">Gallery 4</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-mega gc_main_navigation">
                                            <a href="#" className="gc_main_navigation hover_color">Blog&nbsp;</a>
                                            <ul>
                                                <li className="parent"><a href="blog_category.html">Blog Category</a></li>
                                                <li className="parent"><a href="blog_single.html">Blog Single</a></li>
                                            </ul>
                                        </li>
                                        <li className="has-mega gc_main_navigation">
                                            <a href="#" className="gc_main_navigation hover_color">Contact&nbsp;</a>
                                            <ul>
                                                <li className="parent"><a href="contact_us.html">Contact Us</a></li>
                                                <li className="parent"><a href="appointment.html">Appointment</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                {/* Main Menu End */}
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        <div className="rp_mobail_menu_main_wrapper d-block d-sm-block d-md-none d-lg-none d-xl-none">
                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="gc_logo logo_hidn d-block d-sm-block d-md-none d-lg-none d-xl-none">
                                        <a href="#"><img src="/images/logo/NCLOGO.png" width={100} height={50} className="img-responsive" alt="logo" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-6 d-block d-sm-block d-md-none d-lg-none d-xl-none">
                                    <div id="toggle">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 31.177 31.177" style={{ enableBackground: 'new 0 0 31.177 31.177' }} xmlSpace="preserve" width="25px" height="25px">
                                            <g>
                                                <path className="menubar" d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z" fill="#2ec8a6" />
                                                <path className="menubar" d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z" fill="#2ec8a6" />
                                                <path className="menubar" d="M30.23,16.477H0.946c-0.489,0-0.887-                                                0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z" fill="#2ec8a6" />
                                                <path className="menubar" d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z" fill="#2ec8a6" />
                                                <path className="menubar" d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z" fill="#2ec8a6" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar for Mobile Menu */}
                        <div id="sidebar">
                            <h1>NEVASE<span> HOSPITAL</span></h1>
                            <div id="toggle_close">&times;</div>
                            <div id='cssmenu' className="wd_single_index_menu">
                                <ul>
                                    <li>
                                        {/* <a href='#'>Home</a> */}
                                        <Link to="/" >Home</Link>
                                    </li>
                                    <li>
                                        {/* <a href="about_us.html">About Us</a> */}
                                        <Link to="/about" >About Us</Link>
                                        </li>
                                    <li className='has-sub'>
                                        {/* <a href='#'>Services</a> */}
                                        <Link to="/services" >Services</Link>
                                        <ul>
                                            <li>
                                                {/* <a href="services.html">Services</a> */}
                                                <Link to="/services" >Services</Link>
                                                </li>
                                            {/* <li><a href="event.html">Events</a></li> */}
                                            <li><a href="pricing.html">Pricing</a></li>
                                        </ul>
                                    </li>
                                    <li className='has-sub'><a href='#'>Doctors</a>
                                        <ul>
                                            <li><a href="doctor.html">Doctor Single</a></li>
                                            <li><a href="our_doctors.html">Our Doctors</a></li>
                                        </ul>
                                    </li>
                                    <li className='has-sub'><a href='#'>Gallery</a>
                                        <ul>
                                            <li><a href="gallery_2.html">Gallery 2</a></li>
                                            <li><a href="gallery_3.html">Gallery 3</a></li>
                                            <li><a href="gallery_4.html">Gallery 4</a></li>
                                        </ul>
                                    </li>
                                    <li className='has-sub'><a href='#'>Blog</a>
                                        <ul>
                                            <li><a href="blog_category.html">Blog Category</a></li>
                                            <li><a href="blog_single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li className='has-sub'><a href='#'>Contact</a>
                                        <ul>
                                            <li><a href="contact_us.html">Contact Us</a></li>
                                            <li><a href="appointment.html">Appointment</a></li>
                                        </ul>
                                    </li>
                                    {/* <li><a href="login_register.html">Log In / Sign Up</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;