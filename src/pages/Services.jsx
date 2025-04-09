import AboutTitleSection from "../components/about/AboutTitleSection";
import TopServiceSection from "../components/about/TopServiceSection";
import NewsletterSection from "../components/NewsletterSection";
import ServiceAboutSection from "../components/services/ServiceAboutSection";
import ServiceSection from "../components/services/ServiceSection";

const About = () => {
  return (
    <>
      <AboutTitleSection title="Our Services" breadcrumbItem="Services" />
      <ServiceSection />
      <ServiceAboutSection />
      
      <TopServiceSection />
      
      <NewsletterSection />
    </>
  );
};

export default About;
