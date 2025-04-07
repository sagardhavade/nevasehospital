import React from 'react';
// import './CounterSection.css'; // Import your CSS file if needed

const CounterSection = () => {
    return (
        <div className="counter_section">
            <div className="counter_overlay">
                <section className="counter-section section-padding" data-stellar-background-ratio="0.5">
                    <div className="container text-center">
                        <div className="row">
                            {counters.map((counter, index) => (
                                <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
                                    <div className="icon">
                                        <a href={counter.link}>
                                            <img src={counter.image} alt="img" className="img-responsive" />
                                        </a>
                                    </div>
                                    <div className="count-description">
                                        <span className="timer">{counter.count}</span>
                                        <h5 className={`con${index + 1}`}>{counter.description}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

const counters = [
    {
        count: 2340,
        description: "Satisfied Patients",
        image: "images/png/patient.png",
        link: "#"
    },
    {
        count: 335,
        description: "Doctor's Team",
        image: "images/png/doctor.png",
        link: "#"
    },
    {
        count: 1305,
        description: "Success Mission",
        image: "images/png/success.png",
        link: "#"
    },
    {
        count: 1540,
        description: "Successful Surgeries",
        image: "images/png/heart.png",
        link: "#"
    },
];

export default CounterSection;