/**
 * @copyright 2025 yashkagawale
 * @license Apache-2.0
 */

/**
 * assets
 */
import avatar from '../assets/avatar.jpg'
import banner_hero from '../assets/hero-banner.jpg'
import Resume from '../documents/Yash_Kagawale.pdf'


/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from './Button'

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
        <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-7 h-7 rounded-2xl">
                        <img src={avatar} width={40} height={40} alt="portrait" className="img-cover" />
                    </figure>

                    <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                        <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                            <span className="absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    Building Scalable Modern Websites for the Future
                </h2>

                <div className="flex items-center gap-3">
                    <ButtonPrimary 
                        label = "Download CV"
                        icon = "download"
                        href={Resume}
                        download

                    /> 

                    <ButtonOutline 
                        href="#about"
                        label="Scroll down"
                        icon="arrow_downward"
                    />
                </div>
            </div>

            <div className="hidden lg:block">
                <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[80px] overflow-hidden">
                    <img src={banner_hero} width={656} height={800} alt="hero-banner" className="w-full"/>
                </figure>
            </div>
        </div>
    </section>
  )
}

export default Hero