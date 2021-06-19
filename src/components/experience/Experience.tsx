import { Table, Image, Header } from "semantic-ui-react";

const jobs = [
  {
    logo: "/images/torq.jpg",
    name: "Torq IT Limited",
    website: "https://www.torqit.ca/",
    position: "Web Developer",
    dates: "2020 to Present",
  },
  {
    logo: "/images/rabbitHole.jpg",
    name: "Rabbit Hole Studios",
    website: "http://rabbitholestudios.ca/",
    position: "Game Developer - OJT Placement",
    dates: "2020 - 2.5 Months",
  },
];

export const Experience: React.FC = () => {
  return (
    <Table>
      <Table.Body>
        {jobs.map((job) => (
          <Table.Row key={job.name} textAlign="center">
            <Table.Cell>
              <a href={job.website} target="_blank" rel="noreferrer">
                <Image src={job.logo} size="tiny" centered />
              </a>
            </Table.Cell>
            <Table.Cell>
              <Header>{job.name}</Header>
            </Table.Cell>
            <Table.Cell>{job.position}</Table.Cell>
            <Table.Cell>{job.dates}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default Experience;
