import "./style.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Createdonations = () => {
  return (
    <div className="main-container-createdonations">
      <Row>
        {/* Form column */}
        <Col md="6" className="colA-createdonations">
          <Form className="donation-frm">
            <h2>Create a Donation</h2>

            {/* form lables */}

            {/* food*/}
            <Form.Group
              className="mb-3"
              as={Col}
              lmd="6"
              controlId="formBasicFood"
            >
              <Form.Control
                type="text"
                placeholder="Donate dry food"
                required
              />
            </Form.Group>

            <Row>
              {/*quatity*/}
              <Form.Group
                className="mb-3"
                as={Col}
                md="6"
                controlId="formBasicQuantity"
              >
                <Form.Control type="number" placeholder="Quantity" required />
              </Form.Group>

              {/*unit*/}
              <Form.Group
                className="mb-3"
                as={Col}
                md="6"
                controlId="formBasicUnit"
              >
                <Form.Select aria-label="Default select example">
                  <option value="Kg">Kg</option>
                  <option value="Leters">Leters</option>
                  <option value="Packets">Packets</option>
                  <option value="Botteled">Botteles</option>
                  <option value="Items">Items</option>
                </Form.Select>
              </Form.Group>
            </Row>

            {/*expire date*/}

            <Form.Group className="mb-3" as={Col} controlId="formBasicExpdate">
              <Form.Control type="date" placeholder="Expire date" required />
            </Form.Group>

            {/* button */}
            <div className="donation-save-btn">
              <Button id="donatinSaveBtn">Save</Button>
            </div>
            <br></br>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={5} placeholder="Description" required/>
            </Form.Group>

            {/* button */}
            <div className="donation-submit-btn">
              <Button type="submit" id="donatinSubmitBtn">
                Create
              </Button>
            </div>
            <br></br>
          </Form>
        </Col>
        {/* Form column */}

        {/* Donation list column column */}
        <Col md="6" className="colB-createdonations">
          <Row className="card-createdonations">
            <Col>Suger</Col>

            <Col>2 packets</Col>

            <Col>2023.05.02</Col>

            <Col>
              <Button>Delete</Button>
            </Col>
          </Row>

          <Row className="card-createdonations">
            <Col>Suger</Col>

            <Col>2 packets</Col>

            <Col>2023.05.02</Col>

            <Col>
              <Button>Delete</Button>
            </Col>
            {/* Donation list column column */}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Createdonations;
