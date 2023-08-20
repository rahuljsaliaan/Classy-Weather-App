import { useEffect, useState } from "react";

export function useLocalStorageState(key) {
  const [location, setLocation] = useState(localStorage.getItem(key) ?? "");

  useEffect(
    function () {
      localStorage.setItem(key, location);
    },
    [key, location]
  );

  return [location, setLocation];
}
