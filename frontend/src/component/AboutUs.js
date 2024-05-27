/*  import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  function buttonClick() {
    navigate("/");
  }

  return (
    <div
      style={{
        backgroundColor: "LightBlue",
        padding: "10px",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>About Page</h1>

      <p>
        Welcome to Hexaware, your trusted partner in IT asset management
        solutions. At Hexaware, we understand the critical role that IT assets
        play in the success of your business. That's why we are dedicated to
        providing comprehensive and efficient solutions to help you manage your
        IT assets effectively.
      </p>

      <h2>Our Mission</h2>

      <p>
        Our mission at Hexaware is to empower businesses of all sizes to
        optimize their IT asset management processes. We strive to deliver
        innovative solutions that simplify asset tracking, increase operational
        efficiency, and reduce costs.
      </p>

      <p>
        Our Asset management company dedicated to helping businesses thrive in
        the digital age. With a focus on innovation, collaboration, and
        excellence, we specialize in delivering tailored solutions that drive
        growth, efficiency, and success.
      </p>
      <p>
        We envision a future where every business has access to innovative and
        reliable software solutions that propel them towards their goals.
        Through our expertise and passion for technology, we strive to be the
        catalyst for positive change and digital transformation.
      </p>

      <button onClick={buttonClick}>Back</button>
    </div>
  );
}

export default About;

*/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function About() {
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <Row className="justify-content-center align-items-center">
          <Col xs="auto" className="text-center">
            <div className="title-holder">
              <h2>About Us</h2>
            </div>

            <div className="subtitle">learn more about us</div>
          </Col>
        </Row>
        <br />
        <Row className="align-items-center">
          <Col sm={6}>
            <Image
              src="https://tannergrey.com/wp-content/uploads/2020/04/about-us.png"
              fluid
              style={{ maxHeight: "350px" }}
            />
          </Col>
          <Col sm={6}>
            <p>
              Welcome to Hexaware, your trusted partner in IT asset management
              solutions. At Hexaware, we understand the critical role that IT
              assets play in the success of your business. That's why we are
              dedicated to providing comprehensive and efficient solutions to
              help you manage your IT assets effectively.
            </p>

            <p>
              Our mission at Hexaware is to empower businesses of all sizes to
              optimize their IT asset management processes. We strive to deliver
              innovative solutions that simplify asset tracking, increase
              operational efficiency, and reduce costs.
            </p>
            <p>
              Our Asset management company dedicated to helping businesses
              thrive in the digital age. With a focus on innovation,
              collaboration, and excellence, we specialize in delivering
              tailored solutions that drive growth, efficiency, and success.
            </p>
            <p>
              We envision a future where every business has access to innovative
              and reliable software solutions that propel them towards their
              goals. Through our expertise and passion for technology, we strive
              to be the catalyst for positive change and digital transformation.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
