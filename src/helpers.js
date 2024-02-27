export const KEY = "c3fa46a6";

export const average = (arr) =>
  arr.reduce((acc, curr, _, arr) => (acc + curr) / arr.length, 0);

export const checkIsNaN = (value, other) => {
  return isNaN(value) ? other : value;
};
