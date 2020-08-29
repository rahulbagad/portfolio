import React from "react";
import {
  FaJava,
  FaReact,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaFlask,
} from "react-icons/fa";
import Button from "./button";
import { Divider } from "theme-ui";

const Skills = () => {
  return (
    <div>
      <h3>Skills</h3>
      <Divider />
      <div style={{ paddingTop: 20, paddingBottom: 20 }}>
        <Button
          title="Java"
          as="a"
          circular
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaJava />
          <span> Java</span>
        </Button>
        <Button
          title="Python"
          as="a"
          circular
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPython />
          <span> Python</span>
        </Button>
        <Button
          title="ReactJS"
          as="a"
          circular
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaReact />
          <span> ReactJs</span>
        </Button>
        <Button
          title="MongoDB"
          as="a"
          circular
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDatabase />
          <span> MongoDB</span>
        </Button>
        <Button
          title="Flask"
          as="a"
          circular
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFlask />
          <span> Flask</span>
        </Button>
        <Button
          title="Git"
          as="a"
          circular
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGitAlt />
          <span> Git</span>
        </Button>
      </div>
    </div>
  );
};

export default Skills;
