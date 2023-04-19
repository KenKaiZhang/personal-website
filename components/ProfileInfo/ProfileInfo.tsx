import React from "react";

import "./ProfileInfo.css";

const ProfileInfo: React.FunctionComponent = () => {
  return (
    <div className="info">
      <p>
        Born in Taipei, Taiwan in 2002, I am a new Computer Science graduate
        from the University of California - Santa Cruz.
      </p>
      <p>
        Well-organized, adaptive, critical thinker, collaborative, and
        independent describe who I am as an individual. My hobbies include
        working out, gaming, and making content.
      </p>
      <p>
        Currently interested in any frontend related positions, working on my
        own website unBounded, and continuously expanding my knowledge and
        skills.
      </p>
      <p>Here are a few technologies I have been working with:</p>
      <div className="technologies gradient-text">
        <li>JavaScript (ES6+)</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>HTML5</li>
        <li>CSS</li>
        <li>Python</li>
        <li>Git</li>
      </div>
    </div>
  );
};

export default ProfileInfo;
