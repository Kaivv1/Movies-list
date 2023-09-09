export const KEY = "c3fa46a6";

export const average = (arr) =>
  arr.reduce((acc, curr, _, arr) => (acc + curr) / arr.length, 0);

// http://www.omdbapi.com/?apikey=${KEY}&s=${query}
// http://www.omdbapi.com/?apikey=${KEY}&i=${id}
