import React from "react";
import { Divider, Badge } from "theme-ui";

const Skills = ({ skills }) => {
  return (
    <section style={{ paddingTop: 50, paddingBottom: 50 }}>
      <h3>Skills</h3>
      <Divider />
      <div>
        {skills.map((skill) => 
          <Badge sx={{ border: 5, margin: 1, backgroundColor: "#f5aa31", fontSize: 14, fontWeight: "bold" }}>
            {skill}
          </Badge>
        )}
      </div>
    </section>
  );
};

export default Skills;
