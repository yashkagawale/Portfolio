/**
 * @copyright 2025 yashkagawale
 * @license Apache-2.0
 */

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero"
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Work from "./components/Work";
// import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/**
 * Node modules
 */
import { ReactLenis } from 'lenis/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


const App = () => {

    // useGSAP(() => {
    //     const elements = gsap.utils.toArray('.reveal-up');

    //     // console.log(elements);

    //     elements.forEach((element) => {
    //         gsap.to(elements, {
    //             scrollTrigger: {
    //                 trigger: element,
    //                 start: '-200 bottom',
    //                 end: 'bottom 80%',
    //                 scrub: true,
    //             },
    //             y: 0,
    //             opacity: 1,
    //             duration: 1,
    //             ease: 'power2.out'
    //         })
    //     });
    // });

    return (
        <ReactLenis root>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Work />
                {/* <Review /> */}
                <Contact />
            </main>
            <Footer />
        </ReactLenis>
    )
}

export default App;