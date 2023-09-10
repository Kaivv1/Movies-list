import { useEffect, useRef } from "react";

const Search = ({ query, onChangeQuery }) => {
  const inputEl = useRef(null);

  useEffect(() => {
    function callback(e) {
      if (document.activeElement === inputEl.current) return;

      if (e.code === "Enter") {
        inputEl.current.focus();
        onChangeQuery("");
      }
    }
    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [onChangeQuery]);

  return (
    <div className="search-box">
      <input
        type="text"
        name="search"
        value={query}
        onChange={(e) => onChangeQuery(e.target.value)}
        ref={inputEl}
        placeholder="Search movies..."
      />
    </div>
  );
};

export default Search;
