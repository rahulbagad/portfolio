import React from "react";
import { Divider } from "theme-ui";

const Experience = ({ experiences }) => {
  return (
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <h3>Experience</h3>
      <Divider />
      {experiences.map((experience) => row(experience))}
    </div>
  );
};

const row = (experience) => {
  return (
    <div style={{ padding: 10 }}>
      <div style={{ fontSize: 18, fontWeight: "bold" }}>
        {experience.role}{" "}
        <span style={{ fontWeight: "lighter" }}>{"  |  "}</span>{" "}
        <span style={{ fontSize: 17 }}>
          <a href={experience.website} target="_blank" rel="noreferrer">
            {experience.company}
          </a>
        </span>
      </div>
      <div style={{ fontSize: 17, fontWeight: "lighter" }}>
        {experience.from} - {experience.to}
      </div>
      <blockquote>
        {experience.description.map((desc) => (
          <div style={{ fontSize: 17, fontWeight: "lighter" }}>
            {"- " + " " + desc}
          </div>
        ))}
        {experience.work && (
          <div style={{ fontSize: 17, fontWeight: "lighter" }}>
            - Majorly my work{" "}
            {experience.to === "Present" ? "involves:" : "involved:"}
          </div>
        )}
        {experience.work &&
          experience.work.map((desc) => (
            <li style={{ fontSize: 17, fontWeight: "lighter", paddingLeft: 8 }}>
              {desc}
            </li>
          ))}
      </blockquote>
    </div>
  );
};

export default Experience;
