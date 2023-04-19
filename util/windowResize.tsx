"use client";
import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [width, setWidth] = useState(window.innerWidth);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return width;
};
