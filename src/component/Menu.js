import React, {useContext} from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import Data from '../data/Data'
import { cartContext } from '../context/Context'

function Menu() {
    const { state,dispatch } = useContext(cartContext)
    return (
        <div>
            <h1 className="text-center menu-title text-uppercase" >Menu</h1>
            <Row>
                { Data.map(food => {
                    return (
                      <Col lg={6} className="menu-list" key={food.id}>
                        <div className="menu-list-detail">
                          <p className="text-uppercase"> {food.name} </p>
                          <p> &#36; {food.price} </p>
                        </div>
                        <div className="menu-list-button">
                          
                          <Button variant="light" className="button" onClick={ () => dispatch({ type: "decrement", payload : food })} >
                              -
                          </Button>

                          <Button variant="light" className="button" onClick={ () => dispatch({ type: "increment", payload : food })} >
                              +
                          </Button>
                        </div>
                      </Col>
                    );
                })}
                            
            </Row>
        </div>

    )
}

export default Menu
