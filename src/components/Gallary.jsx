import React, { useState } from "react";

const portfolioItems = [
  {
    imgSrc: "images/dc_galry_img_1.jpg",
    title: "Satisfied Patients",
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit.",
    category: "cancer",
  },
  {
    imgSrc: "images/dc_galry_img_2.jpg",
    title: "Satisfied Patients",
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit.",
    category: "implants",
  },
  {
    imgSrc: "images/dc_galry_img_3.jpg",
    title: "Satisfied Patients",
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit.",
    category: "whitening",
  },
  {
    imgSrc: "images/dc_galry_img_4.jpg",
    title: "Satisfied Patients",
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit.",
    category: "cancer",
  },
  {
    imgSrc: "images/dc_galry_img_5.jpg",
    title: "Satisfied Patients",
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit.",
    category: "implants",
  },
];

const PortfolioItem = ({ imgSrc, title, description }) => (
  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 portfolio-wrapper all business website photoshop">
    <div className="portfolio-thumb">
      <div className="port_img_wrapper">
        <img src={imgSrc} alt="filter_img" />
      </div>
      <div className="portfolio_icon_wrapper_3 zoom_popup">
        <a className="img-link" href={imgSrc}>
          <i className="fa fa-search-plus"></i>
        </a>
      </div>
      <div className="portfolio-content">
        <div className="portfolio-info_3">
          <h3>{title}</h3>
          <p className="d-none d-sm-none d-md-none d-lg-block">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

const Gallary = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(
        portfolioItems.filter((item) => item.category === category)
      );
    }
  };

  return (
    <section className="portfolio-area med_toppadder100">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <ul className="protfoli_filter gallerY_wrapper">
              <li
                className={activeCategory === ".all" ? "active" : ""}
                data-filter=".all"
                onClick={() => handleCategoryChange("all")}
              >
                All
              </li>
              <li
                className={activeCategory === "cancer" ? "active" : ""}
                data-filter=".business"
                onClick={() => handleCategoryChange("cancer")}
              >
                Cancer
              </li>
              <li
                className={activeCategory === "implants" ? "active" : ""}
                data-filter=".website"
                onClick={() => handleCategoryChange("implants")}
              >
                Implants
              </li>
              <li
                className={activeCategory === "whitening" ? "active" : ""}
                data-filter=".photoshop"
                onClick={() => handleCategoryChange("whitening")}
              >
                Whitening
              </li>
            </ul>
          </div>

          <div className="col-lg-12">
            <div className="row portfoli_inner">
              {filteredItems.map((item, index) => (
                <PortfolioItem
                  key={index}
                  imgSrc={item.imgSrc}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="text-center portfolio-btn gallerY_btn med_bottompadder100">
          <a href="#" className="btn">
            Load More
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Gallary;
