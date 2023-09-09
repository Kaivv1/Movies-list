const Search = ({ query, onChangeQuery }) => {
  return (
    <div className="search-box">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => onChangeQuery(e.target.value)}
      />
    </div>
  );
};

export default Search;
