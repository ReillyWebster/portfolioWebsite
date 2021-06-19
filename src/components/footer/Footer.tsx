import { Container, Divider, Header, List, Segment } from "semantic-ui-react";

export const Footer: React.FC = () => {
  return (
    <Segment inverted vertical>
      <Container textAlign="center">
        <List link inverted horizontal relaxed>
          <List.Item
            href="https://github.com/ReillyWebster?tab=repositories"
            target="_blank"
            as="a"
          >
            <List.Icon name="github" size="huge" />
          </List.Item>
          <List.Item
            href="https://www.linkedin.com/in/reilly-webster-a61388171/"
            target="_blank"
            as="a"
          >
            <List.Icon name="linkedin" size="huge" />
          </List.Item>
          <List.Item href="mailto:rwebster_33@hotmail.com" as="a">
            <List.Icon name="mail" size="huge" />
          </List.Item>
        </List>
        <Divider inverted section />
        <Header inverted>Reilly Webster @2021</Header>
      </Container>
    </Segment>
  );
};

export default Footer;
