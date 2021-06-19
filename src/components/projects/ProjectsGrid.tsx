import { Card, Segment } from "semantic-ui-react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Miner Inconvenience",
    yearCreated: "2021",
    description:
      "A game created using Godot's game engine for GameDev.tv's 2021 Game Jam.",
    languages: "GD Script",
    software: "Godot",
    imageSrc: "/images/minerInconvenience.png",
    link: "https://strudlay.itch.io/miner-inconvenicence",
    repo: "https://github.com/ReillyWebster/minerInconvenience",
    contributors: "Marc Blanchard, Reilly Webster",
  },
  {
    title: "Portfolio Website",
    yearCreated: "2021",
    description: "This portfolio website hosted on Google Firebase.",
    languages: "React, Typescript, Semantic UI React",
    software: "VS Code, Firebase",
    imageSrc: "/images/portfolioWebsite.png",
    link: "/",
    repo: "https://github.com/ReillyWebster/portfolioWebsite",
    contributors: "Reilly Webster",
  },
];

export const ProjectsGrid: React.FC = () => {
  return (
    <Segment>
      <Card.Group centered>
        {projects.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </Card.Group>
    </Segment>
  );
};

export default ProjectsGrid;
