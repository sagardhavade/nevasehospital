import React from 'react';

const Contact = () => {
    return (
        <div className="contact_us_section med_toppadder100 med_bottompadder70">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="choose_heading_wrapper med_bottompadder30">
                            <h1 className="med_bottompadder20">Contact us</h1>
                            <img src="images/line.png" alt="title" className="med_bottompadder20" />
                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.</p>
                        </div>

                        <form>
                            <div className="cont_main_section">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form1 dc_cont_div">
                                            <input type="text" name="full_name" placeholder="Full Name" className="require" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form1 dc_cont_div">
                                            <input type="text" name="email" placeholder="Email" className="require" data-valid="email" data-error="Email should be valid." />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form1 dc_cont_div">
                                            <input type="text" name="contact_no" placeholder="Phone" className="require" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="contect_form1 dc_cont_div">
                                            <input type="text" name="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div className="contect_form4 dc_cont_div">
                                            <textarea rows="5" name="message" placeholder="Message" className="require"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="response"></div>
                                        <div className="contact_btn_wrapper med_toppadder30">
                                            <button type="button" className="submitForm">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;