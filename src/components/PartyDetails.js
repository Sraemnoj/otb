import pluralise from "../utils/pluralise";

import detailStyles from "./Details.module.css";

const PartyDetails = ({ basedOn }) => {
  const { numAdults, numChildren, numInfants } = basedOn;

  const adults = numAdults && (
    <span className={detailStyles.text}>
      <span className={detailStyles.bold}>{numAdults}</span>
      {pluralise({
        count: numAdults,
        singular: " adult",
        plural: " adults",
      })}
    </span>
  );

  const children = numChildren && (
    <span className={detailStyles.text}>
      {`, `}
      <span className={detailStyles.bold}>{numChildren}</span>
      {pluralise({
        count: numChildren,
        singular: " child",
        plural: " children",
      })}
    </span>
  );

  const infants = numInfants && (
    <span className={detailStyles.text}>
      {` & `}
      <span className={detailStyles.bold}> {numInfants}</span>
      {pluralise({
        count: numInfants,
        singular: " infant",
        plural: " infants",
      })}
    </span>
  );

  return (
    <div className={detailStyles.container}>
      {adults}
      {children}
      {infants}
    </div>
  );
};

export default PartyDetails;
