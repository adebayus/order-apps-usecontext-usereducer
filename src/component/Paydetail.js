import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Paydetail() {
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
          <Col lg={12} style={{ display: "flex" }}>
            <div style={{ width: "70%" }} className="paydetail-food">
              <p>Food Name : Haamburger</p>
              <p>Quantyty : 2 </p>
            </div>

            <div
              style={{ width: "30%", display: "flex", alignItems: "center" }}
              className="paydetail-price"
            >
              <p>25 x 2 = 40</p>
            </div>
          </Col>

          <Col lg={12} style={{ display: "flex" }}>
            <div style={{ width: "70%" }} className="paydetail-food">
              <p>Food Name : Haamburger</p>
              <p>Quantyty : 2 </p>
            </div>

            <div
              style={{ width: "30%", display: "flex", alignItems: "center" }}
              className="paydetail-price"
            >
              <p>25 x 2 = 40</p>
            </div>
          </Col>

        </Row>
        <h2>Total : $100</h2>
    </div>
    );
}

export default Paydetail
