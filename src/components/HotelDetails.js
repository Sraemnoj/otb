import itemStyles from "./SearchResultItem.module.css";

const HotelDetails = ({ resort }) => {
  return (
    <>
      <h1 className={itemStyles.hotel}>{resort?.hotel}</h1>
      <h2
        className={itemStyles.location}
      >{`${resort?.area}, ${resort?.name}`}</h2>
    </>
  );
};

export default HotelDetails;
