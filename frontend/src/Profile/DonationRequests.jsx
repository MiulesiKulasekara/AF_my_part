import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DonorProfileSideBar from "./DonorProfileSideBar";
import DonorRequests from "./DonorRequests";

const DonationRequests = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <Row>
            {/* Side bar */}
            <Col md={2} className="donor-prof-sidebar">
              <DonorProfileSideBar />
            </Col>

            <Col>
              <DonorRequests />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DonationRequests;
