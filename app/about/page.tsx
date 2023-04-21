"use client";

import React from "react";
import { motion } from "framer-motion";
import ProfileInfo from "@/components/ProfileInfo/ProfileInfo";
import ProfilePicture from "@/components/ProfilePicture/ProfilePicture";

import styles from "./about.module.css";
import Corners from "@/components/Corners/Corners";

const About: React.FunctionComponent = (props) => {
  return (
    <section
      className={styles.aboutSection}
      id="about-section"
      data-page="about"
    >
      <div className={styles.aboutContent}>
        <motion.div
          className={styles.profilePicture}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
        >
          <div className={styles.backdrop}>
            <Corners
              margin="0.5em"
              height="98.5%"
              width="98.5%"
              borderColor={""}
              variants={{}}
            />
          </div>
          <ProfilePicture
            src="/svg/zhang_logo_black.svg"
            width={425}
            height={425}
            radius="100%"
          ></ProfilePicture>
        </motion.div>
        <motion.div
          className={styles.profileInfo}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
        >
          <ProfileInfo></ProfileInfo>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
