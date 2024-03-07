import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo.png'
import { Form, Nav } from 'react-bootstrap';
import { FaUser} from 'react-icons/fa';

function Header1() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
            <img src={logo} alt=""  style={{width: '100px',height: '35px'}}/>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
                <Nav.Link><Form.Control placeholder="Search for Medicines & Products" style={{height: '30px',marginRight: '60px'}}/></Nav.Link>
                <Nav.Link href="#action1" style={{marginRight: '10px'}}>Upload Your Prescription</Nav.Link>
                <Nav.Link href="#action2"><FaUser style={{height: '30px',width: '30px'}}/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header1;