import React, { useState, useEffect } from "react";
import internal from "stream";

export const useLocalStrorage = (key: string, defData: any) => {
  const [state, setState] = useState(() => {
    const localData = localStorage.getItem(key);
    return localData || defData;
  });
  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);
  return [state, setState];
};
