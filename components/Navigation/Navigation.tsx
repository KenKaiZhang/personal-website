"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { capitalizeString } from "@/util/format";

import "./Navigation.css";
import { smoothClickNav } from "@/util/click";
import { useWindowWidth } from "@/util/windowResize";

const sections = ["home", "about", "experience", "projects", "contact"];

const mainVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.5 }, opacity: 1 },
};

const liVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export interface NavigationProps {
  setActive: any;
}

const Navigation: React.FunctionComponent<NavigationProps> = (props) => {
  const [activeNav, setActiveNav] = useState("home");
  const { setActive } = props;
  const miniScreen = useWindowWidth() < 800;
  const colorFlipNav = miniScreen
    ? ["experience", , "contact"]
    : ["experience", "contact"];

  const blackColor = { color: "#000000" };

  const handleButtonClick = useCallback(
    (e: any) => {
      setActiveNav(e.target.id);
      setActive(e.target.id);
      smoothClickNav(`${e.target.id}-section`);
    },
    [setActive]
  );

  useEffect(() => {
    const handleScroll = () => {
      sections.map((sec, i) => {
        const sectionHTML = document.querySelector(
          `#${sec}-section`
        ) as HTMLElement;
        if (sectionHTML.getBoundingClientRect().top < 850) {
          setActiveNav(sec);
          setActive(sec);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <motion.div
      className="navigation"
      variants={mainVariant}
      initial="hidden"
      animate="visible"
    >
      {useWindowWidth() < 800 ? (
        <motion.li
          whileHover={{ translateY: -10 }}
          onClick={handleButtonClick}
          className={activeNav === "home" ? "active" : ""}
          variants={liVariant}
        >
          <button
            id={"home"}
            style={colorFlipNav.includes(activeNav) ? blackColor : {}}
          >
            {capitalizeString("home")}
          </button>
        </motion.li>
      ) : (
        <li
          onClick={handleButtonClick}
          className={activeNav === "home" ? "active" : ""}
        >
          <Image
            id="home"
            src={
              colorFlipNav.includes(activeNav)
                ? "/svg/zhang_logo_black.svg"
                : "/svg/zhang_logo_white.svg"
            }
            alt="logo"
            width={65}
            height={60}
          />
        </li>
      )}

      {sections.slice(1).map((section) => {
        return (
          <motion.li
            key={section}
            whileHover={{ translateY: -10 }}
            onClick={handleButtonClick}
            className={activeNav === section ? "active navbutton" : "navbutton"}
            variants={liVariant}
          >
            <button
              id={section}
              style={colorFlipNav.includes(activeNav) ? blackColor : {}}
            >
              {capitalizeString(section)}
            </button>
          </motion.li>
        );
      })}
    </motion.div>
  );
};

export default Navigation;
