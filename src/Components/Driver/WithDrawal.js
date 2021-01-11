import React, { useState } from 'react';
import {Row, Col } from 'react-bootstrap'
import Paypal from '../../Image/Layer 2.svg'
import Bank from '../../Image/Group 290.svg'
import PaypalMethod from './PaypalMethod'
import BankPayment from './PaymentSystem'
import SavedAcc from './SavedAcc';
import WithCss from '../../styles/GraphLine.module.css'

export default function WithDrawal() {

const Saved = [{
name : 'Benjamin Elliot',
method : 'Paypal account',
pay : Paypal 
},
{
name: 'Timothy Fox',
method : 'AIB Mortgage bank',
pay : Bank
 }]

const [click, isClicked] = useState(false)
const SwitchPay = () => {
    isClicked(false)
  }
const SwitchBank = () =>{
  isClicked(true)
}
  return (
    <>
    <div className="pay-bal">
      <div>
    <p className="dash-topic">WithDraw</p>
    <p className="f-15">Select a withdrawal option</p>  </div>
   
    <div>
      <p className="bank-money">
      <b>Available balance:</b> <span>£35,485</span></p>
    </div>
    </div>
      <Row>
          <Col md={9}>
          <div className="payment-row">
            <button className="col-md-5 col-sm-5 payment" onClick={SwitchPay}>
            <img src={Paypal} alt="pay-pal"/>
            <p>Paypal method</p>
            </button>
            <button className="col-md-5 col-sm-5 payment" onClick={SwitchBank}>
            <img src={Bank} alt="pay-pal"/>
            <p>Bank account</p>
            </button>
            <span className={`line ${click ? 'move-line' : '' }`}></span>
           
  </div>
  { click ? <BankPayment/> : <PaypalMethod/>}
    </Col>
    
    <Col md={3} className="saved-acc">
      <div className="saved-acc-details">
        <p className={WithCss.popular}>Saved account</p>
    {Saved.map((acc, i) =>{
      return <SavedAcc save={acc}/>
    })}
    </div>
    </Col>
    </Row>
    </>
  );
}
