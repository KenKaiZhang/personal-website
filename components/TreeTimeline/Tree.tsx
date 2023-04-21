"use client";

import React, { useEffect, useState } from "react";
import Corners from "../Corners/Corners";
import "./Tree.css";
import { Variants } from "framer-motion";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export interface TreeProps {
  data: any[];
}

interface LeafProps {
  even: boolean;
  reveal: boolean;
  data: any;
}

const LeafInfo: React.FunctionComponent<LeafProps> = (props) => {
  const { even, data, reveal } = props;

  const leftStyle = {
    right: 0,
    transformOrigin: "top right",
    transform: "rotate(-15deg)",
    borderTopLeftRadius: "35%",
    borderBottomLeftRadius: "35%",
  };
  const rightStyle = {
    left: 0,
    transformOrigin: "top left",
    transform: "rotate(15deg)",
    borderTopRightRadius: "35%",
    borderBottomRightRadius: "35%",
  };

  const name = `branch-leaf ${even ? "left" : "right"} ${
    reveal ? "reveal" : ""
  }`;

  const cornerVariants: Variants = {
    cornerInitial: { height: "0%", width: "0%" },
    cornerView: {
      height: "100%",
      width: "100%",
      transition: { duration: 1 },
    },
  };

  return (
    <div className={name}>
      <div className="branch" style={even ? leftStyle : rightStyle} />
      <div className="leaf">
        <>
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
        </>
        <div className="leaf-text">
          <div className="gradient-text">
            <h1>{data.company}</h1>
          </div>
          <h3>
            {data.position} - <i>{`${data.start} : ${data.end}`}</i>
          </h3>
          <ul>
            {data.job.map((j: string, i: number) => {
              return <li key={i}>{j}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Tree: React.FunctionComponent<TreeProps> = (props) => {
  const { data } = props;
  const [barkLength, setBarkLength] = useState(0);
  const [activeItems, setActiveItems] = useState(-1);

  const branchPositions = ["1/1/2/1", "2/2/3/2", "3/1/4/1"];
  const miniScreen = useWindowWidth() < 800;
  const barkGrowStart = miniScreen ? 300 : 250;
  const branchGrowStart = miniScreen ? 225 : 200;
  useEffect(() => {
    const handleRootScroll = () => {
      const rootHTML = document.querySelector(".root") as HTMLElement;
      const rootTop = rootHTML.getBoundingClientRect().top;
      setBarkLength(barkGrowStart - rootTop);

      const branchesHTML = document.querySelectorAll(".branch-leaf");
      var passed = -1;
      branchesHTML?.forEach((branch, i) => {
        if (branch.getBoundingClientRect().top < branchGrowStart) {
          passed++;
        }
      });
      setActiveItems(passed);
    };
    window.addEventListener("scroll", handleRootScroll);
    return () => window.removeEventListener("scroll", handleRootScroll);
  });

  return (
    <React.Fragment>
      <div className="tree">
        <div className="root" />
        <div className="bark" style={{ height: barkLength }} />
        <div className="bark outline" />
        <div className="branches">
          {data.map((item, i) => {
            const even = i % 2 == 0;
            const reveal = activeItems >= i;
            return (
              <div
                className="branch-wrapper"
                key={i}
                style={{ gridArea: miniScreen ? "" : branchPositions[i] }}
              >
                <LeafInfo even={even} data={item} reveal={reveal} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tree;
