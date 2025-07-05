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
import Work from "./components/Work";
import Review from "./components/Review";


const App = () => {
    return (
        <div className="scrollbar-thin scrollbar-track-zinc-800 scrollbar-thumb-zinc-500">
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Work />
                <Review />
            </main>
        </div>
    )
}

export default App;