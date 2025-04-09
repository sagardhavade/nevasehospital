import AboutUs from "../components/About"; // Import the About Us component
import Appointment from "../components/Appointment"; // Import the Appointment component
import Team from "../components/Team"; // Import the Team component
import VideoWrapper from "../components/VideoWrapper";
import CounterSection from "../components/CounterSection";
import TestimonialSection from "../components/Testimonials";
import BookingSection from "../components/BookingSection";
import Slider from "../components/Slider"; // Import the Slider component
import Header from "../components/Header";
import NewsletterSection from "../components/NewsletterSection";
const Home = () => {
  return (
    <>
    {/* <Header /> */}
      <Slider /> 
      <AboutUs /> 
      <Appointment /> {/* Use the Appointment component here */}
      <Team />
      <VideoWrapper />
      {/* Use the Team component here */}
      <CounterSection />
      <TestimonialSection />
      <BookingSection />
      <NewsletterSection />
    </>
  );
};

export default Home;
