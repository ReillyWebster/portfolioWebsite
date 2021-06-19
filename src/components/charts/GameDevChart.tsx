import { Card, Progress, Segment } from "semantic-ui-react";
import styles from "./Charts.module.css";

export const GameDevChart: React.FC = () => {
  return (
    <Card className={styles.noBoxShadow}>
      <Card.Header as="h1" textAlign="center">
        Game Programming
      </Card.Header>
      <Segment basic inverted>
        <Progress
          value={100}
          total={100}
          inverted
          color="green"
          label="Unity - C#"
        />
        <Progress
          value={100}
          total={100}
          inverted
          color="green"
          label="Godot - GD Script"
        />
        <Progress
          value={100}
          total={100}
          inverted
          color="green"
          label="GameMaker Studio - GML"
        />
      </Segment>
    </Card>
  );
};

export default GameDevChart;
