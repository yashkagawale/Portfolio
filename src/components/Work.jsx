/**
 * @copyright 2025 yashkagawale
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from "./ProjectCard";

/**
 * assets
 */
import project_1 from '../assets/project-1.jpg';
import project_2 from '../assets/project-2.jpg';


const works = [
  {
    imgSrc: project_1,
    title: 'Full stack music app',
    tags: ['API', 'MVC', 'Development'],
    projectLink: '/'
  },
  {
    imgSrc: project_2,
    title: 'Free stock photo app',
    tags: ['API', 'SPA'],
    projectLink: '/'
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8 reveal-up">
                My portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, 
                key) => (
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
            </div>
        </div>
    </section>
   )
}

export default Work