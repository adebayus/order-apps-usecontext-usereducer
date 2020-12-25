import React, {useContext} from 'react'
import { Col, Row } from 'react-bootstrap'
import { cartContext } from '../context/Context'
function Paydetail() {
    const { state } = useContext(cartContext)
    // const newstate = {...state}
    console.log(state,'stepPaydetail')
    let total = 0;
    return (
      <div
        className="list-order"
        style={{
          height: "auto",
        }}
      > 
        
        <h1 className="text-center menu-title text-uppercase">
          Payment Detail
        </h1>
        <Row>
            {
                state.cart.map( (order,index) => {

                    return (
                      <Col lg={12} style={{ display: "flex" }} key={order.id}>  
                        <div
                          style={{ width: "70%" }}
                          className="paydetail-food"
                        >
                          <p>Food Name : {order.name }</p>
                          <p>Quantyty : {order.quantity} </p>
                        </div>

                        <div
                          style={{
                            width: "30%",
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="paydetail-price"
                        >
                          <p> {order.quantity} x {order.price} = { order.quantity * order.price }</p>
                        </div>
                      </Col>
                    );
                })
            }
        </Row>
        {
          state.cart.map(x => {
            let totalPerItem =  x.quantity * x.price
            total += totalPerItem
          })
        }
        <h2 ><b>Total : ${total} </b></h2> 
    </div>
    );
}

export default Paydetail
