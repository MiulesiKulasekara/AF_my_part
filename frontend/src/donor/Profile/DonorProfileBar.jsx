import "./style.css";
import profile from "../assets/user.png";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const DonorProfileBar = () => {
  return (
    <div className="main-container-donorprofile">
      <Row className="donor-prifile-row">
        <Col md="2" className="donor-prifile-col">
          <Row className="img-row">
            <img className="prof-img" src={profile} alt="profile" />
          </Row>
          <Row className="name-row">
            <div className="prof-name">Imash Nipun</div>
          </Row>
          <Row className="list-row">
            <Col md="3" className="list-col">
              <BsFillPersonFill className="list-icon text-center fs-4" />
            </Col>
            <Col md="9" className="list-col">
              <div className="list-col-text">Profile</div>
            </Col>
          </Row>
          <Row className="list-row">
            <Col md="3" className="list-col">
              <BsFillBalloonHeartFill className="list-icon text-center fs-5" />
            </Col>
            <Col md="9" className="list-col">
              <div className="list-col-text">Donations</div>
            </Col>
          </Row>
          <Row className="list-row">
            <Col md="3" className="list-col">
              <BsBellFill className="list-icon text-center fs-5" />
            </Col>
            <Col md="9" className="list-col">
              <div className="list-col-text">Requests</div>
            </Col>
          </Row>
        </Col>


        <Col>
        jojoo
        </Col>


      </Row>
    </div>
  );
};
export default DonorProfileBar;
