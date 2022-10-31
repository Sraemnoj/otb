const formatPrice = ({ numberFormat, locales, price }) => {
  const priceFormat = new Intl.NumberFormat(locales, numberFormat);
  return priceFormat.format(price);
};

export default formatPrice;
