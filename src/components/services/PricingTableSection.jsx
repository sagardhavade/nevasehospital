// src/PricingTableSection.jsx
import React from 'react';
// import './PricingTableSection.css'; // Import CSS if you have styles

const pricingPlans = [
    {
        title: "BASIC Plan",
        price: 4600,
        features: [
            "3 departments",
            "20 tests",
            "16 emergency",
            "No medical assistance",
            "No home visiting",
            "20 consultations"
        ]
    },
    {
        title: "STANDARD Plan",
        price: 6600,
        features: [
            "5 departments",
            "30 tests",
            "20 emergency",
            "Medical assistance included",
            "Home visiting available",
            "30 consultations"
        ]
    },
    {
        title: "PREMIUM Plan",
        price: 8600,
        features: [
            "Unlimited departments",
            "Unlimited tests",
            "Unlimited emergency",
            "24/7 medical assistance",
            "Home visiting included",
            "Unlimited consultations"
        ]
    }
];

const PricingTableSection = () => {
    return (
        <div className="pricing_section med_toppadder100 med_bottompadder100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                        <div className="team_heading_wrapper med_bottompadder50">
                            <h1 className="med_bottompadder20">Pricing Table</h1>
                            <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                            <p>
                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                                <br /> nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
                            </p>
                        </div>
                    </div>
                    {pricingPlans.map((plan, index) => (
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12" key={index}>
                            <div className="pricing_box1_wrapper">
                                <div className="box1_heading_wrapper">
                                    <h1>{plan.title}</h1>
                                </div>
                                <div className="price_box1_wrapper">
                                    <div className="price_box1">
                                        <h1><sub>₹</sub><span>{plan.price}</span></h1>
                                        <p>/ per Month</p>
                                    </div>
                                </div>
                                <div className="pricing_cont_wrapper">
                                    <h1>Features</h1>
                                    <div className="pricing_cont">
                                        <ul>
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing_btn_wrapper">
                                    <div className="pricing_btn">
                                        <ul>
                                            <li><a href="#">Order Now</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 med_toppadder70">
                        <div className="choose_heading_wrapper additional_info">
                            <h1 className="med_bottompadder20">Additional Information:</h1>
                            <img src="images/line.png" alt="line" className="med_bottompadder20" />
                            <p>
                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
                                <br /> Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingTableSection;