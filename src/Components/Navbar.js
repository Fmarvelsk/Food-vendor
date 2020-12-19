import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { showModalLogin, showModalSignup } from '../store/actionTypes'
import Logo from '../Image/vendr..svg'
const Navigation = () => {
    //const logo = [V, E, N, D, R, Dot]
    const dispatch = useDispatch()

	const showModalLoginHandler = () => {
        dispatch(showModalLogin())
	}

	const showModalSignupHandler = () => {
		dispatch(showModalSignup())
	}    
    return (
		<>
			<Navbar collapseOnSelect className="bg" variant="light" expand="lg" fixed="top">
				
                <Navbar.Brand className="navbrand mb-3" href="/">
                <img src={Logo} alt="logo"/>
                    </Navbar.Brand>
                    
				<Navbar.Toggle  aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
				

				<div >
						<Nav.Item className="log-btn mr-3" onClick={showModalLoginHandler}>
							Login
						</Nav.Item>
					</div>
					<br />
                    <div>
					<Nav.Item className=" mr-3 login-btn" onClick={showModalSignupHandler}>
						Sign Up
					</Nav.Item>
                    </div>
                    </Nav>
    
				</Navbar.Collapse>
			</Navbar>
</>
    )
}

export default Navigation