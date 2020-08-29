import React from "react";
import Button from "./button";
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { FaStackOverflow, FaLinkedin } from "react-icons/fa";

const Profiles = ({ socialProfiles }) => {
  return (
    <span style={{ display: "inline" }}>
      <Button
        title="GitHub"
        aria-label="Link to my GitHub"
        as="a"
        circular
        href={socialProfiles.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub />
      </Button>
      <Button
        title="Stackoverflow"
        aria-label="Link to my Stackoverflow"
        as="a"
        circular
        href={socialProfiles.stackoverflow}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaStackOverflow />
      </Button>
      <Button
        title="LinkedIn"
        aria-label="Link to my LinkedIn profile"
        as="a"
        circular
        href={socialProfiles.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </Button>
      <Button
        title="Instagram"
        aria-label="Link to my Instagram"
        as="a"
        circular
        href={socialProfiles.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiInstagram />
      </Button>
      <Button
        title="Good old email"
        aria-label="Email me"
        as="a"
        circular
        href={socialProfiles.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMail />
      </Button>
    </span>
  );
};

export default Profiles;
