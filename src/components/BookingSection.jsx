import React,{useEffect} from 'react';
// import './BookingSection.css'; // Import your CSS file if needed

const BookingSection = () => {
     useEffect(() => {
        // Load Google Maps script
        const loadScript = (src) => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.defer = true;
                script.onload = () => {
                    resolve();
                };
                document.body.appendChild(script);
            });
        };

        const initMap = () => {
            const uluru = { lat: -36.742775, lng: 174.731559 };
            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                scrollwheel: false,
                center: uluru,
            });
            new window.google.maps.Marker({
                position: uluru,
                map: map,
            });
        };

        loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBctr8WYTfFDi_oGbPEolSDzn4VZaAKVK0')
            .then(() => {
                initMap();
            });
    }, []);
(() => {
        // Load Google Maps script
        const loadScript = (src) => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = src;
                script.async = true;
                script.defer = true;
                script.onload = () => {
                    resolve();
                };
                document.body.appendChild(script);
            });
        };

        const initMap = () => {
            const uluru = { lat: -36.742775, lng: 174.731559 };
            const map = new window.google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                scrollwheel: false,
                center: uluru,
            });
            new window.google.maps.Marker({
                position: uluru,
                map: map,
            });
        };

        loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyBctr8WYTfFDi_oGbPEolSDzn4VZaAKVK0')
            .then(() => {
                initMap();
            });
    }, []);

    return (
        <div className="booking_wrapper med_toppadder100 med_bottompadder90">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                        <div className="team_heading_wrapper med_bottompadder50 wow fadeInDown" data-wow-delay="0.5s">
                            <h1 className="med_bottompadder20">Book appointment</h1>
                            <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                            <p>
                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                                <br />nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <form className="booking_box">
                    <div className="box_side_icon">
                        <img src="images/Icon_bk.png" alt="img" />
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contect_form1">
                                    <input type="text" name="full_name" placeholder="Full Name" className="require" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contect_form1">
                                    <input type="text" name="email" placeholder="Email" className="require" data-valid="email" data-error="Email should be valid." />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contect_form1">
                                    <input type="text" name="contact_no" placeholder="Phone" className="require" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contect_form1">
                                    <input type="text" name="subject" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contect_form3">
                                    <input type="text" name="date" placeholder="Date" className="require" />
                                    <i className="fa fa-calendar-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contect_form3">
                                    <input type="text" name="time" placeholder="Time" className="require" />
                                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="contect_form4">
                                    <textarea rows="4" name="message" placeholder="Message" className="require"></textarea>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="response"></div>
                                <div className="contect_btn">
                                    <button type="button" className="submitForm">Send a Message</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

                <div className="chat_box">
                <div className="booking_box_2">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="booking_box_img">
                                    <img src="images/booking_call.png" alt="img" className="img-circle" />
                                </div>
                                <div className="booking_chat">
                                    <h1>+1 800 383 88 90</h1>
                                    <p>If urgent. Your personal case manager will ensure that you receive the best possible care.</p>
                                </div>
                                <div className="booking_btn">
                                    <ul>
                                        {/* <li><a href="#">LIVE CHAT</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map_main_wrapper">
                <div id="map" style={{ width: '100%', float: 'left', height: '600px' }}></div>
            </div>
        </div>
    );
};

export default BookingSection;