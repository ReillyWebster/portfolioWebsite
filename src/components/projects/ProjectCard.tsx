import { Card, Icon, Image } from "semantic-ui-react";

export interface ProjectCardProps {
  title: string;
  yearCreated: string;
  description: string;
  languages: string;
  software: string;
  imageSrc: string;
  link: string;
  repo: string;
  contributors: string;
}

export interface Project {
  project: ProjectCardProps;
}

export const ProjectCard: React.FC<Project> = ({ project }) => {
  return (
    <Card>
      <Image src={project.imageSrc} fluid />
      <Card.Content>
        <Card.Header>{project.title}</Card.Header>
        <Card.Meta>
          <span>{project.yearCreated}</span>
        </Card.Meta>
        <Card.Description>{project.description}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Icon name="desktop" />
        {project.software}
      </Card.Content>
      <Card.Content>
        <Icon name="code" />
        {project.languages}
      </Card.Content>
      <Card.Content>
        <Icon name="linkify" />
        <a href={project.link} target="noreferrer">
          Link
        </a>
      </Card.Content>
      <Card.Content>
        <Icon name="github" />
        <a href={project.repo} target="noreferrer">
          Github Repository
        </a>
      </Card.Content>
      <Card.Content>
        <Icon name="users" />
        {project.contributors}
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
