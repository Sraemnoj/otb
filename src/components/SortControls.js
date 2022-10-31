import {
  faStar,
  faSterlingSign,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./SortControls.module.scss";
import SortButton from "./SortButton";

const SortControls = ({ activeOption, handleSort }) => {
  const navOptions = [
    {
      id: "resort.hotel",
      title: "alphabetically",
      titlePrefix: "sort",
      icon: faSort,
      sortResultsBy: () => handleSort("resort.hotel"),
    },
    {
      id: "bookingDetails.price",
      title: "price",
      titlePrefix: "sort by",
      icon: faSterlingSign,
      sortResultsBy: () => handleSort("bookingDetails.price"),
    },
    {
      id: "resort.rating",
      title: "star rating",
      titlePrefix: "sort by",
      icon: faStar,
      sortResultsBy: () => handleSort("resort.rating"),
    },
  ];

  return (
    <aside>
      <nav>
        <ul className={styles.navigation}>
          {navOptions.map((buttonProps, index) => (
            <li key={`nav-list-item-${index}`} className={styles.navigation}>
              <SortButton activeOption={activeOption} {...buttonProps} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SortControls;
