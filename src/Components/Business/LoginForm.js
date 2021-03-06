import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook'
import '../../styles/login.css'
import { useDispatch } from 'react-redux'
//import axios from 'axios'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { useHistory } from 'react-router-dom';

export default function LoginForm(props) {
	const [hide, show] = useState(true),
		 history = useHistory (),
		 [type, showType] = useState('Password'),
		 [businessId, setBusinessId] = useState(),
		 [password, setPassword] = useState(),
		 [error, setError] = useState(),
		 dispatch = useDispatch()
		
		
		 const visiblity = (e) => {
			 e.preventDefault()
			 showType('Text')
				show(false)
		 }
		 const hideVisbilty = (e) => {
			 e.preventDefault()
			 showType('Password')
			 show(true)
		 }

    
	const Signin = (e) => {
		e.preventDefault()
		const LoginId = {
			userId : businessId,
			password: password
		}
		console.log(LoginId)
		history.push(`/${props.label ? 'driver' : 'merchant'}/user/dashboard`)
		
		/*const dbUser = async() => {
				const response = await axios({
					method: "post",
					headers: { 'Content-Type' : 'application/json'},
					data: info,
					url: "https://dev-bestops.herokuapp.com/v1/login"
	}).then(token => {
		history.push('/profile')
	}).catch( err => {
		setError("Invalid email and Password")
	})
		}
		dbUser()*/
	}
	return (
		<>
		{console.log(props.label)}
			<Modal.Title className="text-center mb-3" id="login-modal-title"><span>Sign in with</span></Modal.Title>
			<div className="red text-center">{error}</div>
			<div className="google-facebook pb-3">
			<Button variant="primary" type="submit" className="login-button-google">
						<div className="google-button-text">
							<img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt="google" />
							<span>Sign up with Google</span>
						</div>
					</Button>

					<Button type="submit" className="login-button-google">
						<div className="google-button-text">
							<FacebookIcon className="mr-f"/> 
							<span>Sign in with Facebook</span>
						</div>
					</Button>
					
				</div>
			
			<Form id="login-form" onSubmit={Signin} >
				<Form.Text className="pb-3 text-center">By logging in, you agree to <span className="link-color">vendr</span> 
				Terms of Service and acknowledge vendr.
				 <a className="link-color" href="/vendr-policies">Privacy Policy.</a>
				</Form.Text>	

				<div className="pos-or mb-3">
		<div className="border-or"><hr/></div>
			<div className="text-center">OR</div>
			<div className="border-or"><hr/></div>
			</div>

				<Form.Group controlId="formBasicEmail">
					<Form.Label>{props.label ? 'Drivers Id' : 'Business Id'}</Form.Label>
					<Form.Control type="text" placeholder="Enter Id" 
					onChange = { e => setBusinessId(e.target.value)}
					required/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword" id="form-group-login-password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type={type}
						placeholder="Password"
						onChange = { e => setPassword(e.target.value)}
					required/>{
					(hide ? ( <VisibilityOffIcon className="visiblity" onClick={visiblity}/>) : (
						<VisibilityIcon className="visiblity" onClick={hideVisbilty}/>
					))
					}
				</Form.Group>
				<Form.Text id="forgot-password" className="text-align-test pb-3"><Link className="link-color" to="/">Forgot Password?</Link></Form.Text>
				<div id="login-button-container">
					<Button variant="primary" className="w-100 clor-black" type="submit" id="login-button">
						Log In
					</Button>
				</div>
				</Form>
				<Form.Text className="text-center" id="no-account">
					Dont have an account ? <a href="/merchant/signup" className="link-color" ><span>Sign Up</span></a>
				</Form.Text>	
		</>
	);
}
