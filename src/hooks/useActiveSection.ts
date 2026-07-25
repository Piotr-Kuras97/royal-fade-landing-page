import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useActiveSection = (): string => {
    const [activeSection, setActiveSection] = useState("hero");
    const location = useLocation();

    useEffect(() => {

        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                        console.log(entry.target.id);
                    }
                });

            },
            {
                rootMargin: "-80px 0px -40% 0px",
                threshold: 0
            }
        );


        sections.forEach((section) => observer.observe(section));
        return () => {
            observer.disconnect();
        };    
    }, [location.pathname]);

    return activeSection;
};



export default useActiveSection;