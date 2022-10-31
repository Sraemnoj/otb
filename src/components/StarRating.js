import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./StarRating.module.scss";

const StarRating = ({ score, starClass }) => {
  const stars = [...Array(score)].map((_, i) => (
    <FontAwesomeIcon key={i} icon={faStar} className={starClass} />
  ));

  return <div className={styles.container}>{stars}</div>;
};

export default StarRating;
