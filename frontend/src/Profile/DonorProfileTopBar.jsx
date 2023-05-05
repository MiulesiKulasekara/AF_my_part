import "./style.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const DonorProfileTopBar = () => {
  return (
    <Container fluid>
      <Row>
        <Col md="10">
          <h2>All donations</h2>
        </Col>
        <Col>
          <Button variant="primary">
            <a className="addDonations-btn" href="/donor/create/donations">
              +Add a Donation
            </a>
          </Button>
        </Col>
      </Row>

      <Row>
        <div className="active-pink-3 active-pink-4 mb-4">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
      </Row>
    </Container>
  );
};

export default DonorProfileTopBar;