"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

import styles from "./loader.module.css";

const pathVariant: Variants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    strokeWidth: 6,
    strokeLinecap: "round",
  },
};

const mainVariant: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, scale: { delay: 1.2 } },
    scale: [0.5, 0.65, 0],
  },
};

const Loader = ({ setLoading }) => {
  return (
    <div className={styles.loader}>
      <motion.div exit="exit">
        <motion.svg
          id="ejNBP7mpWHt1"
          height="300"
          width="300"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          variants={mainVariant}
          onAnimationComplete={() => setLoading(false)}
        >
          <motion.ellipse
            variants={pathVariant}
            rx="124.167817"
            ry="128.577812"
            transform="matrix(.966434 0 0 0.933287 150 145.929543)"
            fill="rgba(255,255,255,0)"
            stroke="#fff"
            strokeWidth="6"
          />

          {/* Top lines */}
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="28.147009"
            x2="0"
            y2="-28.147009"
            transform="matrix(.275569 0.961281 -.952805 0.273139 113.207978 59.051334)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="28.147009"
            x2="0"
            y2="-28.147009"
            transform="matrix(-.282624 0.959231 0.842987 0.248374 183.631202 58.354283)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Body */}
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="-28.147009"
            x2="0"
            y2="28.147009"
            transform="matrix(-1 0 0 0.546278 140.02658 67.234654)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="-28.147009"
            x2="0"
            y2="28.147009"
            transform="matrix(.275569 0.961281-.952805 0.273139 113.207978 90.298794)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="-28.147009"
            x2="0"
            y2="28.147009"
            transform="matrix(-1 0 0 0.632963 85.831806 115.802857)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="28.147009"
            x2="0"
            y2="-28.147009"
            transform="matrix(.275569 0.961281-.952805 0.273139 113.207978 126.993391)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <motion.line
            variants={pathVariant}
            x1="0"
            y1="-28.147009"
            x2="0"
            y2="28.147009"
            transform="matrix(-1 0 0 1.7 159 102)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="-28.147009"
            x2="0"
            y2="28.147009"
            transform="matrix(.280859-.959749 0.680412 0.199114 180.149563 92.154801)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="-28.147009"
            x2="0"
            y2="28.147009"
            transform="matrix(.280859-.959749 0.680412 0.199114 179.055197 113.236869)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Leg */}
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="-28.147009"
            x2="0"
            y2="28.147009"
            transform="matrix(-1 0 0 2.15 140 183)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="28.147009"
            x2="0"
            y2="-28.147009"
            transform="matrix(-.658005 0.753013 1.195685 1.044825 104.598482 216.671092)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />

          <motion.line
            variants={pathVariant}
            x1="0"
            y1="-28.147009"
            x2="0"
            y2="28.147009"
            transform="matrix(-1 0 0 1.3 160 210)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="-28.147009"
            x2="0"
            y2="28.147009"
            transform="matrix(-.775813 0.630963 0.788241 0.969196 191.326154 197.639642)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="28.147009"
            x2="0"
            y2="-28.147009"
            transform="matrix(.72305 0.690796-1.02842 1.076439 190.231788 216.671092)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Cross line */}
          <motion.line
            variants={pathVariant}
            x1="0"
            y1="28.147009"
            x2="0"
            y2="-28.147009"
            transform="matrix(.275569 1 -2.6 0.65 148 165)"
            fill="none"
            stroke="#fff"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Loader;
