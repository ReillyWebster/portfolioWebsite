import { Grid, Header, Image, List, Segment } from "semantic-ui-react";

export const About: React.FC = () => {
  return (
    <Segment>
      <Grid divided inverted>
        <Grid.Row stretched>
          <Grid.Column textAlign="center">
            <Segment basic>
              <Image src="/images/reilly.jpg" size="medium" circular centered />
              <Segment basic>
                <Header as="h1">Reilly Webster</Header>
                <List size="large">
                  <List.Item>
                    <List.Content>
                      <List.Icon name="file pdf" />
                      <a
                        href="/resources/resumeReillyWebster.pdf"
                        target="_blank"
                      >
                        Resume
                      </a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Icon name="users" />
                      <a
                        href="https://www.torqit.ca/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Torq IT Limited
                      </a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Icon name="marker" />
                      <a
                        href="https://goo.gl/maps/YDAzdX4AgUMVxmKc6"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Charlottetown, PE
                      </a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Icon name="mail" />
                      <a href="mailto:rwebster_33@hotmail.com">
                        rwebster_33@hotmail.com
                      </a>
                    </List.Content>
                  </List.Item>
                </List>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default About;
