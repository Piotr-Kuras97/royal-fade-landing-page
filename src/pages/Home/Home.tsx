import About from "../../components/sections/About/About"
import Contact from "../../components/sections/Contact/Contact"
import Gallery from "../../components/sections/Gallery/Gallery"
import Hero from "../../components/sections/Hero/Hero"
import Services from "../../components/sections/Services/Services"
import Testimonials from "../../components/sections/Testimonials/Testimonials"

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Home(){

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const targetSection = location.state?.targetSection;

        if (!targetSection) return;

        const element = document.querySelector(targetSection);
        element?.scrollIntoView({
            behavior: "smooth",
        });

        navigate(".", {
            replace: true,
            state: null,
        });
    }, [location.state]);
    return (
        <>



            <Hero />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <Contact />
        
        </>
    )
}

export default Home