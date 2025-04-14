import React,{useEffect} from 'react';
// import './TestimonialSection.css'; // Import your CSS file if needed

const TestimonialSection = () => {
    
     useEffect(() => {
            // Initialize Owl Carousel
            const $ = window.$; // Use jQuery
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                navText: [
                            "<i class='fa fa-angle-right'></i>",
                            "<i class='fa fa-angle-left'></i>",
                          ],
            });
        }, []);
    return (
        <div className="testimonial_wrapper med_toppadder100">
            <div className="test_overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="test_heading_wrapper">
                            <h1 className="med_bottompadder20">What Patients Are Saying</h1>
                            <img src="images/line.png" alt="title" className="med_bottompadder60" />
                        </div>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="test_slider_wrapper">
                            <div className="owl-carousel owl-theme">
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className="item">
                                        <div className="t_icon_wrapper">
                                            <div className="t_client_cont_wrapper2">
                                                <p>{testimonial.quote}</p>
                                                <div className="client_img_abt">
                                                    <img className="img-circle" src={testimonial.image} alt="img" style={{ width: '90px', height: '90px' }} />
                                                    <h5>- {testimonial.name}</h5>
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

const testimonials = [
    {
        quote: "“ Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat. ”",
        name: "Aditi Suryavanshi",
        image: "images/test_img_1.png"
    },
    {
        quote: "“ Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat. ”",
        name: "Aditi Suryavanshi",
        image: "images/test_img_1.png"
    },
    {
        quote: "“ Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat. ”",
        name: "Aditi Suryavanshi",
        image: "images/test_img_1.png"
    },
];

export default TestimonialSection;