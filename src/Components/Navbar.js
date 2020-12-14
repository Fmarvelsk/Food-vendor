import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { showModalLogin, showModalSignup } from '../store/actionTypes'
import V from '../Image/v@2x.svg'
import E from '../Image/e@2x.svg'
import N from '../Image/n@2x.svg'
import D from '../Image/d@2x.svg'
import R from '../Image/r@2x.svg'
import Dot from '../Image/-@2x.svg'
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
                <img src={V} alt="logo"/>
                <img src={E} alt="logo"/>
                <img src={N} alt="logo"/>
                <img src={D} className="d-stroke"alt="logo"/>
                <img src={R} alt="logo"/>
                <img src={Dot} className="dot-stroke" alt="logo"/>
                    {/*logo.map( (logo) => 
                    <img src={logo} alt="logo"/>
                    )*/}
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