import logo from './logo.svg';
import './App.css';
import Menu from './component/Menu'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Paydetail from './component/Paydetail'
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
      <Row>
        <Col className="py-4" >
          <Menu />
        </Col>
        <Col className="py-4">
          <Paydetail />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
