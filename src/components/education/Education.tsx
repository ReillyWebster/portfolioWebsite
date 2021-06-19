import { Table, Image, Header } from "semantic-ui-react";

const schools = [
  {
    file: "/resources/diplomaReillyWebster.pdf",
    logo: "/images/hollandCollege.png",
    website: "https://www.hollandcollege.com/",
    name: "Holland College",
    certificate: "Computer Programmer Analyst Diploma",
    dates: "2018-2020",
  },
];

export const Education: React.FC = () => {
  return (
    <Table>
      <Table.Body>
        {schools.map((school) => (
          <Table.Row key={school.name} textAlign="center">
            <Table.Cell>
              <a href={school.website} target="_blank" rel="noreferrer">
                <Image src={school.logo} size="tiny" centered />
              </a>
            </Table.Cell>
            <Table.Cell>
              <Header>{school.name}</Header>
            </Table.Cell>

            <Table.Cell>{school.certificate}</Table.Cell>
            <Table.Cell>{school.dates}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default Education;
