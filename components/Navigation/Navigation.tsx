"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { capitalizeString } from "@/util/format";
import { smoothClickNav } from "@/util/click";
import { useWindowWidth } from "@/hooks/useWindowWidth";
import { useActiveSection } from "@/hooks/useActiveSection";

import "./Navigation.css";

const sections = ["home", "about", "experience", "projects", "contact"];

const mainVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { transition: { staggerChildren: 0.5 }, opacity: 1 },
};

const liVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Navigation: React.FunctionComponent = () => {
  var activeNav = useActiveSection();

  const miniScreen = useWindowWidth() < 800;
  const colorFlipNav = miniScreen
    ? ["projects", "contact"]
    : ["projects", "contact"];

  const blackColor = { color: "#000000" };

  const handleButtonClick = (e: any) => {
    activeNav = e.target.id;
    console.log(activeNav);
    smoothClickNav(`${activeNav}-section`);
  };

  const navHTML = document.querySelector("nav") as HTMLElement;
  if (navHTML && activeNav === "home") {
    navHTML.style.backgroundImage = "none";
  } else if (navHTML && colorFlipNav.includes(activeNav)) {
    navHTML.style.backgroundImage = "none";
  } else if (navHTML && !colorFlipNav.includes(activeNav)) {
    navHTML.style.backgroundImage =
      "linear-gradient(to bottom,#1d1d1d00,#1d1d1d52 40%,#1d1d1de7 70%)";
  }

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
      <motion.li
        whileHover={{ translateY: -10 }}
        onClick={handleButtonClick}
        className="navbutton"
        variants={liVariant}
      >
        <a
          href="pdf/Resume2023.pdf"
          download="ChenKaiZhangResume2023"
          target="_blank"
        >
          <button
            id="resume"
            style={colorFlipNav.includes(activeNav) ? blackColor : {}}
          >
            Resume
          </button>
        </a>
      </motion.li>
    </motion.div>
  );
};

export default Navigation;
