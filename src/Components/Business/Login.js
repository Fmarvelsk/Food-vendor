import React from 'react';
import { Modal } from 'react-bootstrap';
import Logo from '../../Image/vendr..svg'
import LoginForm from './LoginForm'

function Login(props) {
	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<div className="logo-modal">  <img src={Logo} alt="logo"/>
              </div>
		<Modal.Dialog style={{margin: 0}}>
			<Modal.Header closeButton>
			</Modal.Header>

			<Modal.Body className="login-mod">
				{/* <Route exact path={`${path}/login`} component={LoginForm}/>
							<Route exact path={`${path}/signup`} component={SignUp}/> */}
				<LoginForm label={props.idLabel}/>
				{/* <SignUp /> */}
			</Modal.Body>

			</Modal.Dialog>
		</Modal>
	);
}
export default Login;
