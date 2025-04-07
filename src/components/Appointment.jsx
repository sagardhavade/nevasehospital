// src/components/Appointment.jsx
import React from 'react';
// import './Appointment.css'; // Import any specific styles for the appointment section

const Appointment = () => {
    return (
        <div className="container">
            <div className="appoint_wrapper">
                <div className="appoint_overlay"></div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 resp_apoint">
                        <div className="appoint_icon">
                            <img src="/images/Icon_clock.png" alt="img" className="img-responsive" />
                        </div>
                        <div className="appoint_box">
                            <h1 className="med_bottompadder30">Opening Hours</h1>
                            <p>Monday – Friday ---------------------------<span>09:00-17:00</span></p>
                            <p>Saturday --------------------------------------<span>09:30-17:00</span></p>
                            <p>Sunday ----------------------------------------<span>10:30-18:00</span></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 resp_apoint_1 d-none d-sm-none d-md-block">
                        <div className="appoint_box box_2">
                            <h1 className="med_bottompadder30">BOOK AN APPOINTMENT</h1>
                            <div className="appoint_form">
                                <ul>
                                    <li><a href="#">Email : hospital@example.com</a></li>
                                    <li>Fax : 1800 1245 1253</li>
                                </ul>
                            </div>
                            <h2><i className="flaticon-24-hours-phone-service"></i>
                                Emergency Call +1 800-123-132</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;