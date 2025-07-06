/**
 * @copyright 2025 yashkagawale
 * @license Apache-2.0
 */

/**
 * Components
 */
import SkillCard from './Skillcard';


/**
 * assets
 */
import Figma from '../assets/figma.svg'
import Css from '../assets/css3.svg'
import Javascript from '../assets/javascript.svg'
import Node from '../assets/nodejs.svg'
import Express from '../assets/expressjs.svg'
import Database from '../assets/mongodb.svg'
import React from '../assets/react.svg'
import Tail from '../assets/tailwindcss.svg'

const skillItem = [
  {
    imgSrc: Figma,
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: Css,
    label: 'CSS',
    desc: 'User Interface'
  },
  {
    imgSrc: Javascript,
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: Node,
    label: 'NodeJS',
    desc: 'Web Server'
  },
  {
    imgSrc: Express,
    label: 'ExpressJS',
    desc: 'Node Framework'
  },
  {
    imgSrc: Database,
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: React,
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: Tail,
    label: 'TailwindCSS',
    desc: 'User Interface'
  },
];

const Skills = () => {
  return (
    <section className="section">
        <div className="container">

            <h2 className="headline-2 reveal-up">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[500ch] reveal-up">
                Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({imgSrc, label, desc}, key) => (
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skills