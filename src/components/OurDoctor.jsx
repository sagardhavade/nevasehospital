import React from 'react';

const specialists = [
    { name: "Dr. Johan Doe", specialty: "Hepatologist", imgSrc: "images/team_1.jpg" },
    { name: "Dr. Jane Smith", specialty: "Cardiologist", imgSrc: "images/team_2.jpg" },
    { name: "Dr. Emily Johnson", specialty: "Neurologist", imgSrc: "images/team_3.jpg" },
    { name: "Dr. Michael Brown", specialty: "Ophthalmologist", imgSrc: "images/team_4.jpg" },
    { name: "Dr. Sarah Davis", specialty: "Oncologist", imgSrc: "images/team_5.jpg" },
    { name: "Dr. David Wilson", specialty: "Dermatologist", imgSrc: "images/team_6.jpg" },
];

const SpecialistCard = ({ name, specialty, imgSrc }) => (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 portfolio-wrapper all business website photoshop">
        <div className="team_about our_doc_main dc_porftolio_img">
            <div className="team_icon_wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 300.346 300.346" width="40px" height="40px">
                    <g>
                        <path d="M296.724,157.793c-3.611-5.821-9.552-9.841-16.299-11.03c-6.746-1.188-13.703,0.559-19.139,4.836l-21.379,17.126c-3.533-3.749-8.209-6.31-13.359-7.218c-6.749-1.189-13.704,0.559-19.1,4.805l-12.552,9.921H162.66c-5.152,0-10.301-1.238-14.891-3.579l-11.486-5.861c-9.678-4.938-20.532-7.328-31.385-6.908c-15.046,0.579-29.448,6.497-40.554,16.666l-61.89,56.667c-2.901,2.656-3.28,7.093-0.873,10.203l32.406,41.867c1.481,1.913,3.714,2.933,5.983,2.933c1.374,0,2.762-0.374,4.003-1.151L82.944,262.7c2.777-1.736,5.975-2.654,9.25-2.654h90.428c12.842,0,25.446-4.407,35.489-12.409l73.145-58.281C300.815,181.745,303.166,168.176,296.724,157.793z" fill="#FFFFFF" />
                        <path d="M161.7,132.383c13.183,0,25.302-6.625,32.418-17.722c7.117-11.097,8.082-24.875,2.581-36.855L168.57,16.531
                                                c-1.232-2.685-3.916-4.406-6.87-4.406s-5.638,1.721-6.87,4.406l-28.129,61.274c-5.5,11.981-4.535,25.759,2.581,36.855
                                                C136.398,125.757,148.517,132.383,161.7,132.383z M140.441,84.114L161.7,37.807l21.258,46.307
                                                c3.341,7.277,2.754,15.645-1.568,22.385c-4.323,6.74-11.683,10.764-19.69,10.764c-8.007,0-15.368-4.024-19.69-10.765
                                                C137.687,99.759,137.101,91.391,140.441,84.114z" fill="#FFFFFF" />
                                                                   
                    </g>
                </svg>
            </div>
            <div className="team_img special_team_img_mn">
                <img src={imgSrc} alt="img" className="img-responsive" />
            </div>
            <div className="team_txt">
                <h1><a href="#">{name}</a></h1>
                <p>({specialty})</p>
            </div>
            <div className="team_icon_hover">
                <ul>
                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
);

const OurDoctor = () => {
    return (
        <div className="portfolio_section med_toppadder100 med_bottompadder70">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                        <div className="team_heading_wrapper med_bottompadder40">
                            <h1 className="med_bottompadder20">MEET OUR SPECIALISTS</h1>
                            <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                            <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum,
                                <br /> nec sagittis sem nibh id elit. Duis sed odio sit sagittis sem nibh id elit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portfolio-area">
                <div className="container">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <ul className="protfoli_filter ">
                            <li className="active" data-filter=".all"><a href="#"> All</a></li>

                            <li data-filter=".business"><a href="#">dental</a></li>
                            <li data-filter=".website"><a href="#">brain</a></li>
                            <li className="d-none d-sm-none d-md-none d-lg-block" data-filter=".surgery"><a href="#">physicit</a></li>
                            <li data-filter=".photoshop"><a href="#">eye</a></li>
                            <li data-filter=".heart"><a href="#">heart</a></li>
                            <li className="d-none d-sm-none d-md-none d-lg-block" data-filter=".logo"><a href="#">cancer</a></li>
                            <li data-filter=".hair"><a href="#">hair</a></li>

                        </ul>
                    </div>

                    <div className="col-lg-12">
                        <div className="row portfoli_inner">
                            {specialists.map((specialist, index) => (
                                <SpecialistCard key={index} name={specialist.name} specialty={specialist.specialty} imgSrc={specialist.imgSrc} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurDoctor;