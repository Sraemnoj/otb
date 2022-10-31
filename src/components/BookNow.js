import styles from "./BookNow.module.scss";

const FormatPrice = ({ currencySymbol, price }) => {
  const priceFormat = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });
  return priceFormat.format(price);
};

const BookNow = ({ cost }) => {
  return (
    <div>
      <button className={styles.button}>
        <span className={styles.label}>Book Now</span>
        <br />
        <span className={styles.price}>
          <FormatPrice currencySymbol="£" price={cost} />
        </span>
      </button>
    </div>
  );
};

export default BookNow;
