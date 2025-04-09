import AboutServiceSection from "../components/about/AboutServiceSection";
import AboutTitleSection from "../components/about/AboutTitleSection";
import AboutUsSection from "../components/about/AboutUsSection";
import TopServiceSection from "../components/about/TopServiceSection";
import CounterSection from "../components/CounterSection";
import NewsletterSection from "../components/NewsletterSection";
import TestimonialSection from "../components/Testimonials";

const About = () => {
  return (
    <>
      <AboutTitleSection title="About Us" breadcrumbItem="About Us" />
      <AboutUsSection />
      <CounterSection />
      <AboutServiceSection />
      <TopServiceSection />
      <TestimonialSection />
      <NewsletterSection />
    </>
  );
};

export default About;
