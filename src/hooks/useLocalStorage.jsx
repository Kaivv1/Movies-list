import { useEffect, useState } from "react";

const useLocalStorage = (arrValue, key) => {
  const [value, setValue] = useState(() => {
    const storageValue = localStorage.getItem(key);
    return storageValue ? JSON.parse(storageValue) : arrValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
