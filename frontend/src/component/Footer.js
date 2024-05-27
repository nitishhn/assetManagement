import "./Footer.css";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faGem,
  faHome,
  faEnvelope,
  faPhone,
  faPrint,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-light text-muted py-5">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <div className="mb-4">
              <h5 className="text-uppercase mb-3">
                <FontAwesomeIcon icon={faGem} className="me-2" />
                Asset Management
              </h5>
              <p>
                Asset Management: Assets represent a significant portion of a
                company's investment. Proper management ensures optimal
                utilization, which can lead to cost savings and improved
                financial performance.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="mb-4">
              <h5 className="text-uppercase mb-3">Reach Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Telegram</a>
                </li>
                <li>
                  <a href="#">Whatsapp</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="mb-4">
              <h5 className="text-uppercase mb-3">Useful Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <div className="mb-4">
              <h5 className="text-uppercase mb-3">For More Details</h5>
              <ul className="list-unstyled">
                <li>
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  Shivaji Circle Mudhol 587313
                </li>
                <li>
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                  nitishnalatawad111@gmail.com
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} className="me-2" />+ 91
                  8197939393
                </li>
                <li>
                  <FontAwesomeIcon icon={faPrint} className="me-2" />+ 91 234
                  6838648
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="text-center mt-4">
        <a href="#" className="me-4 text-reset">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="me-4 text-reset">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="me-4 text-reset">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
        <a href="#" className="me-4 text-reset">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="me-4 text-reset">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="me-4 text-reset">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="text-center mt-4">
        &copy; 2022 - <span className="fw-bold">Asset Management </span> | All
        Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
