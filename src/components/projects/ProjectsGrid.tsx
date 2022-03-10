import { Card, Segment } from "semantic-ui-react";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";

const projects: ProjectCardProps[] = [
  {
    title: "Were The Wolf Wanders",
    yearCreated: "2022",
    description:
      "Created using Unity for Ubisoft Halifax's Atlantic Game Jam 2022 Game Jam.",
    languages: "C#",
    software: "Unity, Ableton, ",
    imageSrc: "/images/wereTheWolfWanders.png",
    link: "https://casslmann.itch.io/were-the-wolf-wonders",
    repo: "https://github.com/ReillyWebster/wereTheWolfWanders",
    contributors:
      "Arjun Banga, Cassie Mann, Justin Irving, Liam Rice, Reilly Webster, Tanner Murphy",
  },
  {
    title: "Miner Inconvenience",
    yearCreated: "2021",
    description:
      "Created using Godot's game engine for GameDev.tv's 2021 Game Jam.",
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
