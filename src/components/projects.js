import React from "react";
import { Divider, Card, Text, Badge } from "theme-ui";
import Button from "./button";
import { FiExternalLink } from "react-icons/fi";

const Projects = ({ projects, colorMode }) => {
  return (
    <section style={{ paddingTop: 50, paddingBottom: 50 }}>
      <h3>Projects</h3>
      <Divider />
      <div>
        {projects.map((project) => (
          <Card
            sx={{
              maxWidth: 960,
              marginBottom: 10,
              marginTop: 10,
              backgroundColor: colorMode === "dark" ? "#111" : "#f7f7f7",
              padding: 10,
              display: "inline-block",
              borderRadius: 5,
              boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
            }}
          >
            <Text
              sx={{
                color: colorMode === "dark" ? "white" : "black",
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {project.title}
              <Button
                title="Link"
                aria-label="Project Github Link"
                as="a"
                circular
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink />
              </Button>
            </Text>
            <Text
              sx={{
                color: colorMode === "dark" ? "white" : "black",
                fontWeight: "lighter",
                fontSize: 16,
              }}
            >
              {project.description}
            </Text>
            {project.technologies.map((tech) => (
              <Badge sx={{ border: 5, margin: 1, backgroundColor: "#9f7aea" }}>
                {tech}
              </Badge>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
