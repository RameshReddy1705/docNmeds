import { Button, Col, Container, Form, Nav, NavDropdown, Offcanvas, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png'
import { FaCartPlus, FaHeart } from 'react-icons/fa';

function Header() {
  return (
      <div>
        {
          ['xxl'].map((expan)=>(
              <Navbar key={expan} expand={expan} className='' style={{height: '50px',backgroundColor: 'rgb(27,131,143)'}}>
                <Container fluid>
                <Navbar.Brand href="#home" style={{fontSize: '25px',color:'white'}}>
                  <Navbar.Toggle aria-controls={`offcanvasNavbar-${expan}`} style={{border: 'none'}}/>
                  {/* <img src={logo} alt=""  style={{width: '100px',height: '35px'}}/> */}
                </Navbar.Brand>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expan}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expan}`}
                    placement="start"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expan}`}>
                        Menu
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="me-auto justify-content-start flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        
                          <NavDropdown
                            title="Medicines"
                            id={`offcanvasNavbarDropdown-expand-${expan}`}
                          >
                            <NavDropdown.Item href="#action3">
                                <Container style={{width: '2000px'}}>
                                  <Row xs={1} md={6}>
                                    <Col>
                                        <p>CARDIOLOGY</p>
                                        <Nav.Link href="#action1">Anti Hyper Tensives</Nav.Link>
                                        <Nav.Link href="#action1">Congestive Heart failure</Nav.Link>
                                        <Nav.Link href="#action1">Anti anginal drugs</Nav.Link>
                                        <Nav.Link href="#action1">Anti arrthmics</Nav.Link>
                                        <Nav.Link href="#action1">Anti Coagulants</Nav.Link>
                                        <Nav.Link href="#action1">Hypolipidemic</Nav.Link>
                                        <Nav.Link href="#action1">Anti platelets</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>DDIABETICS</p>
                                        <Nav.Link href="#action1">Anti Diabetics</Nav.Link>
                                        <Nav.Link href="#action1">Insulins</Nav.Link>
                                        <Nav.Link href="#action1">Sugar Free Pills</Nav.Link>
                                        
                                    </Col>
                                    <Col>
                                        <p>GASTRO ENTROLOGY</p>
                                        <Nav.Link href="#action1"></Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>GENERIC MEDICINES</p>
                                        
                                        
                                    </Col>
                                    <Col>
                                        <p>ASTHMA</p>
                                        <Nav.Link href="#action1">Pneumonia</Nav.Link>
                                        <Nav.Link href="#action1">Nasal Blackages</Nav.Link>
                                        <Nav.Link href="#action1">Nebulization</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>CARDIOVASULAR DISORDERS</p>
                                        <Nav.Link href="#action1"></Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>TUBUROCULUS DISORDERS</p>
                                        <Nav.Link href="#action1">Bronchites</Nav.Link>
                                        <Nav.Link href="#action1">Dry Cough</Nav.Link>
                                        <Nav.Link href="#action1">Wet Cough</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>VOMITING</p>
                                        <Nav.Link href="#action1">Emetics</Nav.Link>
                                        <Nav.Link href="#action1">Nausea</Nav.Link>
                                        <Nav.Link href="#action1">Insominia</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>Action</p>
                                        <Nav.Link href="#action1"></Nav.Link>
                                        <Nav.Link href="#action1"></Nav.Link>
                                        <Nav.Link href="#action1"></Nav.Link>
                                    </Col>
                                    <Col>
                                    <p>VOMITING</p>
                                        <Nav.Link href="#action1">Emetics</Nav.Link>
                                        <Nav.Link href="#action1">Nausea</Nav.Link>
                                        <Nav.Link href="#action1">Insominia</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>VOMITING</p>
                                        <Nav.Link href="#action1">Emetics</Nav.Link>
                                        <Nav.Link href="#action1">Nausea</Nav.Link>
                                        <Nav.Link href="#action1">Insominia</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>VOMITING</p>
                                        <Nav.Link href="#action1">Emetics</Nav.Link>
                                        <Nav.Link href="#action1">Nausea</Nav.Link>
                                        <Nav.Link href="#action1">Insominia</Nav.Link>
                                    </Col>
                                  </Row>
                                </Container>
                                
                                
                            </NavDropdown.Item>
                            {/* <NavDropdown.Item href="#action4">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              Something else here
                            </NavDropdown.Item> */}
                          </NavDropdown>


                          {/* Nutrotion */}


                          <NavDropdown
                            title="Nutrotion"
                            id={`offcanvasNavbarDropdown-expand-${expan}`}
                          >
                            {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item> */}
                            <NavDropdown.Item href="#action4">
                            <Container style={{width: '2000px'}}>
                                  <Row xs={1} md={6}>
                                    <Col>
                                        <p>CARDIOLOGY</p>
                                        <Nav.Link href="#action1">Anti Hyper Tensives</Nav.Link>
                                        <Nav.Link href="#action1">Congestive Heart failure</Nav.Link>
                                        <Nav.Link href="#action1">Anti anginal drugs</Nav.Link>
                                        <Nav.Link href="#action1">Anti arrthmics</Nav.Link>
                                        <Nav.Link href="#action1">Anti Coagulants</Nav.Link>
                                        <Nav.Link href="#action1">Hypolipidemic</Nav.Link>
                                        <Nav.Link href="#action1">Anti platelets</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>DDIABETICS</p>
                                        <Nav.Link href="#action1">Anti Diabetics</Nav.Link>
                                        <Nav.Link href="#action1">Insulins</Nav.Link>
                                        <Nav.Link href="#action1">Sugar Free Pills</Nav.Link>
                                        
                                    </Col>
                                    <Col>
                                        <p>GASTRO ENTROLOGY</p>
                                        <Nav.Link href="#action1"></Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>GENERIC MEDICINES</p>
                                        
                                        
                                    </Col>
                                    <Col>
                                        <p>ASTHMA</p>
                                        <Nav.Link href="#action1">Pneumonia</Nav.Link>
                                        <Nav.Link href="#action1">Nasal Blackages</Nav.Link>
                                        <Nav.Link href="#action1">Nebulization</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>CARDIOVASULAR DISORDERS</p>
                                        <Nav.Link href="#action1"></Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>TUBUROCULUS DISORDERS</p>
                                        <Nav.Link href="#action1">Bronchites</Nav.Link>
                                        <Nav.Link href="#action1">Dry Cough</Nav.Link>
                                        <Nav.Link href="#action1">Wet Cough</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>VOMITING</p>
                                        <Nav.Link href="#action1">Emetics</Nav.Link>
                                        <Nav.Link href="#action1">Nausea</Nav.Link>
                                        <Nav.Link href="#action1">Insominia</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>Action</p>
                                        <Nav.Link href="#action1"></Nav.Link>
                                        <Nav.Link href="#action1"></Nav.Link>
                                        <Nav.Link href="#action1"></Nav.Link>
                                    </Col>
                                    <Col>
                                    <p>VOMITING</p>
                                        <Nav.Link href="#action1">Emetics</Nav.Link>
                                        <Nav.Link href="#action1">Nausea</Nav.Link>
                                        <Nav.Link href="#action1">Insominia</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>VOMITING</p>
                                        <Nav.Link href="#action1">Emetics</Nav.Link>
                                        <Nav.Link href="#action1">Nausea</Nav.Link>
                                        <Nav.Link href="#action1">Insominia</Nav.Link>
                                    </Col>
                                    <Col>
                                        <p>VOMITING</p>
                                        <Nav.Link href="#action1">Emetics</Nav.Link>
                                        <Nav.Link href="#action1">Nausea</Nav.Link>
                                        <Nav.Link href="#action1">Insominia</Nav.Link>
                                    </Col>
                                  </Row>
                                </Container>
                            </NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              Something else here
                            </NavDropdown.Item> */}
                          </NavDropdown>

                          {/* Personal Care */}

                          <NavDropdown
                            title="Personal Care"
                            id={`offcanvasNavbarDropdown-expand-${expan}`}
                          >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              Something else here
                            </NavDropdown.Item>
                          </NavDropdown>

                          {/* Mom & Baby */}

                          <NavDropdown
                            title="Mom & Baby"
                            id={`offcanvasNavbarDropdown-expand-${expan}`}
                          >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              Something else here
                            </NavDropdown.Item>
                          </NavDropdown>

                        {/* Devices */}

                        <NavDropdown
                            title="Devices"
                            id={`offcanvasNavbarDropdown-expand-${expan}`}
                          >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              Something else here
                            </NavDropdown.Item>
                          </NavDropdown>

                          {/* Shop By Brand */}

                          <Nav.Link href="#action2">Link</Nav.Link>

                        {/* Home HealthCare */}

                        <NavDropdown
                            title="Home HealthCare"
                            id={`offcanvasNavbarDropdown-expand-${expan}`}
                          >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              Something else here
                            </NavDropdown.Item>
                          </NavDropdown>

                          <Nav.Link href="#action1">EHR</Nav.Link>


                      </Nav>
                      

                      
                      
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                      {/* <Nav className='ms-auto'> */}
                        <FaHeart style={{color: 'white',height: '50px',width: '20px',marginRight: '20px'}}/>
                        <FaCartPlus style={{color: 'white',height: '50px',width: '20px',marginRight: '20px'}}/>
                      {/* </Nav> */}
                </Container>
              </Navbar>
          ))}
      </div>
  );
}

export default Header;
