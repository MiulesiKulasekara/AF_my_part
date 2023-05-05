import "./style.css";
// import profile from "../assets/user.png";
import DonorProfileSideBar from "./DonorProfileSideBar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import DonorProfileEditForm from "./DonorProfileEditForm";

const DonorEditProfile = () => {
  return (
    <Container fluid>
      <Row className="donor-edit-prof-row">
        {/* Side bar */}
        <Col md={2} className="donor-prof-sidebar">
          <DonorProfileSideBar />
        </Col>

        <Col>
          <Row>
            <DonorProfileEditForm />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DonorEditProfile;
