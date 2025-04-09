// src/AboutTitleSection.jsx
import React from 'react';

const AboutTitleSection = ({ title, breadcrumbItem }) => {
    return (
        <div className="med_tittle_section">
            <div className="med_img_overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="med_tittle_cont_wrapper">
                            <div className="med_tittle_cont">
                                <h1>{title}</h1>
                                <ol className="breadcrumb">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>{breadcrumbItem}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTitleSection;