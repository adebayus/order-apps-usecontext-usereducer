
import './App.css';
import Menu from './component/Menu'
// import 'bootstrap/dist/css/bootstrap.min.css'
import Paydetail from './component/Paydetail'
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react'
import { CartProvider} from './context/Context'

function App() {

  return (
    <Container className="App">
      <CartProvider>
        <Row>
          <Col className="py-4">
            <Menu />
          </Col>
          <Col className="py-4">
            <Paydetail />
          </Col>
        </Row>
      </CartProvider>
    </Container>
  );
}

export default App;
