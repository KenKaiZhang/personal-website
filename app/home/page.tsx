"use client";

import React from "react";
import { Variants, motion } from "framer-motion";
import Corners from "@/components/Corners/Corners";
import { useWindowWidth } from "@/hooks/useWindowWidth";

import styles from "./home.module.css";

const cornerVariant: Variants = {
  mainInitial: { scale: 0 },
  mainAnimate: { scale: 1, transition: { duration: 1 } },
  cornerInitial: { height: "0%", width: "0%" },
  cornerAnimate: {
    height: "25%",
    width: "60%",
    transition: { delay: 1, duration: 1 },
  },
};

const mainVariant: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 2, duration: 1 } },
};

const Home: React.FunctionComponent = (props) => {
  if (useWindowWidth() < 800) {
    cornerVariant.cornerAnimate = {
      height: "10%",
      width: "80%",
      transition: { delay: 1, duration: 1 },
    };
  } else {
    cornerVariant.cornerAnimate = {
      height: "25%",
      width: "60%",
      transition: { delay: 1, duration: 1 },
    };
  }

  return (
    <section id="home-section" data-page="home">
      <div className={styles.homeContent}>
        <Corners
          height=""
          width=""
          borderColor="#fffbef"
          margin="1em"
          variants={cornerVariant}
        />
        <motion.div
          className="background-text"
          variants={mainVariant}
          initial="hidden"
          animate="visible"
          whileInView="whileVisible"
        >
          <p>張宸愷</p>
          <p>張宸愷</p>
        </motion.div>
        <motion.div
          className={styles.introText}
          variants={mainVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="gradient-text">
            <h1 id="name">Ken Zhang</h1>
          </div>
          <p>Aspiring UI/UX Developer</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
