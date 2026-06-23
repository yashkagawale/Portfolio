/**
 * @copyright 2025 yashkagawale
 * @license Apache-2.0
 */

/**
 * assets
 */
import logo from '../assets/logo.svg'

const INTERNSHIP_EXPERIENCE_MONTHS = 6;
const CURRENT_ROLE_START_DATE = new Date(2025, 8, 4);

const getCompletedMonthsSince = (startDate, endDate = new Date()) => {
    let months =
        (endDate.getFullYear() - startDate.getFullYear()) * 12 +
        (endDate.getMonth() - startDate.getMonth());

    if (endDate.getDate() < startDate.getDate()) {
        months -= 1;
    }

    return Math.max(months, 0);
};

const totalExperienceMonths =
    INTERNSHIP_EXPERIENCE_MONTHS + getCompletedMonthsSince(CURRENT_ROLE_START_DATE);

const aboutItems = [
    {
        label: 'Projects completed',
        number: 8
    },
    {
        label: 'Months of experience',
        number: totalExperienceMonths
    }
];

const About = () => {
  return (
    <section id="about" className="section">
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                    I&apos;m Yash Umesh Kagawale, a frontend developer and MCA student with hands-on experience in React.js, Node.js, and full-stack development. I build responsive, scalable applications, improve UI/UX, and collaborate with cross-functional teams to deliver practical, user-focused digital solutions.
                </p>

                <div className="flex flex-warp items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }
                    
                    <img src={logo} alt="Logo" width={30} height={30} className="ml-auto md:w-[40px] md:h-[40px]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About