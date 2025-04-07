// src/components/AboutUs.jsx
import React from 'react';
// import './AboutUs.css'; // Import any specific styles for the about us section

const AboutUs = () => {
    return (
        <>        <div className="category_wrapper">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="cat_about">
                        <div className="icon_wrapper">
                            <img src="/images/icon1.png" alt="Heart Surgery" className="img-responsive" />
                        </div>
                        <div className="cat_img">
                            <img src="/images/icon_11.png" alt="Heart Surgery" className="img-responsive" />
                        </div>
                        <div className="cat_txt">
                            <h1>Heart Surgery</h1>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.</p>
                            <a href="#">Read More <i className="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="cat_about">
                        <div className="icon_wrapper">
                            <img src="/images/icon2.png" alt="Emergency Care" className="img-responsive" />
                        </div>
                        <div className="cat_img">
                            <img src="/images/icon_2.png" alt="Emergency Care" className="img-responsive" />
                        </div>
                        <div className="cat_txt">
                            <h1>Emergency Care</h1>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.</p>
                            <a href="#">Read More <i className="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                    <div className="cat_about">
                        <div className="icon_wrapper">
                            <img src="/images/icon3.png" alt="Dental Care" className="img-responsive" />
                        </div>
                        <div className="cat_img cat_img_3">
                            <img src="/images/icon_3.png" alt="Dental Care" className="img-responsive" />
                        </div>
                        <div className="cat_txt">
                            <h1>Dental Care</h1>
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.</p>
                            <a href="#">Read More <i className="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div className="about_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="abt_img abt_box">
                            <img src="/images/abt_img.jpg" alt="About Us" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 abt_section">
                        <div className="abt_heading_wrapper">
                            <h1 className="med_bottompadder20">About Medical</h1>
                            <img src="/images/line.png" alt="title" className="med_bottompadder20" />
                        </div>
                        <div className="abt_txt">
                            <h3>Specialty Medicine with Compassion and Care</h3>
                            <p className="med_toppadder20">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
                            <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit.</p>
                        </div>
                        <div className="abt_chk med_toppadder30">
                            <div className="content">
                                <ul>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true"></i><span>Health Care For All Types</span></li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true"></i><span>Emergency Services</span></li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true"></i><span>Dental Care Dentist.</span></li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true"></i><span>24/7 Services</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
};

export default AboutUs;