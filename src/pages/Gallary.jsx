import AboutTitleSection from "../components/about/AboutTitleSection";
import Gallary1 from "../components/Gallary";
import NewsletterSection from "../components/NewsletterSection";

const Gallary  = () =>{
    return(
        <>
        <AboutTitleSection title={"Our Gallery"} breadcrumbItem={"Gallery"} />
        <Gallary1 />
        <NewsletterSection />
        </>
    )
}

export default Gallary;