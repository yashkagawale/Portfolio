/**
 * @copyright 2025 yashkagawale
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import propTypes from "prop-types";

/**
 * Primary Button
 */
const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  download,
  classes
}) => {
    if (href) {
      return (
        <a href={href} 
        target={target}
        download={download}
        className={"btn btn-primary " + classes}>
          
          {label}

          {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
          }
        </a>
      )
    } else {
      return (
        <button className={"btn btn-primary " + classes}>
          {label}

          {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
          }
        </button>
      )
    }
}

ButtonPrimary.propTypes = {
  label: propTypes.string.isRequired,
  href: propTypes.string,
  target: propTypes.string,
  download: propTypes.bool,
  icon: propTypes.string,
  classes: propTypes.string
}


/**
 * Outline Button
 */
const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
    if (href) {
      return (
        <a href={href} 
        target={target}
        className={"btn btn-outline " + classes}>
          
          {label}

          {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
          }
        </a>
      )
    } else {
      return (
        <button className={"btn btn-outline " + classes}>
          {label}

          {icon ? 
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
          : undefined
          }
        </button>
      )
    }
}

ButtonOutline.propTypes = {
  label: propTypes.string.isRequired,
  href: propTypes.string,
  target: propTypes.string,
  icon: propTypes.string,
  classes: propTypes.string
}

export { 
  ButtonPrimary,
  ButtonOutline 
}