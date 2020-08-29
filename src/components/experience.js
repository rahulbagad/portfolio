import React from "react";
import { Divider, Card } from "theme-ui";

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
    <Card style={{padding: 10}}>
      <span style={{fontWeight: "bold", fontSize: 17}}>{experience.role}</span> {" | "}
      <span style={{fontWeight: "bold", fontSize: 15}}>
        <a href={experience.website} target="_blank">
          {experience.company}
        </a>
      </span>
      <span style={{ float: "right", fontSize: 16 }}>
        {experience.from} - {experience.to}
      </span>
      {experience.description.map((desc) => (
        <ul>
          <li style={{fontSize: 16}}>{desc}</li>
        </ul>
      ))}
      {experience.work && (
        <ul>
          <li  style={{fontSize: 16}}>My work majorly involved</li>
          {experience.work.map((desc) => (
            <ul>
              <li style={{fontSize: 16}}>{desc}</li>
            </ul>
          ))}
        </ul>
      )}
    </Card>
  );
};
export default Experience;
