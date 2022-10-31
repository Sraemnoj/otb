import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import sortBtnStyles from "./SortButton.module.scss";

const SortButton = ({
  activeOption,
  id,
  title,
  titlePrefix,
  sortResultsBy,
  icon,
}) => {
  const buttonClasses =
    activeOption === id
      ? `${sortBtnStyles.button} ${sortBtnStyles.active}`
      : sortBtnStyles.button;

  return (
    <div className={sortBtnStyles.container}>
      <button className={buttonClasses} onClick={sortResultsBy}>
        <span>
          {`${titlePrefix} `}
          <span className={sortBtnStyles.bold}>{title}</span>
        </span>
        <span className={sortBtnStyles.icon}>
          <FontAwesomeIcon icon={icon} />
        </span>
      </button>
    </div>
  );
};

export default SortButton;
