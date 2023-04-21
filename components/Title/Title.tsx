import React from "react";

import "./Title.css";

export interface TitleProp {
  title: string;
  active: boolean;
}

const Title: React.FunctionComponent<TitleProp> = (props) => {
  const { title, active } = props;

  return (
    <React.Fragment>
      <div
        className="blank title"
        style={{ display: active ? "none" : "flex" }}
      />
      <div
        className="title gradient-text"
        style={{ display: active ? "flex" : "none" }}
      >
        <h1>{title}...</h1>
      </div>
    </React.Fragment>
  );
};

export default Title;
