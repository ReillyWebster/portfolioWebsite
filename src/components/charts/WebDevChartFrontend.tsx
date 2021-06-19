import { Card, Progress, Segment } from "semantic-ui-react";
import styles from "./Charts.module.css";

export const WebDevChartFrontend: React.FC = () => {
  return (
    <Card className={styles.noBoxShadow}>
      <Card.Header as="h1" textAlign="center">
        Web - Frontend
      </Card.Header>
      <Segment inverted>
        <Progress
          value={100}
          total={100}
          inverted
          color="red"
          label="TypeScript"
        />
        <Progress
          value={100}
          total={100}
          inverted
          color="red"
          label="JavaScipt"
        />
        <Progress value={100} total={100} inverted color="red" label="CSS" />
        <Progress
          value={100}
          total={100}
          inverted
          color="red"
          label="Bootstrap"
        />
        <Progress value={100} total={100} inverted color="red" label="React" />
      </Segment>
    </Card>
  );
};

export default WebDevChartFrontend;
