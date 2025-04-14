import AboutTitleSection from "../components/about/AboutTitleSection";
import Contact from "../components/Contact";
import Map from "../components/Map";
const ContactPage = () =>{
    return(<>
    <AboutTitleSection title={"Contact"} breadcrumbItem={"Contact"} />
    <Contact />
    <Map />
    </>);
}

export default ContactPage;