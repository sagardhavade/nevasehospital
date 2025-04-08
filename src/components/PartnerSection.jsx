import React, { useEffect } from 'react';
// import $ from 'jquery';
// import 'owl.carousel';

const PartnerWrapper = () => {
    useEffect(() => {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
        
            responsive: {
                0: {
                    items: 1 // 1 item for mobile
                },
                768: {
                    items: 3 // 3 items for tablets
                },
                1200: {
                    items: 4 // 4 items for larger screens
                }
            }
        });
    }, []);

    return (
        <div className="partner_wrapper med_bottompadder80">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="partner_slider_img">
                            <div className="owl-carousel owl-theme">
                                <div className="item">
                                    <img src="images/partner_1.png" className="img-responsive" alt="partner_img" />
                                </div>
                                <div className="item">
                                    <img src="images/partner_2.png" className="img-responsive" alt="partner_img" />
                                </div>
                                <div className="item">
                                    <img src="images/partner_3.png" className="img-responsive" alt="partner_img" />
                                </div>
                                <div className="item">
                                    <img src="images/partner_4.png" className="img-responsive" alt="partner_img" />
                                </div>
                                <div className="item">
                                    <img src="images/partner_5.png" className="img-responsive" alt="partner_img" />
                                </div>
                                <div className="item">
                                    <img src="images/partner_6.png" className="img-responsive" alt="partner_img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerWrapper;