import SearchResultItem from "./SearchResultItem";

const get = (t, path) => path.split(".").reduce((r, k) => r?.[k], t);

const SearchResultsList = ({ sortBy, data }) => {
  if (!data) return null;

  data
    .sort((a, b) => {
      const first = get(a, sortBy);
      const second = get(b, sortBy);

      if (typeof first === "string" && typeof first === "string") {
        return first > second ? 1 : -1;
      } else {
        return first < second ? 1 : -1;
      }
    })
    .map((item, index) => (
      <SearchResultItem key={`search-result-item-${index}`} item={item} />
    ));

  return data?.map((item, index) => (
    <SearchResultItem key={`search-result-item-${index}`} item={item} />
  ));
};

export default SearchResultsList;
