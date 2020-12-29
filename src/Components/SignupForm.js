import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux";
import { showModalLogin } from '../store/actionTypes'
//import axios from 'axios'
import { useHistory } from 'react-router-dom';

function Signup() {
	const history = useHistory(),
		  dispatch = useDispatch(),
	   [hide, show] = useState(true),
	   [type, showType] = useState('Password'),
	   [email, setUser ]  = useState(),
		 [password, setPassword ] = useState(),
		 [confirmPass, setConfirmPass] = useState(),
		 [error, setError] =  useState(""),
		 [errorPassword, setErrorPassword] = useState(""),
		 [ userError, setUserError ] = useState(),
		 [ errorConfirm, setErrorConfirm] = useState()
		 
		 const visiblity = (e) => (
			showType('Text'),
			   show(false)
		)
		const hideVisbilty = (e) => {
			showType('Password')
			show(true)
		}
		const showModalLoginHandler = (e) => {
			dispatch(showModalLogin())
		}
		const confirmPassword = (e) => {
				if(password===e.target.value){
					  setConfirmPass(confirmPass)
					  setErrorConfirm('')
				}
				 else {
					 return setErrorConfirm('password is not the same') 
				 }
		}
const emailValidate = (e) => {
	if(!e.target.value){
		return setError('Required') 
	}
		else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)){
				return setError('Invalid Email address')
		}
		else {
			setUser(e.target.value)
			setError('')
		}
}
		const validatePassword = (e) => {
			const patt =new RegExp()
			if(!e.target.value ){
				return setErrorPassword("Required")
					
			}
			else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/i.test(e.target.value)){
					return setErrorPassword('Password requires 6-20 characters and at less one number')
			}
			else {
				setPassword(e.target.value)
				setErrorPassword("")
				}
	
		}
		
		 
	const SigninBtn = (e) => {
		e.preventDefault()
		const info = {
			email : email,
			password : password
		};
		if (!info.email || info.password){
			setUserError('Details is required')
		}
		else{
			console.log(info)
		history.push('/home')
		}
		
					/*const dbUrl = async() => {
						const response = await axios({
							method: "post",
							headers: { 'Content-Type' : 'application/json'},
							data: info,
							url: "https://dev-bestops.herokuapp.com/v1/signup"
			
						}).then( response => {
							
							setErrorPassword('')
							history.push('/profile')
							console.log(response.data)
						}).catch(err => 
							setUserError("Email already exist")
							 
						)
					}
					dbUrl()*/
		
		
		}
		
		
	return (
		<>
			<Modal.Title className="text-center mb-3" id="login-modal-title"><span>Sign up with</span></Modal.Title>
			<Form id="login-form" onSubmit={SigninBtn}>
			<div className="google-facebook pb-3">
			<Button variant="primary" type="submit" className="login-button-google">
						<div className="google-button-text">
							<img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt="google" />
							<span>Continue with Google</span>
						</div>
					</Button>

					<Button variant="primary" type="submit" className="login-button-google">
						<div className="google-button-text">
							<FacebookIcon className="mr-f"/> 
							<span>Continue with Facebook</span>
						</div>
					</Button>
					
				</div>
				<Form.Text className="pb-3 text-center">By logging in, you agree to <a className="link-color">vendr</a> Terms of Service and acknowledge vendr. <a className="link-color">Privacy Policy.</a>
				</Form.Text>	
				<div className="pos-or mb-3">
		<div className="border-or"><hr/></div>
			<div className="text-center">OR</div>
			<div className="border-or"><hr/></div>
			</div>
			<div className="red text-center">{userError}</div>
		
				<Form.Row className="align-items-center">
					<Col xs={12}>
						<Form.Group controlId="formBasicEmail" id="form-group-signup-email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" placeholder="Enter email" onChange={ emailValidate}/>
								<div className="red"> {error}</div>
						</Form.Group>
					</Col>
					<Col xs={12}>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type={type}
								placeholder="Password"
								
								maxLength="20"
								onChange = {validatePassword}
								
								/>
								<div className="red">{errorPassword}</div>
						</Form.Group>
					</Col>
					<Col xs={12}>
						<Form.Group controlId="formBasicPassword" id="form-group-signup-password">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type={type}
								value={confirmPass}
								placeholder="Password"
								maxLength="20"
								onChange = {confirmPassword}
								
								/>{
									(hide ? ( <VisibilityOffIcon className="visiblity" onClick={visiblity}/>) : (
										<VisibilityIcon className="visiblity" onClick={hideVisbilty}/>
									))
									}
								<div className="red">{errorConfirm}</div>
						</Form.Group>
					</Col>
				
				</Form.Row>

			<Form.Text id="forgot-password" className="text-align-test pb-3"><Link className="link-color" to="/">Forgot Password?</Link></Form.Text>
				<div id="login-button-container">
					<Button variant="primary" className="w-100 clor-black" type="submit" id="login-button">
						 Create account
					</Button>
				</div>
				
				</Form>
				<Form.Text className="text-center" id="no-account">
					Already have an account? <a onClick={showModalLoginHandler} className="link-color" ><span>Login</span></a>
				</Form.Text>	
		
		</>
	);
}
export default Signup;
