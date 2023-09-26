import { Card, Segment } from "semantic-ui-react";
import GameDevChart from "../charts/GameDevChart";
import WebDevChartBackend from "../charts/WebDevChartBackend";
import WebDevChartFrontend from "../charts/WebDevChartFrontend";

export const SkillsGrid: React.FC = () => {
  return (
    <Segment textAlign="center">
      <Card.Group centered>
        <WebDevChartFrontend />
        <WebDevChartBackend />
        <GameDevChart />
      </Card.Group>
    </Segment>
  );
};

export default SkillsGrid;
