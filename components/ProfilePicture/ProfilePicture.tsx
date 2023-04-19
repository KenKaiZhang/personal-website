import React from "react";
import Image from "next/image";

import "./ProfilePicture.css";

export interface PfpProps {
  src: string;
  height: number;
  width: number;
  radius: string;
}

const ProfilePicture: React.FunctionComponent<PfpProps> = (props) => {
  const { src, height, width, radius } = props;

  return <Image id="pfp" src={src} alt="pfp" height={height} width={width} />;
};

export default ProfilePicture;
