// src/components/Slider.jsx
import React from 'react';
const Slider = () => {
    // useEffect(() => {
    //     // Initialize Owl Carousel
    //     const $ = window.$; // Use jQuery
    //     $('.owl-carousel').owlCarousel({
    //         items: 1,
    //         loop: true,
    //         autoplay: true,
    //         autoplayTimeout: 5000,
    //         autoplayHoverPause: true,
    //         animateOut: 'fadeOut',
    //         animateIn: 'fadeIn',
    //     });
    // }, []);

    return (
        <div className="slider_main_wrapper">
            <div className="cc_slider_img_section">
                <div className="owl-carousel owl-theme">
                    <div className="item cc_main_slide1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12">
                                    <div className="cc_slider_cont1_wrapper">
                                        <div className="cc_slider_cont1">
                                            <div className="medi">
                                                <h1 data-animation-in="fadeInDown" data-animation-out="animate-out fadeOutDown">
                                                    medical<span>services</span>
                                                </h1>
                                            </div>
                                            <h2 data-animation-in="fadeInDown" data-animation-out="animate-out fadeOutDown">
                                                total health care solution
                                            </h2>
                                            <p data-animation-in="zoomIn" data-animation-out="animate-out zoomIn">
                                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibdum auctor, nisi elit consequat ipsum, nec sagittis sem.
                                            </p>
                                            <ul>
                                                <li data-animation-in="bounceInLeft" data-animation-out="animate-out bounceOutLeft">
                                                    <a href="#">READ MORE</a>
                                                </li>
                                                <li data-animation-in="bounceInLeft" data-animation-out="animate-out bounceOutLeft">
                                                    <a href="#">PURCHASE</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item cc_main_slide2">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12">
                                    <div className="cc_slider_cont1_wrapper">
                                        <div className="cc_slider_cont1">
                                            <div className="medi">
                                                <h1 data-animation-in="fadeInDown" data-animation-out="animate-out fadeOutDown">
                                                    medical<span>services</span>
                                                </h1>
                                            </div>
                                            <h2 data-animation-in="fadeInDown" data-animation-out="animate-out fadeOutDown">
                                                total health care solution
                                            </h2>
                                            <p data-animation-in="zoomIn" data-animation-out="animate-out zoomIn">
                                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibdum auctor, nisi elit consequat ipsum, nec sagittis sem.
                                            </p>
                                            <ul>
                                                <li data-animation-in="bounceInLeft" data-animation-out="animate-out bounceOutLeft">
                                                    <a href="#">READ MORE</a>
                                                </li>
                                                <li data-animation-in="bounceInLeft" data-animation-out="animate-out bounceOutLeft">
                                                    <a href="#">PURCHASE</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item cc_main_slide3">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 col-lg-7 col-md-12 col-sm-12 col-12">
                                    <div className="cc_slider_cont1_wrapper">
                                        <div className="cc_slider_cont1">
                                            <div className="medi">
                                                <h1 data-animation-in="fadeInDown" data-animation-out="animate-out fadeOutDown">
                                                    medical<span>services</span>
                                                </h1>
                                            </div>
                                            <h2 data-animation-in="fadeInDown" data-animation-out="animate-out fadeOutDown">
                                                total health care solution
                                            </h2>
                                            <p data-animation-in="zoomIn" data-animation-out="animate-out zoomIn">
                                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibdum auctor, nisi elit consequat ipsum, nec sagittis sem.
                                            </p>
                                            <ul>
                                                <li data-animation-in="bounceInLeft" data-animation-out="animate-out bounceOutLeft">
                                                    <a href="#">READ MORE</a>
                                                </li>
                                                <li data-animation-in="bounceInLeft" data-animation-out="animate-out bounceOutLeft">
                                                    <a href="#">PURCHASE</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;