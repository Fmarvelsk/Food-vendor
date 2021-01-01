import React from 'react';
import {Navbar, Nav } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Logo from '../../Image/vendr..svg'
import { showModalLogin } from '../../store/actionTypes'
import NotificationsIcon from '@material-ui/icons/Notifications';

const NavBus = (props) => {
    const dispatch = useDispatch()

	const LoginHandler = () => {
       dispatch(showModalLogin())
	}

    return (
		<>
			<Navbar collapseOnSelect className={props.style ? props.style : "nav-bus"} variant="light" expand="lg">
                <Navbar.Brand className="navbrand mb-3 nav-bus-brand" href="/merchant">
               <img src={Logo} alt="vendr"/>  </Navbar.Brand>
                    
			   {props.notification ? 
			   (<div className="ml-auto mr-3 pos-relative">
        <NotificationsIcon fontSize="large" cursor="pointer" marginRight="10px"/>
        <b className="caret" />
        <span className="notification"></span>
	  </div>) :
	   (<><Navbar.Toggle  aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
				

			  <div>
						<Nav.Item className="log-btn mr-3" onClick={LoginHandler}>
							Login
						</Nav.Item>
					</div>
					<br />
                    <div>
					<Nav.Item className=" mr-5 log-btn ">
						Help
					</Nav.Item>
                    </div>
                    </Nav>
    
				</Navbar.Collapse>
				</>)}
			</Navbar>
</>
    )
}

export default NavBus