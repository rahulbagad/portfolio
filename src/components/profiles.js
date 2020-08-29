import React from "react";
import { useStaticQuery } from "gatsby";
import Button from "./button";
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { FaStackOverflow, FaLinkedin } from "react-icons/fa";

const Profiles = () => {
  const PROFILE_DATA = graphql`
    {
      site {
        siteMetadata {
          social {
            github
            linkedin
            instagram
            stackoverflow
            email
            twitter
          }
        }
      }
    }
  `;
  const data = useStaticQuery(PROFILE_DATA);
  const { social } = data.site.siteMetadata;
  return (
    <span style={{ display: "inline" }}>
      <Button
        title="GitHub"
        aria-label="Link to my GitHub"
        as="a"
        circular
        href={social.github}
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
        href={social.stackoverflow}
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
        href={social.linkedin}
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
        href={social.instagram}
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
        href={social.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMail />
      </Button>
    </span>
  );
};

export default Profiles;
