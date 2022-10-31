import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

import detailStyles from "./Details.module.css";

const Departure = ({ date, lengthOfStay }) => {
  dayjs.extend(advancedFormat);
  const dateFormatted = dayjs(date).format("Do MMMM YYYY");
  return (
    <div className={`${detailStyles.container} ${detailStyles.text}`}>
      <span className={detailStyles.bold}>{dateFormatted}</span> for{" "}
      <span className={detailStyles.bold}>{lengthOfStay} days</span>
    </div>
  );
};

export default Departure;
