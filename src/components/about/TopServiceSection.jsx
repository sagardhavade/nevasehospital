// src/TopServiceSection.jsx
import React from 'react';
// import './TopServiceSection.css'; // Import CSS if you have styles

const TopServiceSection = () => {
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

    return (
        <div className="top_service_wrapper">
            <div className="top_serv_overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                            <div className="team_heading_wrapper med_bottompadder50 wow fadeInDown" data-wow-delay="0.3s">
                                <h1 className="med_bottompadder20">We Provide Top Services</h1>
                                <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                            </div>
                        </div>
                        {services.map((service, index) => (
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" key={index}>
                                <div className="cat_about top_serv_txt">
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopServiceSection;