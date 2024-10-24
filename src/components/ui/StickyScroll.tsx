import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const backgroundColors = [
        "var(--black)",
        "var(--neutral-900)",
        "var(--stone-800)",
        "var(--black)",
    ];
    const linearGradients = [
        "linear-gradient(to bottom right, var(--white), var(--white))",
        "linear-gradient(to bottom right, var(--white), var(--white))",
        "linear-gradient(to bottom right, var(--white), var(--white))",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0]
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1) {
                            setActiveCard(index);
                        }
                    }
                });
            },
            {
                root: null,
                threshold: 1,
            }
        );

        cardRefs.current.forEach((card) => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            cardRefs.current.forEach((card) => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []);

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="h-auto flex justify-around relative px-6"
            ref={ref}
        >
            <div className="relative flex items-start md:pt-[180px]">
                <div className="max-w-2xl">
                    {content.map((item, index) => (
                        <div
                            key={item.title + index}
                            className=""
                            ref={(el) => (cardRefs.current[index] = el)}
                        >
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-2xl font-bold pb-10 text-white"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                }}
                                className="text-lg text-slate-300 max-w-sm mb-96"
                            >
                                {item.description}
                            </motion.p>
                        </div>
                    ))}
                    <div className="md:h-[90px]" />
                </div>
            </div>
            <div
                style={{ background: backgroundGradient }}
                className={cn(
                    "hidden lg:block h-[400px] w-[586px] bg-white sticky md:mt-16 mb-96 top-[25%]",
                    contentClassName
                )}
            >
                {content[activeCard].content ?? null}
            </div>
        </motion.div>
    );
};