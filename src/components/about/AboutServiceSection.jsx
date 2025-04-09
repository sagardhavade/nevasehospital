// src/AboutServiceSection.jsx
import React from 'react';
// import './AboutServiceSection.css'; // Import CSS if you have styles

const AboutServiceSection = () => {
    return (
        <div className="abt_service_section med_toppadder100">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
                        <div className="team_heading_wrapper med_bottompadder50">
                            <h1 className="med_bottompadder20">We Give You the Best</h1>
                            <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                            <p>
                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor,
                                <br /> nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="abt_left_section med_bottompadder20">
                            <img src="images/abt_img_bg.jpg" alt="img" className="img-responsive" />
                        </div>
                        <div className="abt_txt">
                            <p>
                                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate.
                            </p>
                            <p className="med_toppadder10">
                                Aenean nit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Dui Duis sed odio sit.
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="sidebar_wrapper sidebar_right_abt">
                            <div className="accordionFifteen">
                                <div className="panel-group" id="accordionFifteenLeft" role="tablist">
                                    {[
                                        {
                                            id: "collapseEightLeftone",
                                            title: "Global Health Specialists",
                                            content: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate..",
                                            isActive: true
                                        },
                                        {
                                            id: "collapseEightLefttwo",
                                            title: "Who has access to my Health Records",
                                            content: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate.."
                                        },
                                        {
                                            id: "collapseEightLeftthree",
                                            title: "Obstetrics & Gynecology Hospital",
                                            content: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate.."
                                        },
                                        {
                                            id: "collapseEightLeftfour",
                                            title: "Obstetrics & Gynecology Hospital",
                                            content: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate.."
                                        },
                                        {
                                            id: "collapseEightLeftfive",
                                            title: "Oral & Maxillofacial Surgery in Hospital",
                                            content: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate.."
                                        },
                                        {
                                            id: "collapseEightLeftsix",
                                            title: "Obstetrics & Gynecology Hospital",
                                            content: "Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, aks lorem quis bibendum auctor, nisi elit c nibh vulputate.."
                                        }
                                    ].map((item, index) => (
                                        <div className="panel panel-default sidebar_pannel" key={index}>
                                            <div className="panel-heading">
                                                <h4 className="panel-title">
                                                    <a className={item.isActive ? "collapsed active" : "collapsed"} data-toggle="collapse" href={`#${item.id}`} aria-expanded={item.isActive}>
                                                        - {item.title}
                                                    </a>
                                                </h4>
                                            </div>
                                            <div id={item.id} className={`panel-collapse collapse ${item.isActive ? 'show' : ''}`} data-parent="#accordionFifteenLeft" aria-expanded={item.isActive} role="tabpanel">
                                                <div className="panel-body">
                                                    <div className="panel_cont">
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* End of /.panel-group */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutServiceSection;