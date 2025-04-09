// src/NewsletterSection.jsx
import React from 'react';
// import './NewsletterSection.css'; // Import CSS if you have styles

const NewsletterSection = () => {
    return (
        <div className="newsletter_wrapper med_toppadder80 med_bottompadder70">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-12">
                        <div className="newsletter_text wow fadeOut" data-wow-delay="0.5s">
                            <h3>Your First Step Towards Oral Health For Life Starts Here:</h3>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-6 col-6">
                        <div className="contect_btn_news">
                            <ul>
                                <li><a href="#">Enquiry</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;