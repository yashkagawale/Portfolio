/**
 * @copyright 2025 yashkagawale
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import { useRef, useEffect } from "react";
import propTypes from "prop-types";
import { NAV_ITEMS } from "../config/siteData";



const Navbar = ({ navOpen }) => {

    const lastActiveLink = useRef();
    const activeBox = useRef();

    const initActiveBox = () => {
        if (!activeBox.current || !lastActiveLink.current) return;
        activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
        activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
        activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
        activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }

    useEffect(() => {
      initActiveBox();
      window.addEventListener('resize', initActiveBox);

      return () => {
        window.removeEventListener('resize', initActiveBox);
      };
    }, []);

    const activeCurrentLink = (event) => {
        lastActiveLink.current?.classList.remove('active');
        event.target.classList.add('active');
        lastActiveLink.current = event.target;
        activeBox.current.style.top    = event.target.offsetTop + 'px';
        activeBox.current.style.left   = event.target.offsetLeft + 'px';
        activeBox.current.style.width  = event.target.offsetWidth + 'px';
        activeBox.current.style.height = event.target.offsetHeight + 'px';
    }

  return (
    <nav className={'navbar ' + (navOpen ? 'active' : '')}>
        {
        NAV_ITEMS.map(({ label, link }, key) => (
            <a href={link}
            key={key}
            ref={key === 0 ? lastActiveLink : null} 
            className={
              "nav-link " + (key === 0 ? "active " : "") + (label === "Contact" ? "nav-link--mobile-only" : "")
            }
            onClick={activeCurrentLink}>
                {label}
            </a>
        ))
    }
    <div className="active-box"
    ref={activeBox}></div>
    </nav>
  )
}

Navbar.propTypes = {
    navOpen: propTypes.bool.isRequired
}

export default Navbar