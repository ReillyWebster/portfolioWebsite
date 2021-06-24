import { Card, Progress, Segment } from "semantic-ui-react";
import styles from "./Charts.module.css";

export const WebDevChartBackend: React.FC = () => {
  return (
    <Card className={styles.noBoxShadow}>
      <Card.Header as="h1" textAlign="center">
        Web - Backend
      </Card.Header>
      <Segment inverted>
        <Progress value={100} total={100} inverted color="purple" label="C#" />
        <Progress value={100} total={100} inverted color="purple" label="SQL" />
        <Progress
          value={100}
          total={100}
          inverted
          color="purple"
          label="ASP.NET"
        />
        <Progress
          value={100}
          total={100}
          inverted
          color="purple"
          label="Razor"
        />
        <Progress
          value={100}
          total={100}
          inverted
          color="purple"
          label="jQuery"
        />
        <Progress
          value={100}
          total={100}
          inverted
          color="purple"
          label="Google Firebase"
        />
      </Segment>
    </Card>
  );
};

export default WebDevChartBackend;
