import React from 'react';
// import './PartnerSection.css'; // Import your CSS file if needed

const PartnerSection = () => {
    return (
        <div className="partner_wrapper med_bottompadder80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="partner_slider_img">
                            <div className="owl-carousel owl-theme">
                                {partners.map((partner, index) => (
                                    <div key={index} className="item">
                                        <img src={partner.image} className="img-responsive" width={170} height={100} alt="story_img" />
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

const partners = [
    { image: "images/partner_1.png" },
    { image: "images/partner_2.png" },
    { image: "images/partner_3.png" },
    { image: "images/partner_4.png" },
    { image: "images/partner_5.png" },
    { image: "images/partner_6.png" },
];

export default PartnerSection;