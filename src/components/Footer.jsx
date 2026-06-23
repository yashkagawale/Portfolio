/**
 * @copyright 2025 yashkagawale
 * @license Apache-2.0
 */

/**
 * Components
 */
import { ButtonPrimary } from "./Button";
import { CONTACT_EMAIL, FOOTER_SITEMAP, SOCIAL_LINKS } from "../config/siteData";

/**
 * Assets
 */
import Logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch]  ">
              Let&apos;s work together today!
            </h2>

            <ButtonPrimary
              href={`mailto:${CONTACT_EMAIL}`}
              label="Let's Connect"
              icon="chevron_right"
              classes=" "
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2  ">Sitemap</p>

              <ul>
                {FOOTER_SITEMAP.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="underline-slide block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2  ">Socials</p>

              <ul>
                {SOCIAL_LINKS.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-slide block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200  "
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex iterms-center justify-between pt-10 mb-8">
          <a href="/" className="logo  ">
            <img src={Logo} alt="Logo" width={40} height={40} />
          </a>

          <p className="text-zinc-500 text-sm  ">
            &copy; 2026 <span className="text-zinc-200">yashkagawale</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
