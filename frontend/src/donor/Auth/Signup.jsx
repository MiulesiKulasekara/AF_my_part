import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Signup = () => {
  return (
    <div className="main-container">
      <div className="signup-div">
        <Row>
          <Col className="signup-colA" md="6"></Col>

          <Col className="signup-colB" md="6">
            <Form className="signup-frm">
              <h2>Sign up - Donor</h2>

              {/* form lables */}

              {/* name */}
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name" required />
              </Form.Group>

              {/* email */}
              <Row>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  lmd="6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                {/* password */}
                <Form.Group
                  className="mb-3"
                  as={Col}
                  lmd="6"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                </Form.Group>
              </Row>

              {/* address */}
              <Form.Group className="mb-3" controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter address"
                  required
                />
              </Form.Group>

              {/* Location */}
              <Form.Group className="mb-3" controlId="formBasicLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Location" required />
              </Form.Group>

              {/* phone 1 */}
              <Row>
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="6"
                  controlId="formBasicphoneA"
                >
                  <Form.Label>Phone number 1</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="94 77 111 2223"
                    pattern="94 [0-9]{2} [0-9]{3} [0-9]{4}"
                    required
                  />
                </Form.Group>

                {/* phone 2 */}
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="6"
                  controlId="formBasicphoneB"
                >
                  <Form.Label>Phone number 2</Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="94 77 111 2223(Optional)"
                    pattern="94 [0-9]{2} [0-9]{3} [0-9]{4}"
                  />
                </Form.Group>
              </Row>

              {/* button */}
              <div className="signup-btn">
                <Button type="submit" id="formSignupBtn">Sign up</Button>
              </div>

              <div className="signup-text">
                <small>
                  Already have an account? <a href="/login">Login</a>
                </small>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Signup;
