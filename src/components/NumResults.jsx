const NumResults = ({ movies }) => {
  return (
    <div className="results-box">
      <p>Results: {movies.length} found</p>
    </div>
  );
};

export default NumResults;
