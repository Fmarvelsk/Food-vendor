import React, {useState} from 'react'
import {Card, Form, Button} from 'react-bootstrap'

const PaypalMethod = () => {
    const [hide, useShow] = useState(false);
    const [email, setEmail] = useState()
    const ToogleMenu = () => {
      useShow(!hide);
    };
    const PayPalBtn = (e) => {
        e.preventDefault()
        console.log(email)
    }
  
    return(
        <Card className="f-card">
      <Form>
        <Form.Label>Email address</Form.Label>
        <Form.Control className="input-change" onChange={(e) => setEmail(e.target.value)}/>
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
export default PaypalMethod