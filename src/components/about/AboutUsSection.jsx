// src/AboutUsSection.jsx
import React from 'react';
// import './AboutUsSection.css'; // Optional: Import CSS if you have styles

const AboutUsSection = () => {
    return (
        <div className="about_us_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about_img">
                            <img src="images/about_us_bg.jpg" alt="About Us" className="img-responsive" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 med_toppadder70">
                        <div className="abt_heading_wrapper abt_2_heading">
                            <h1 className="med_bottompadder20">About Medical</h1>
                            <img src="images/line.png" alt="title" className="med_bottompadder20" />
                        </div>
                        <div className="abt_txt">
                            <h3>Specialty Medicine with Compassion and Care</h3>
                            <p className="med_toppadder20">
                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi el ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
                            </p>
                        </div>
                        <div className="abt_chk med_toppadder30">
                            <div className="content">
                                <ul>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true"></i><span>Health Care For All Types</span></li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true"></i><span>Emergency Services</span></li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true"></i><span>Dental Care Dentist</span></li>
                                    <li><i className="fa fa-check-square-o" aria-hidden="true"></i><span>24/7 Services</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="abt_heading_wrapper abt_2_heading_mn">
                            <h1 className="med_bottompadder20">Our Mission</h1>
                            <img src="images/line.png" alt="title" className="med_bottompadder20" />
                        </div>
                        <div className="abt_txt">
                            <p className="med_toppadder20">
                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit consequat ipsum ipsum, nec sagittis sem nibh id elit. Duis sed odio sit.
                            </p>
                            <p className="med_toppadder10">
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum ipsum, nec sagittis sem nibh id elit. Duis sed odio sit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;