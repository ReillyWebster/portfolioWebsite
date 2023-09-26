import { Container, Header, Menu, Segment } from "semantic-ui-react";

export const Navbar: React.FC = () => {
  return (
    <Segment inverted vertical>
      <Container>
        <Menu inverted pointing secondary>
          <Menu.Item position="left">
            <Header as="h1" inverted>
              Reilly Webster
            </Header>
          </Menu.Item>
          {/* <Menu.Item position="right" name="about">
            About
          </Menu.Item>
          <Menu.Item>Experience</Menu.Item>
          <Menu.Item name="education">Education</Menu.Item>
          <Menu.Item name="skills">Skills</Menu.Item>
          <Menu.Item name="projects">Projects</Menu.Item>
          <Menu.Item name="contact">Contact</Menu.Item> */}
        </Menu>
      </Container>
    </Segment>
  );
};

export default Navbar;
