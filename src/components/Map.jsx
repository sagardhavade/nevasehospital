import React from 'react';

const Map = () => {
    return (
        <div className="category_wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="cat_about cont_cat_abt">
                            <div className="icon_wrapper dc_icon_section">
                                <img src="images/icon_map.png" alt="Location Icon" className="img-responsive" />
                            </div>
                            <div className="cat_txt cont_cat_txt">
                                <h1>22, margatnet. 2022</h1>
                                <p>Marylebone, London</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="cat_about cont_cat_abt">
                            <div className="icon_wrapper dc_icon_section">
                                <img src="images/icon_call.png" alt="Call Icon" className="img-responsive" />
                            </div>
                            <div className="cat_txt cont_cat_txt">
                                <h1>+1800 1256-12365</h1>
                                <p>Mon-Fri 8:30am - 9:30pm</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="cat_about cont_cat_abt">
                            <div className="icon_wrapper dc_icon_section">
                                <img src="images/icon_envelope.png" alt="Email Icon" className="img-responsive" />
                            </div>
                            <div className="cat_txt cont_cat_txt cont_last_child">
                                <a href="mailto:dummy@example.com"><h1>dummy@example.com</h1></a>
                                <p>24/7 online help support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="map_main_wrapper cont_dc_map">
                <div id="map" style={{ width: '100%', float: 'left', height: '600px' }}></div>
            </div>
        </div>
    );
};

export default Map;