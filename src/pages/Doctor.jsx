import AboutTitleSection from "../components/about/AboutTitleSection";
import NewsletterSection from "../components/NewsletterSection";
import OurDoctor from "../components/OurDoctor"

const Doctor = () =>{
    return(
        <>
        <AboutTitleSection title="Our Doctors" breadcrumbItem="Doctor" />
        <OurDoctor />
        <NewsletterSection />
        </>
    )
    
}
export default Doctor;