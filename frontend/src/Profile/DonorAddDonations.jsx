import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DonorProfileSideBar from "./DonorProfileSideBar";
import Createdonations from "./Createdonations";

const DonorAddDonations = () => {
  return (
    <Container fluid>
      <Row className="donor-add-donations-row">
        {/* Side bar */}
        <Col md="2" className="donor-prof-sidebar">
          <DonorProfileSideBar />
        </Col>

        <Col>
          <Createdonations />
        </Col>
      </Row>
    </Container>
  );
};

export default DonorAddDonations;
