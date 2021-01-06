import React, { useState } from "react";
import { Col, Form, Button } from "react-bootstrap"
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Drinks from '../../Image/assests/Drink.png'
import Plate from '../../Image/assests/Plate.png' 
import Carts from '../../Image/assests/Shopping.png'
import Meats from '../../Image/assests/Meats.png'
import Ramen from '../../Image/assests/Ramen.png'
import Juice from '../../Image/assests/Juice.png'
import { useHistory } from "react-router-dom";

const LoginBus = () => {
	const SignupLogo = [{Food : Drinks, Food2 : Plate},
{Food : Carts, Food2 : Meats},
{Food : Ramen, Food2 : Juice}
]
	const history = useHistory()
	const [hide, show] = useState(true)
	const [type, showType] = useState('Password')
	const visiblity = (e) => (
		showType('Text'),
		   show(false)
	)
	const hideVisbilty = (e) => {
		showType('Password')
		show(true)
	}
	
	const businessSignup = (e) => {
		e.preventDefault()
		history.push('/merchant/user/dashboard')
	}
    return(
            <div className="nav-location">
                <Col lg={6} sm={12} className="moblie">
					{SignupLogo.map( (logo, i) => 
							<div className="item-order" key={i}>
							<img className="logo-width" src={logo.Food} alt={logo.Food}/>
							<img className="logo-width"src={logo.Food2} alt={logo.Food2}/>
						</div>
						
					)}
						
						
                    </Col>
                    <Col lg={6} sm={12}>
						<h3>Sell on vendr.</h3>
						<p className="f-15">Reach new customers, deliver exceptional customer service</p>
                    <Form className="log-form" onClick={businessSignup}>
				<Form.Row>
					
					<Col xs={12} sm={6} md={6} className="mt-3">
						<Form.Group>
							
							<Form.Control type="text"  className="change-input" placeholder="First name" />
						</Form.Group>
					</Col>
					<Col xs={12} sm={6} md={6} className="mt-3" >
						<Form.Group>
							<Form.Control type="text" placeholder="Last name" className="change-input"required/>
						</Form.Group>
					</Col>
				</Form.Row>

				<Form.Row className="align-items-center">
				<Col xs={12} className="mt-3">
						<Form.Group>
							<Form.Control type="number" placeholder="Phone number" className="change-input"required/>
						</Form.Group>
					</Col>
			
					<Col xs={12} className="mt-3">
						<Form.Group>
							<Form.Control type="email" placeholder="Enter email" className="change-input" />
								<div className="red"> </div>
						</Form.Group>
					</Col>
					<Col xs={12} className="mt-3 ">
						<Form.Group className="pos-relative">
							<Form.Control className="change-input"
								type={type}
								placeholder="Password"
								maxLength="20"
								
								
								/>{
									(hide ? ( <VisibilityOffIcon className=" bus" onClick={visiblity}/>) : (
										<VisibilityIcon className=" bus" onClick={hideVisbilty}/>
									))
									}
								
								<div className="red"></div>
						</Form.Group>
					</Col>
					
					<Col xs={12} className="mt-3">
						<Form.Group>
							<Form.Control className="change-input"
								type="text"
								placeholder="Business"
								maxLength="20"
								
								
								/>
								<div className="red"></div>
						</Form.Group>
					</Col>
				</Form.Row>
				<div className="buss-sign-btn mt-3">
					<Button variant="primary" className="w-100 p-btn login-btn" type="submit">
						Sign Up
					</Button>
				</div>
			
			</Form>
			<div className="mt-3">
			<p className="f-15 orders-data-font">By clicking "Sign Up" you agree to the vendr. Privacy Policy and Terms of Service. This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                    </div>
					</Col>
					
            </div>
    )
}
export default LoginBus