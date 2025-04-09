import AboutTitleSection from "../components/about/AboutTitleSection";
import TopServiceSection from "../components/about/TopServiceSection";
import NewsletterSection from "../components/NewsletterSection";
import PricingTableSection from "../components/services/PricingTableSection";
import ServiceAboutSection from "../components/services/ServiceAboutSection";
import ServiceSection from "../components/services/ServiceSection";

const Pricing = () => {
  return (
    <>
      <AboutTitleSection title="Pricing Table" breadcrumbItem="Pricing" />
      <PricingTableSection />
      
      <NewsletterSection />
    </>
  );
};

export default  Pricing;