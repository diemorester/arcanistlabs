import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isAfterWhyUs, setIsAfterWhyUs] = useState<boolean>(false);

    const handleClose = (): void => setIsMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroSection = document.getElementById("hero-section");
            const aboutUsSection = document.getElementById("about-us-section");
            const whatWeDoSection = document.getElementById("what-we-do-section");

            if (heroSection && aboutUsSection && whatWeDoSection) {
                const buffer = 35;
                const heroSectionBottom = heroSection.offsetTop + heroSection.offsetHeight - buffer;
                const aboutUsSectionTop = aboutUsSection.offsetTop - buffer;
                const whatWeDoSectionBottom = whatWeDoSection.offsetTop + whatWeDoSection.offsetHeight - buffer;

                if (window.scrollY >= whatWeDoSectionBottom) {
                    setIsAfterWhyUs(false);
                    setIsScrolled(true);
                } else if (window.scrollY > aboutUsSectionTop - 150) {
                    setIsAfterWhyUs(true);
                    setIsScrolled(false);
                } else if (window.scrollY > heroSectionBottom) {
                    setIsScrolled(true);
                    setIsAfterWhyUs(false);
                } else {
                    setIsScrolled(false);
                    setIsAfterWhyUs(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isMenuOpen]);

    return (
        <div className="fixed w-full z-50 top-0 left-0">
            <div className={`flex justify-between p-3 md:px-10 md:py-5 transition-colors ease-in-out duration-200 
                ${isAfterWhyUs ? "text-white" : isScrolled ? "text-black" : "text-white"}`}>
                <div className="z-50 transition-transform ease-in-out" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {!isMenuOpen ? (
                        <button aria-label="open">
                            <HiMenuAlt2 size={35} fill={isAfterWhyUs ? "white" : isScrolled ? "black" : "white"} />
                        </button>
                    ) : (
                        <button aria-label="close">
                            <MdOutlineClose size={35} fill="black" />
                        </button>
                    )}
                </div>
                <a href="#hero-section">
                    <div className={`font-bold md:text-3xl ${isMenuOpen ? 'hidden' : 'visible'}`}>
                        // ArcanistLabs
                    </div>
                </a>
            </div>
            <div className={`transition-all bg-stone-200 ease-in-out duration-500 fixed inset-0 z-40 ${isMenuOpen ? 'w-full h-full' : 'h-0 overflow-hidden'}`}>
                <div className={`flex flex-col justify-end gap-6 md:text-3xl p-20 font-bold absolute w-full h-full transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div>
                        <a href="#hero-section" className="hover:text-neutral-500" onClick={handleClose}>HOME</a>
                    </div>
                    <div>
                        <a href="#why-us-section" className="hover:text-neutral-500" onClick={handleClose}>ABOUT</a>
                    </div>
                    <div>
                        <a href="#about-us-section" className="hover:text-neutral-500" onClick={handleClose}>FEATURES</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
