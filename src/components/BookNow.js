import styles from "./BookNow.module.scss";

import formatPrice from "../utils/formatPrice";

const BookNow = ({ cost }) => {
  const formattedPrice = formatPrice({
    numberFormat: {
      style: "currency",
      currency: "GBP",
    },
    locales: "en-GB",
    price: cost,
  });

  return (
    <div>
      <button className={styles.button}>
        <span className={styles.label}>Book Now</span>
        <br />
        <span className={styles.price}>{formattedPrice}</span>
      </button>
    </div>
  );
};

export default BookNow;
