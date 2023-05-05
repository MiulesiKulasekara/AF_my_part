import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DonationItem from "./DonationItem";
import DonorProfileTopBar from "./DonorProfileTopBar";
import DonorProfileSideBar from "./DonorProfileSideBar";


const DonorProfile = () => {
  return (
    <Container fluid>
      
      {/* main row */}
      <Row className="donor-prof-row">

        {/* Side bar */}
        <Col md={2} className="donor-prof-sidebar">
          <DonorProfileSideBar/>
        </Col>

        {/* content */}
        <Col className="donor-prof-content">
          {/* top bar */}
          <Row>
            <DonorProfileTopBar/>
          </Row>

          {/* table */}
          <Row>
            <DonationItem/>
          </Row>
        </Col>
      </Row>


    </Container>
  );
};
export default DonorProfile;
