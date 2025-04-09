// src/ServiceAboutSection.jsx
import React from 'react';
// import './ServiceAboutSection.css'; // Import CSS if you have styles

const ServiceAboutSection = () => {
    return (
        <div className="ser_abt">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="ser_abt_img_resp">
                            <img src="images/service_abt.jpg" alt="Service About" className="img-responsive" />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 abt_section">
                        <div className="abt_txt abt_txt_resp">
                            <h3>Specialty Medicine with Compassion and Care</h3>
                            <p className="med_toppadder20">
                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
                            </p>
                            <p>
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit.
                            </p>
                        </div>
                        <div className="abt_chk med_toppadder30">
                            <div className="content">
                                <ul>
                                    {[
                                        "Health Care For All Types",
                                        "Emergency Services",
                                        "Cancer Care",
                                        "Specialty Medicines for All Types",
                                        "Dental Care Best Dentist",
                                        "Dalvictisdss Care Best Dentist",
                                        "Doctors Services",
                                        "24/7 Services"
                                    ].map((item, index) => (
                                        <li key={index}>
                                            <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceAboutSection;