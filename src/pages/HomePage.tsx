import { Header, Icon, Segment } from "semantic-ui-react";
import { About } from "../components/about/About";
import Education from "../components/education/Education";
import Experience from "../components/experience/Experience";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import SkillsGrid from "../components/skills/SkillsGrid";

export const HomePage: React.FC = () => {
  return (
    <Segment basic>
      <Segment inverted color="black" basic>
        <Header as="h1">
          <Icon name="user" circular />
          About
        </Header>
        <About />
      </Segment>
      <Segment inverted color="black" basic>
        <Header as="h1">
          <Icon name="briefcase" circular />
          Experience
        </Header>
        <Experience />
      </Segment>
      <Segment inverted color="black" basic>
        <Header as="h1">
          <Icon name="graduation cap" circular />
          Education
        </Header>
        <Education />
      </Segment>
      <Segment inverted color="black" basic>
        <Header as="h1">
          <Icon name="code" circular />
          Skills
        </Header>
        <SkillsGrid />
      </Segment>
      <Segment inverted color="black" basic>
        <Header as="h1">
          <Icon name="folder" circular />
          Projects
        </Header>
        <ProjectsGrid />
      </Segment>
    </Segment>
  );
};

export default HomePage;
