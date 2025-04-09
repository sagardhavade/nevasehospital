// src/ServiceSection.jsx
import React from 'react';
// import './ServiceSection.css'; // Import CSS if you have styles

const services = [
    {
        title: "Heart Surgery",
        description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.",
        icon: "images/icon1.png",
        img: "images/icon_11.png",
    },
    {
        title: "Emergency Care",
        description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.",
        icon: "images/icon2.png",
        img: "images/icon_2.png",
    },
    {
        title: "Dental Care",
        description: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin at the good health for you.",
        icon: "images/icon3.png",
        img: "images/icon_3.png",
    },
];

const ServiceSection = () => {
    return (
        <div className="team_wrapper med_toppadder100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                        <div className="team_heading_wrapper med_bottompadder40">
                            <h1 className="med_bottompadder20">MOST POPULAR SERVICES</h1>
                            <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                            <p>
                                Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                                <br /> nec sagittis sem nibh id elit. Duis sed odio sit sagittis sem nibh id elit.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="ser_slider_wrapper">
                            <div className="owl-carousel owl-theme">
                                {services.map((service, index) => (
                                    <div className="item" key={index}>
                                        <div className="row">
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="cat_about ser_section">
                                                    <div className="icon_wrapper">
                                                        <img src={service.icon} alt={service.title} className="img-responsive" />
                                                    </div>
                                                    <div className="cat_img">
                                                        <img src={service.img} alt={service.title} className="img-responsive" />
                                                    </div>
                                                    <div className="cat_txt">
                                                        <h1>{service.title}</h1>
                                                        <p>{service.description}</p>
                                                        <a href="#">Read More <i className="fa fa-long-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;