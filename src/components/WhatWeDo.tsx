import { StickyScroll } from "./ui/StickyScroll";
import img1 from '../assets/features-3.jpg'
import img2 from '../assets/features-1.jpg'
import img3 from '../assets/features-2.jpg'
import img4 from '../assets/features-4.jpg'

const content = [
    {
      title: "UI/UX Design",
      description:
        "we will help you translate your ideas into reality, crafting designs that are not only user-friendly but also visually compelling, ensuring seamless navigation across all devices.",
      content: (
          <img
          src={img1}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="UI/UX image"
        />
      ),
    },
    {
      title: "Landing Page",
      description:
        "we will craft you a high-converting landing pages that capture attention, drive action, and turn visitors into leads with compelling visuals and clear messaging.",
      content: (
          <img
            src={img2}
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="landing page image"
          />
      ),
    },
    {
      title: "Website Development",
      description:
        "we build dynamic, user-friendly websites that reflect your brand's identity, optimize user experience, and drive meaningful engagement across all devices.",
      content: (
          <img
          src={img3}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
    {
      title: "Mobile App Development",
      description:
        "we create intuitive, high-performance mobile apps that provide seamless user experiences, helping your brand stay connected with customers on the go.",
      content: (
        <img
          src={img4}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      ),
    },
  ];
  
  export default function WhatWeDo() {
    return (
      <div id="what-we-do-section" className="relative z-30">
        <StickyScroll content={content} />
      </div>
    );
  }