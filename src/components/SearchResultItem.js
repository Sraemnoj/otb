import { useState } from "react";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import StarRating from "./StarRating";
import BookNow from "./BookNow";
import ToggleDescription from "./ToggleDescription";
import PhotoBG from "./Photo";
import PartyDetails from "./PartyDetails";
import HotelDetails from "./HotelDetails";
import FlightItinery from "./FlightItinery";
import Departure from "./Departure";

import itemStyles from "./SearchResultItem.module.css";
import starStyles from "./StarRating.module.css";
import toggleStyles from "./ToggleDescription.module.css";

const SearchResultItem = ({ item }) => {
  const [showDesc, toggleShowDesc] = useState(false);
  const { resort, bookingDetails, flightDetails } = item;
  return (
    <>
      <div className={itemStyles.container}>
        <PhotoBG className={itemStyles.photo} photo={resort.photo}>
          <ToggleDescription
            text="about this hotel"
            expandedText="Read less"
            collapsedText="Read more"
            handleToggle={toggleShowDesc}
            isToggled={showDesc}
            icon={faChevronRight}
          />
        </PhotoBG>
        <div className={itemStyles.body}>
          <HotelDetails resort={resort} />

          <StarRating score={resort.rating} starClass={starStyles.yellow} />
          <PartyDetails basedOn={bookingDetails.basedOn} />
          <Departure
            date={flightDetails.departureDate}
            lengthOfStay={bookingDetails.lengthOfStay}
          />
          <FlightItinery departureAirport={flightDetails.departureAirport} />
          <BookNow cost={bookingDetails.price} />
        </div>
        {showDesc && (
          <div className={toggleStyles.descriptionContainer}>
            <h3 className={toggleStyles.title}>Overview</h3>
            <div className={toggleStyles.text}>{item.resort.overview}</div>
          </div>
        )}
      </div>
      {/* <Row className={itemStyles.container}>
        <Col>
          <Row>
            <Col xs={12} md={8} className={itemStyles.photo}>
              <PhotoBG photo={resort.photo}>
                <ToggleDescription
                  text="about this hotel"
                  expandedText="Read less"
                  collapsedText="Read more"
                  handleToggle={toggleShowDesc}
                  isToggled={showDesc}
                  icon={faChevronRight}
                />
              </PhotoBG>
            </Col>
            <Col xs={12} md={4} className={itemStyles.body}>
              <HotelDetails resort={resort} />

              <StarRating score={resort.rating} starClass={starStyles.yellow} />
              <PartyDetails basedOn={bookingDetails.basedOn} />
              <Departure
                date={flightDetails.departureDate}
                lengthOfStay={bookingDetails.lengthOfStay}
              />
              <FlightItinery
                departureAirport={flightDetails.departureAirport}
              />
              <BookNow cost={bookingDetails.price} />
            </Col>
          </Row>
          {showDesc && (
            <Row>
              <Col>
                <div className={toggleStyles.descriptionContainer}>
                  <h3 className={toggleStyles.title}>Overview</h3>
                  <div className={toggleStyles.text}>
                    {item.resort.overview}
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Col>
      </Row> */}
    </>
  );
};

export default SearchResultItem;
