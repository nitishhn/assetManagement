import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    title: "Physical Asset Management:",
    description:
      "Physical asset management involves the management of tangible assets such as machinery, equipment, buildings, infrastructure, and other physical resources. It includes activities such as maintenance, inspection, repair, replacement, and disposal to ensure that assets are utilized efficiently throughout their lifecycle.",
  },

  {
    id: 2,
    title: "Digital Asset Management",
    description:
      "digital asset management involves the management of tangible assets such as machinery, equipment, buildings, infrastructure, and other physical resources. It includes activities such as maintenance, inspection, repair, replacement, and disposal to ensure that assets are utilized efficiently throughout their lifecycle.",
  },
  {
    id: 3,
    title: "Financial Asset Management",
    description:
      "financial asset management involves the management of tangible assets such as machinery, equipment, buildings, infrastructure, and other physical resources. It includes activities such as maintenance, inspection, repair, replacement, and disposal to ensure that assets are utilized efficiently throughout their lifecycle.",
  },
  {
    id: 4,
    title: "IT Asset Management",
    description:
      "IT asset management involves the management of tangible assets such as machinery, equipment, buildings, infrastructure, and other physical resources. It includes activities such as maintenance, inspection, repair, replacement, and disposal to ensure that assets are utilized efficiently throughout their lifecycle.",
  },
];

export default function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder d-flex flex-column align-items-center">
          <h2>Our services</h2>
          <div className="subtitle">Services we provide</div>
        </div>
        <Row>
          {servicesData.map((services) => {
            return (
              <Col sm={3} className="holder">
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
