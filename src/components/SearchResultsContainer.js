import { useState } from "react";

import SearchResultsList from "./SearchResultsList";
import SortControls from "./SortControls";

import resultsData from "../api/data.json";

import layoutStyle from "./Layout.module.scss";

const SearchResultsContainer = () => {
  const [sort, setSort] = useState("bookingDetails.price");
  return (
    <div className={layoutStyle.outerContainer}>
      <div className={layoutStyle.container}>
        <div>
          <SortControls activeOption={sort} handleSort={setSort} />
        </div>
        <div>
          <SearchResultsList sortBy={sort} data={resultsData} />
        </div>
      </div>
    </div>
  );
};

export default SearchResultsContainer;
