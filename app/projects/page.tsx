"use client";

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import Project from "@/components/Project/Project";

import styles from "./projects.module.css";

const projectsList = [
  {
    id: "live-loop",
    name: "Live Loop",
    start: "Apr 2022",
    end: "Jun 2022",
    url: "https://github.com/KenKaiZhang/LiveLoop",
    description:
      "An application developed to track the loop buses in UCSC. By receiving \
      live data from GPSs attached to each bus, the application is able to show \
      their location on campus.\n \
      Inactive due to the school revoking GPS access.",
    image: "/png/websites/live_loop.png",
  },
  {
    id: "unbounded",
    name: "unBounded",
    start: "Jan 2023",
    end: "Present",
    url: "https://unboundedsw.com",
    description:
      "A platform for hosting products from international clothing brands. \
      This website was developed with the goal of exposing culture through fashion by \
      exposing potential customers to learn and participate in fashion through a \
      credible source.",
    image: "/png/websites/unBounded.png",
  },
];

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

export interface ProjectsProp {
  active: boolean;
}

const Projects: React.FunctionComponent<ProjectsProp> = (props) => {
  const { active } = props;

  const [activeProject, setActiveProject] = useState(projectsList[0].id);

  return (
    <motion.section
      className={styles.projectsSection}
      id="projects-section"
      data-page="projects"
      initial="hidden"
      whileInView="visible"
    >
      <div className={styles.triangle}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
      <div className={styles.projectsContent}>
        <div
          className={styles.projectTitle}
          style={{ display: active ? "flex" : "none" }}
        >
          <h1>Projects...</h1>
        </div>
        <div className={styles.projects}>
          {projectsList.map((proj, i) => {
            return (
              <React.Fragment key={i}>
                <Project
                  name={proj.name}
                  url={proj.url}
                  description={proj.description}
                  image={proj.image}
                  active={activeProject === proj.id ? true : false}
                />
              </React.Fragment>
            );
          })}
        </div>
        <motion.div
          className={styles.navigation}
          variants={variants}
          initial="hidden"
          whileInView="visible"
        >
          {projectsList.map((proj, i) => {
            return (
              <li
                key={i}
                id={proj.id}
                onClick={() => setActiveProject(proj.id)}
                className={activeProject === proj.id ? styles.active : ""}
              >
                <p>
                  {`${proj.name}`}
                  <span>{` - ${proj.start}/${proj.end}`}</span>
                </p>
              </li>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
