import {Col, Form, Button} from 'react-bootstrap'
import DeliverVendr from '../../Image/driver.png'
import { useHistory } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {signedBus} from '../../store/actionTypes'
import React, { useState } from 'react';

const DriverHome = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const Signin = (e) => {
        e.preventDefault()
        const Business = {
            email : email,
            password : password
            
        }
        dispatch(signedBus(Business))
        history.push('/driver/user/dashboard')
    }

    return(
        <div className="merchant-row">
        <Col md={6} lg={5} sm={12}>
            <div className="mt-40 home-2-content">
                <h1 className="font-weight-bold home-2-title display-3 mb-0">Deliver with Vendr.</h1>
                <p className="earn">Earn additional revenues making deliveries along your routes. Easy sign up, seamless cashout.</p>
                <div className="mt-5">
                 
                 <Form onSubmit={Signin}>
                     <Form.Group>
                         <Form.Control 
                         className="change-input spec" 
                         placeholder="Email address"
                         onChange={ (e) => setEmail(e.target.value)}
                         />
                     </Form.Group>
                     
                     <Form.Group>
                         <Form.Control type="password"
                         className="change-input spec" 
                         placeholder="Password" 
                         onChange={ (e) => setPassword(e.target.value)}/>
                     </Form.Group>
                     <div className="buss-sign-btn mt-3">
                    <Button 
                    variant="primary" 
                    className="w-100 p-btn login-btn" 
                    type="submit">
						Sign Up
					</Button>
				</div>
			
                 </Form>
                 <div className="mt-3">
			<p className="orders-data-font">By clicking "Sign Up" you agree to the <span className="vendr-color">Vendr.</span> Privacy Policy and <span className="vendr-color"> Terms of Service.</span> This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                    </div>
                  
                </div>
                </div>
                </Col>
                <Col md={6} lg={7} sm={12}>
                    <div className="mt-40">
                        
                        <img src={DeliverVendr} alt="Driver" className="img-fluid mx-auto d-block home-2-img mover-img"/>
                              </div>
                                </Col>
                                </div>
                      
    )
}
export default DriverHome