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
import project_1 from '../assets/Educity.png';
import project_2 from '../assets/Thriftstore.png';
import project_3 from '../assets/Prepscripto.png'


const works = [
  {
    imgSrc: project_1,
    title: 'Educity',
    tags: ['Web-design', 'Frontend'],
    projectLink: 'https://educity-pro.netlify.app/'
  },
  {
    imgSrc: project_3,
    title: 'Prepscripto',
    tags: ['Web-design', 'FullStack'],
    projectLink: 'https://yashprescripto.netlify.app/'
  },
  {
    imgSrc: project_2,
    title: 'Thrift Store',
    tags: ['Web-design', 'Frontend'],
    projectLink: 'https://thirftstore.netlify.app/'
  },
  // {
  //   imgSrc: project_4,
  //   title: 'Face Recognition',
  //   tags: ['Python', 'OpenCV'],
  //   projectLink: 'https://github.com/yashkagawale/Face-Recognition'
  // },
];

const Work = () => {
  return (
    <section id="work" className="section">
        <div className="container">
            <h2 className="headline-2 mb-8  ">
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
                        classes=" "
                    />
                ))}
            </div>
        </div>
    </section>
   )
}

export default Work