import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Logo from '../../Image/vendr..svg'
import { showModalLogin, showModalSignup } from '../../store/actionTypes'


const NavBus = () => {
    const dispatch = useDispatch()

	const LoginHandler = () => {
       console.log('loading')
	}

	const SignupHandler = () => {
		console.log('working')
	}    
    return (
		<>
			<Navbar collapseOnSelect className="nav-bus" variant="light" expand="lg">
				
                <Navbar.Brand className="navbrand mb-3 nav-bus-brand" href="/">
               <img src={Logo} alt="vendr"/>  </Navbar.Brand>
                    
				<Navbar.Toggle  aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
				

				<div >
						<Nav.Item className="log-btn mr-3" onClick={LoginHandler}>
							Login
						</Nav.Item>
					</div>
					<br />
                    <div>
					<Nav.Item className=" mr-5 log-btn " onClick={SignupHandler}>
						Help
					</Nav.Item>
                    </div>
                    </Nav>
    
				</Navbar.Collapse>
			</Navbar>
</>
    )
}

export default NavBus