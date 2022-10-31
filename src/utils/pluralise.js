const pluralise = ({ count, singular, plural }) =>
  count > 1 ? plural : singular;

export default pluralise;
