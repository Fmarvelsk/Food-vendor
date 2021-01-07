import React, {useState} from 'react'
import {Card, Form, Button, Col} from 'react-bootstrap'

const BankPayment = () => {
    const [hide, useShow] = useState(false);
    const [amount, setAmount] = useState()
    const [accName, setAccName] = useState()
    const [IBAN, setIBAN] = useState()
    
    const ToogleMenu = () => {
      useShow(!hide);
    };
    const PayPalBtn = (e) => {
        e.preventDefault()
        console.log(amount)
    }

    return(
        <Card className="f-card">
      <Form>
          <Form.Row>
          
              <Col xs={12} sm={6}>
              <label>Select a bank</label>
							
							<Form.Control as="select" className="mb-4">
                                <option value={null}>Pick an Option</option>
                            <option value="WEMA">WEMA</option>
                            <option value="Guaranty Trust Bank">Guaranty Trust Bank</option>
                            <option value="FIRST BANK">FIRST BANK</option>
                            <option value="UBA">UBA </option>
                            <option value="FCMB">FCMB</option>
                            <option value="Zenith Bank">Zenith Bank</option>
                            <option value="Access Bank Plc">Access Bank Plc</option>
                            </Form.Control>
						 
              </Col>

              <Col xs={12} sm={6} className="mb-4">
              <Form.Label>Set Amount</Form.Label>
        <Form.Control 
        onChange={(e) => setAmount(e.target.value)}/>
        
              </Col>

          </Form.Row>

          <Form.Row className="mb-4">
              <Col sm={12}>
        <Form.Label>Account Name</Form.Label>
        <Form.Control 
        onChange={(e) => setAccName(e.target.value)}/>
        </Col>
        </Form.Row>

<Form.Row>
<Form.Label>IBAN</Form.Label>
<Col sm={12}>
        <Form.Control 
        onChange={(e) => setIBAN(e.target.value)}/>
        </Col>
</Form.Row>

        <div className="btn-save mb-3">
            <label class="switch">
              <input type="checkbox" onChange={ToogleMenu} />
              <span class="slider round"></span>
            </label>
            <p className="save">Save beneficiary</p>
          </div>
          <Button variant="primary" className="w-100 p-btn login-btn" type="submit" onClick={PayPalBtn}>
                        Pay
					</Button>
      </Form>
    </Card>
   
  
    )
}
export default BankPayment