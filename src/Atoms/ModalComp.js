import React from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HowToRegRoundedIcon from "@mui/icons-material/HowToRegRounded";
import Form from "react-bootstrap/Form"

function ModalComp({ show, handleClose, className ,email,select, nemail,nselect,handleInput,addData}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      className={className}
      size="lg"
    >
      <Card sytle={{ display: "flex", flexDirection: "row"}}>
        <Row>
          <Col lg={5}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:"column",
                padding:"10px",
                backgroundColor:"#f28080"
              }}
            >
              <HowToRegRoundedIcon sx={{ fontSize: "250px",color:"white" }} />
              <p style={{textAlign:"center",color:"white"}} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </p>
            </div>
          </Col>
          <Col lg={7}>
            <Card.Body>
              <div style={{display:"flex",flexDirection:"Column",justifyContent:"center",height:"400px"}} >
              <Card.Title>User Information</Card.Title>
              <Form.Label className="my-2" >Email id of User</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleInput} name={nemail} />
              <Form.Label className="my-2" >Role</Form.Label>
              <Form.Select aria-label="Default select example" style={{width:"50%"}} name={nselect}  value={select} onChange={handleInput}>
                 <option>Select</option>
                 <option value="Admin">Admin</option>
                 <option value="Employee">Employee</option>
                 <option value="Trainee">Trainee</option>
              </Form.Select>
              <div className="mx-5" >
              <Button variant="warning" style={{color:"white",width:"100px"}} className="m-5" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="success" style={{width:"100px"}} onClick={addData}>
                Add
              </Button>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Modal>
  );
}

export default ModalComp;
