import React from "react";
import Image from "next/image";

import "./Project.css";

export interface ProjectProp {
  name: string;
  url: string;
  description: string;
  active: boolean;
  image: string;
}

const Project: React.FunctionComponent<ProjectProp> = (props) => {
  const { name, url, description, active, image } = props;

  return (
    <div className="project" style={{ display: active ? "flex" : "none" }}>
      <div className="fake-website">
        <div className="fake-navbar">
          <div
            className="fake-button"
            style={{ backgroundColor: "#ff4e4e" }}
          ></div>
          <div
            className="fake-button"
            id="minimize"
            style={{ backgroundColor: "#ff9d42" }}
          ></div>
          <div
            className="fake-button"
            id="maximize"
            style={{ backgroundColor: "#00c711" }}
          ></div>
        </div>
        <div className="image">
          <Image src={image} alt="web image" height={400} width={600} />
          <a href={url} target="_blank" />
        </div>
      </div>
      <div className="description">
        <div className="intro gradient-text">
          <p>{`${name} //`}</p>
        </div>
        <div className="text">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
