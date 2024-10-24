import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface WhyUsProps {
    isWhiteText: boolean;
}

export default function WhyUs({ isWhiteText }: WhyUsProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isColourActive, setIsColourActive] = useState<Boolean[]>(Array(5).fill(false));

    const paragraph = [
        "we capture your visions",
        `\u00A0\u00A0\u00A0 we conjure its essence \u2003\u2003\u2003\u00A0\u00A0we elevate it`,
        "we enhance it with digital\u2003\u00A0sorcery",
        "\u2003and we \u2003\u2003\u00A0transform it",
        "into reality"
    ];

    const handleScroll = () => {
        if (!ref.current) return;

        const windowHeight = window.innerHeight;
        const midPoint = windowHeight / 2;
        const scrollPosition = window.scrollY;

        const newActiveColour = [...isColourActive];

        Array.from(ref.current.children).forEach((child, index) => {
            const topMidPoint = (child as HTMLElement).getBoundingClientRect().top;

            if (topMidPoint < midPoint) {
                newActiveColour[index] = true;
            } else {
                newActiveColour[index] = false;
            }
        });

        if (scrollPosition < 50) {
            setIsColourActive(Array(5).fill(false));
        } else {
            setIsColourActive(newActiveColour);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isColourActive]);

    const getTextAlignmentClass = (index: number) => {
        switch (index) {
            case 0:
                return "text-center";
            case 1:
                return "text-center";
            case 2:
                return "text-center";
            case 3:
                return "text-center";
            case 4:
                return "text-center";
            default:
                return "text-start";
        }
    };

    return (
        <div id="why-us-section" className="flex flex-col justify-between relative z-30 pt-20 md:pt-44 bg-stone-100">
            <div ref={ref}>
                {paragraph.map((text, index) => (
                    <motion.div
                        key={index}
                        initial={{ color: '#737373', backgroundColor: '#f5f5f4' }}
                        animate={
                            isColourActive[index]
                                ? {
                                    color: isWhiteText ? '#ffffff' : '#000000',
                                    backgroundColor: isWhiteText ? '#000000' : '#f5f5f4'
                                }
                                : { color: '#737373' }
                        }
                        transition={{ duration: 0.2 }}
                        className={`md:text-5xl font-semibold pb-2 md:pb-8 md:px-28 ${getTextAlignmentClass(index)}`}
                    >
                        {text}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
