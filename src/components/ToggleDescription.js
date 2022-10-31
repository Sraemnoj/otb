import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import toggleStyles from "./ToggleDescription.module.scss";

const ToggleDescription = ({
  isToggled,
  text,
  expandedText,
  collapsedText,
  handleToggle,
  icon,
}) => {
  const chevronStyles = isToggled
    ? `${toggleStyles.chevron} ${toggleStyles.chevronRot90}`
    : toggleStyles.chevron;
  return (
    <div className={toggleStyles.container}>
      <button
        className={toggleStyles.descriptionBtn}
        onClick={() => handleToggle(!isToggled)}
      >
        <span className={`${toggleStyles.descriptionBtn} ${toggleStyles.bold}`}>
          {isToggled ? expandedText : collapsedText}
        </span>
        <span className={toggleStyles.descriptionBtn}> {` ${text}`}</span>
        <span className={chevronStyles}>
          <FontAwesomeIcon icon={icon} />
        </span>
      </button>
    </div>
  );
};

export default ToggleDescription;
