import { Card, Icon, Image } from "semantic-ui-react";

export interface ProjectCardProps {
  title: string;
  yearCreated: string;
  description: string;
  languages: string;
  software: string;
  imageSrc: string;
  link: string;
  repo?: string;
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
        <a href={project.link} target="_blank">
          Link
        </a>
      </Card.Content>
      <Card.Content>
        <Icon name="github" />
        {project.repo ? (
          <a href={project.repo} target="_blank">
            Github Repository
          </a>
        ) : (
          <>Private Repository</>
        )}
      </Card.Content>
      <Card.Content>
        <div style={{ height: "60px" }}>
          <Icon name="users" />
          {project.contributors}
        </div>
      </Card.Content>
    </Card>
  );
};

export default ProjectCard;
