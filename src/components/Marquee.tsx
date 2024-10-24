import Marquee from "react-fast-marquee";
import img1 from "../assets/batman-logo.png"
import img2 from "../assets/superman-logo.png"
import img3 from "../assets/got-logo.png"
import img4 from "../assets/heisenberg.png"
import img5 from "../assets/dr-martens-logo.png"
import img6 from "../assets/darth-vader.png"

export default function Marque() {
    return (
        <div className="flex flex-col max-md:gap-9 md:gap-3 pt-5 p-6 md:px-11 md:flex-row md:h-[150px] bg-stone-100 relative z-20">
            <div className="place-content-center text-center text-sm md:text-xl md:w-1/3">
                <p>trusted by <span className="font-bold">666+ </span>companies.</p>
            </div>
            <Marquee className="md:w-3/5" autoFill gradient gradientWidth={50} gradientColor="#f5f5f4">
                <img src={img1} width={100} height={50} alt="img-marquee1" className="px-5" />
                <img src={img3} width={100} height={50} alt="img-marquee2" className="px-5" />
                <img src={img6} width={100} height={50} alt="img-marquee3" className="px-5" />
                <img src={img5} width={130} height={50} alt="img-marquee4" className="px-5" />
                <img src={img2} width={100} height={50} alt="img-marquee5" className="px-5" />
                <img src={img4} width={100} height={50} alt="img-marquee6" className="px-5" />
            </Marquee>
        </div>
    )
}