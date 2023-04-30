import "./style.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Login = () => {
  return (
    <div className="main-container-login">
      <div className="login-div">
        <Row>
          <Col className="login-colA" md="6"></Col>

          <Col className="login-colB" md="6">
            <Form className="login-frm">
              <h2>Sign in</h2>

              {/* form lables */}

              {/* email */}
              <Form.Group
                className="mb-3"
                as={Col}
                lmd="6"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
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
                  placeholder="Enter password"
                  required
                />
              </Form.Group>

              {/* button */}
              <div className="login-btn">
                <Button type="submit" id="formLoginBtn">
                  Sign in
                </Button>
              </div>

              <div className="login-text">
                <small>
                  Don't have an account? <a href="/signup/donor">Sing up</a>
                </small>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
