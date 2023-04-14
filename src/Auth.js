import React from "react";
import logo from "./logo.png";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "./styles/auth.css";
import { FaUserAlt } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { InputGroup } from "react-bootstrap";

export default function (props) {
  return (
    <>
      <div className="animated-background">
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={4} xs={12}>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-2">
                    <div className="containerImage">
                      <img src={logo} alt="logo" />
                    </div>

                    <div className="mt-3">
                      <Form>
                        <Form.Group className="m-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email address
                          </Form.Label>

                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">
                              <FaUserAlt id='icon' />
                            </InputGroup.Text>
                            <Form.Control
                              type="email"
                              placeholder="Enter email"
                              required
                            />
                          </InputGroup>
                        </Form.Group>

                        <Form.Group
                          className="m-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon2">
                              <RiLockPasswordFill id="icon"/>
                            </InputGroup.Text>
                            <Form.Control
                              type="password"
                              placeholder="Enter password"
                              required
                            />
                          </InputGroup>
                        </Form.Group>
                        <div className="d-grid mt-4">
                          <Button variant="primary" type="submit">
                            Login
                          </Button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
