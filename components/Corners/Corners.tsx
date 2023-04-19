import React from "react";
import { Variants, motion } from "framer-motion";
import "./Corners.css";

export interface CornersProps {
  borderColor: string;
  height: string;
  width: string;
  margin: string;
  variants: Variants;
}

const Corners: React.FunctionComponent<CornersProps> = (props) => {
  const { borderColor, height, width, margin, variants } = props;

  let _style = props || {};

  return (
    <motion.div
      className="corners"
      variants={variants}
      initial="mainInitial"
      animate="mainAnimate"
    >
      <motion.div
        className="corner top-left"
        style={_style}
        variants={variants}
        initial="cornerInitial"
        animate="cornerAnimate"
        whileInView="cornerView"
      />
      <motion.div
        className="corner bottom-right"
        style={_style}
        variants={variants}
        initial="cornerInitial"
        animate="cornerAnimate"
        whileInView="cornerView"
      />
    </motion.div>
  );
};

export default Corners;
