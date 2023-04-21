"use client";
import { useState, useEffect } from "react";

export const useActiveSection = () => {
  const sections = ["home", "about", "experience", "projects", "contact"];
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const activePoint = window.innerHeight * 0.7;
    const handleScroll = () => {
      sections.map((sec, i) => {
        const sectionHTML = document.querySelector(
          `#${sec}-section`
        ) as HTMLElement;
        if (sectionHTML.getBoundingClientRect().top < activePoint) {
          setActiveSection(sec);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return activeSection;
};
