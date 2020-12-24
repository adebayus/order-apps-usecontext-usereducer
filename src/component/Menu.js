import React from 'react'
import Food from './Food'
import Drink from './Drink'
import { Row, Col, Button} from 'react-bootstrap'

function Menu() {

    return (
        <div>
            <h1 className="text-center menu-title text-uppercase" >Menu</h1>
            <Row>
                {/* List Menu */}
                <Col lg={6} className="menu-list">
                    <div className="menu-list-detail">
                        <p className="text-uppercase"> Hambuger </p>
                        <p> &#36; 25 </p>
                        
                    </div>
                    <div className="menu-list-button">
                        <Button variant="light" className="button">  + </Button>
                        <Button variant="light" className="button"> - </Button>
                    </div>
                </Col>
                <Col lg={6} className="menu-list">
                    <div className="menu-list-detail">
                        <p className="text-uppercase"> Hambuger </p>
                        <p> &#36; 25 </p>
                        
                    </div>
                    <div className="menu-list-button">
                        <Button variant="light" className="button">  + </Button>
                        <Button variant="light" className="button"> - </Button>
                    </div>
                </Col>
                <Col lg={6} className="menu-list">
                    <div className="menu-list-detail">
                        <p className="text-uppercase"> Hambuger </p>
                        <p> &#36; 25 </p>
                        
                    </div>
                    <div className="menu-list-button">
                        <Button variant="light" className="button">  + </Button>
                        <Button variant="light" className="button"> - </Button>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default Menu
