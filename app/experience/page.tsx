"use client";

import React from "react";
import Boxes from "@/components/Boxes/Boxes";
import Title from "@/components/Title/Title";

import styles from "./experience.module.css";
import { useActiveSection } from "@/hooks/useActiveSection";

const experience = [
  {
    company: "Dolby Laboratories",
    position: "Software QA Engineer Intern",
    location: "Sunnyvale, CA",
    start: "Jun 2022",
    end: "Present",
    job: [
      "Developed automation test scripts for Dolby Vision TV SDK for quick and error free Dolby Vision verification tests",
      "Utilized team development tools such as Git to manage and verify code versions",
      "Developed API for communication between Python and required test tools for testing",
      "Wrote easy to understand test procedures for users to follow when using tools",
      "Participated in code reviews and followed an AGILE development process",
    ],
    background: {
      background:
        "url('/dolby_logo.png'), linear-gradient(90deg, #e073f7 0%, #fc9191 50%, #fff281 100%)",
      backgroundSize: "100% 100%",
    },
    //, linearradient('90deg', #e073f7 '0%', #fc9191 '50%', #fff281 '100%')
  },
  {
    company: "UCSC Recreation & Athletics",
    position: "Lifeguard",
    location: "Santa Cruz, CA",
    start: "Jun 2020",
    end: "Jun 2022",
    job: [
      "Rescue distressed swimmers and perform CPR and First-Aid",
      "Enforced pool rule to ensure the safety of people",
      "Developed teamwork skills to provide the best possible treatment during emergencies",
      "Maintain a clean and well-organized pool area by cleaning and maintaining equipment",
      "Assist with the organization and implementation of swimming programs and activities",
    ],
    background: {
      background: "url('/ucsc_logo.png'), #ffffff",
      backgroundSize: "100% 100%",
    },
  },
  {
    company: "The UPS Store",
    position: "Sales Associate",
    location: "San Ramon, CA",
    start: "Sept 2018",
    end: "Jun 2020",
    job: [
      "Provide customer support for any shipment related issues",
      "Operate printing equipment such as printers and laminators to create documents and marketing materials",
      "Maintain an organized and clean store enironment through daily store cleanup and restock",
      "Respond to customer inquiries and resolve complaints in a professional and timely manner",
    ],
    background: {
      background: "url('/ups_logo.png'), #ffffff",
      backgroundSize: "100% 100%",
    },
  },
];

const Experience: React.FunctionComponent = () => {
  const active: boolean = useActiveSection() === "experience" ? true : false;

  return (
    <section
      className={styles.experienceSection}
      id="experience-section"
      data-page="experience"
    >
      <div className={styles.experienceContent}>
        <Title title="Experience" active={active} />
        <Boxes data={experience} />
        {/* <Tree data={experience} /> */}
      </div>
    </section>
  );
};

export default Experience;
