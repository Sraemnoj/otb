import detailStyles from "./Details.module.scss";

const FlightItinery = ({ departureAirport }) => {
  return (
    <div className={`${detailStyles.container} ${detailStyles.text}`}>
      <span>departing from </span>
      <span className={detailStyles.bold}>{departureAirport}</span>
    </div>
  );
};

export default FlightItinery;
