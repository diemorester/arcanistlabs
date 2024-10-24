import backgroundimage from '../assets/hero-image.webp'
import ContactModalButton from './ContactButton'

export default function HeroSection() {
    return (
        <div id="hero-section" className="w-full h-screen relative z-30 bg-cover md:bg-left bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundimage})` }}>
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='flex flex-col w-full h-full justify-center md:justify-end gap-32 p-6 md:p-11'>
                {/* <div className='text-sm md:text-2xl md:pt-2 z-30 text-end text-white'>
                    <p>we capture your vision,</p>
                    <p>conjure its essence,</p>
                    <p>and elevate your ideas into reality.</p>
                </div> */}
                <div className='flex flex-col justify-between md:flex-row z-30 text-white'>
                    <div className='text-5xl md:text-8xl'>
                        <p>Capture.</p>
                        <p className='py-3'>/&nbsp;Elevate.</p>
                        <p>//&nbsp;Conjure.</p>
                    </div>
                    <div className='absolute bottom-[10%] md:right-0 md:px-11'>
                        <ContactModalButton />
                    </div>
                </div>
            </div>
        </div>
    )
}