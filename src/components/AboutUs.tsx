import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import WhyUs from "./WhyUs";

export default function AboutUs() {
    const [isWhiteText, setIsWhiteText] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const aboutUsSection = document.getElementById("about-us-section");

            if (aboutUsSection) {
                const midPoint = window.innerHeight / 4;
                const aboutUsTop = aboutUsSection.getBoundingClientRect().top;

                if (aboutUsTop <= midPoint) {
                    setIsWhiteText(true);
                } else {
                    setIsWhiteText(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="">
            <div>
                <WhyUs isWhiteText={isWhiteText} />
            </div>
            <motion.div
                id="about-us-section"
                animate={{
                    backgroundColor: isWhiteText ? "#000000" : "#f5f5f4",
                    color: isWhiteText ? "#ffffff" : "#000000",
                }}
                initial={{
                    backgroundColor: "#f5f5f4",
                    color: "#000000",
                }}
                transition={{ duration: 0.2 }}
                className="min-h-screen relative z-20 md:p-11"
            >
                <div className="text-5xl md:text-9xl font-bold px-6 text-end absolute z-20 md:right-12 bottom-1/2 md:bottom-1/4">
                    // Features
                </div>
            </motion.div>
        </div>
    );
}
