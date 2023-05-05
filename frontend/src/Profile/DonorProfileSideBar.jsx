import "./style.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import profile from "../assets/user.png";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";

const DonorProfileSideBar = () => {
  return (
    <Container fluid className="donor-profile-side-bar">
        <Row>
          <Col>
            <img src={profile} alt="profile" className="donor-prof-sidebar-img mt-3"/>
            <div><h4 className="mt-3 mb-5 donor-prof-sidebar-name">Shamal Aravinda</h4></div>
          </Col>
        </Row>

        <Row>
          <Col className="ms-4 mt-3 mb-5">
            <BsFillPersonFill className="donor-prof-sidebar-icons"/>
            <Link to="#" className="donor-prof-sidebar-links">
              Profile
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="ms-4 mt-3 mb-5">
            <BsFillBalloonHeartFill className="donor-prof-sidebar-icons"/>
            <Link to="#" className="donor-prof-sidebar-links">
              Donations
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="ms-4 mt-3 mb-5">
            <BsBellFill className="donor-prof-sidebar-icons"/>
            <Link to="#" className="donor-prof-sidebar-links">
              Requests
            </Link>
          </Col>
        </Row>
    </Container>
  );
};
export default DonorProfileSideBar;
