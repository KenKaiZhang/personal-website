"use client";

import React, { useEffect, useState } from "react";
import { Variants } from "framer-motion";
import Corners from "../Corners/Corners";

import "./Boxes.css";

export interface BoxesProps {
  data: any[];
}
const cornerVariants: Variants = {
  cornerInitial: { height: "0%", width: "0%" },
  cornerView: {
    height: "80%",
    width: "80%",
    transition: { duration: 1 },
  },
};
const Boxes: React.FunctionComponent<BoxesProps> = (props) => {
  const { data } = props;
  const [activeItems, setActiveItems] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const boxHTML = document.querySelectorAll(".box");
      var passed = -1;
      boxHTML?.forEach((box, i) => {
        if (box.getBoundingClientRect().top < 600) {
          passed++;
        }
      });
      setActiveItems(passed);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="boxes">
      {data.map((item, i) => {
        const reveal = activeItems >= i;
        return (
          <div
            className="box"
            key={i}
            style={{
              transform: `scale(${reveal ? 1 : 0.8})`,
              opacity: reveal ? 1 : 0.2,
            }}
          >
            {reveal ? (
              <Corners
                borderColor="#ffffff"
                margin="0.5em"
                variants={cornerVariants}
                height={""}
                width={""}
              />
            ) : (
              ""
            )}
            <div className="box-text">
              <div className="gradient-text">
                <h1>{item.company}</h1>
              </div>
              <h3>
                {item.position} - <i>{`${item.start} : ${item.end}`}</i>
              </h3>
              <ul>
                {item.job.map((j: string, i: number) => {
                  return <li key={i}>{j}</li>;
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Boxes;
