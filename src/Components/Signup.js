import React from 'react';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SignUpForm from './SignupForm'
import Logo from '../Image/vendr..svg'

function Signup(props) {
	
	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<div className="logo-modal"><img src={Logo} alt="logo"/></div>
		<Modal.Dialog style={{margin: 0}}>
			<Modal.Header closeButton>
				
			</Modal.Header>

			<Modal.Body className="login-mod">
				{/* <Route exact path={`${path}/login`} component={LoginForm}/>
							<Route exact path={`${path}/signup`} component={SignUp}/> */}
				<SignUpForm/>
				{/* <SignUp /> */}
			</Modal.Body>

		</Modal.Dialog>
		</Modal>
	);
}
export default Signup;
