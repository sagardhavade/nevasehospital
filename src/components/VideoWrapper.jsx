import React from 'react';
import '../styles/VideoWrapper.css'; // Ensure the path is correct

const VideoWrapper = () => {
    return (
        <div className="vedio_wrapper">
            <div className="vedio_overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="vedio_heading_wrapper wow fadeInDown" data-wow-delay="0.5s">
                            <h1 className="med_bottompadder20">Welcome to Hospital</h1>
                            <img src="images/Icon_team.png" alt="line" className="med_bottompadder20" />
                            <p>We Care about everything what you want</p>
                            <h4>
                                <a className="popup-youtube" href="https://www.youtube.com/embed/xImpyYRVGOc">
                                    <img src="images/Play-Icon.png" alt="Play" /> play video
                                </a>
                            </h4>
                            <div className="video_btn_wrapper right">
                                <ul>
                                    <li><a className="btn" href="#">About Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoWrapper;