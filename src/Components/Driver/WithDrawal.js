import React from 'react';
import {Row, Col } from 'react-bootstrap'
import Paypal from '../../Image/Layer 2.svg'
import Bank from '../../Image/Group 290.svg'
import PaypalMethod from './PaypalMethod'

export default function WithDrawal() {
  
  return (
    <>
    <div className="pay-bal">
      <div>
    <h3>WithDrawal</h3>
    <p className="f-15">Select a withdrawal option</p>  </div>
   
    <div>
      <p className="bank-money">
      Available balance : <span>£35,485</span></p>
    </div>
    </div>
      <Row>
          <Col md={8}>
          <div className="payment-row">
            <div className="col-md-5 col-sm-5 payment">
            <img src={Paypal} alt="pay-pal"/>
            <p>Paypal method</p>
            </div>
            <div className="col-md-5 col-sm-5 payment">
            <img src={Bank} alt="pay-pal"/>
            <p>Bank account</p>
            </div>
            <span className="line"></span>
           
  </div>
  <PaypalMethod/>
    </Col>
    </Row>
    </>
  );
}
