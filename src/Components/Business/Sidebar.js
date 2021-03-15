import React,{ useState } from 'react';
import {Link} from 'react-router-dom'
import Blank from '../../Image/assests/blank-profile-picture.png'
import DehazeIcon from '@material-ui/icons/Dehaze';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { useSelector } from 'react-redux';

const Sidebar = (props) => {
  const loggedIn = useSelector(state => state.filterStore)
  const [showBar, hideBar] = useState()
  const [profile, setProfile] = useState()

const uploadAvatar = (e) => {
  const file = e.target.files[0]
  const reader = new FileReader()
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setProfile(reader.result)
  }
}
  const showSidebar = () => {
    hideBar(!showBar)
  }
const activeRoute = (routeName) => {
  return window.location.pathname.indexOf(routeName) > -1 ? "active my-row" : "my-row"
  }
  
return(
  <>
<div className={showBar ? "sidebar open-nav" : "sidebar"}>
  
<div className="togl"><span className="navbar-toggler-icon" onClick={showSidebar}><DehazeIcon/></span></div>
  <div className="ml-5 mr-5 mt-3 moblie-sidebar">
    <div className="file-upload">
    <img src={Blank} className="profile-pic" alt="profile" />
    <input type="file" className="avatar" onChange= { (e) => uploadAvatar(e) }/>
    </div>
    <p className="mt"> 
    {`Hello ${props.main ? 'Femi' : loggedIn.busId.email}`}</p>

  {props.main ?
   (<><p className="f-15">Heritage Kitchen</p>
  <div className="mb-3 pt-3">
  <Link className=" p-btn login-btn new-menu" to="/merchant/user/create-menu">Create new menu +</Link>
  </div></>) : 
  
  (<> <p className="f-15">Fast-track Delivery</p>
  <div className="mb-3 pt-3">
  <Link className=" p-btn login-btn new-menu" to="/driver/user/map">Go online now <ArrowRightAltIcon/></Link>
  </div></>) }
  
  <hr/>
  <div>
          <ul className="nav-dash">
            {props.dashboard.map((prop, key) => {
              if (!prop.redirect)

                return (
                  <li
                    className={
                      prop.logout
                        ? "mr-0 active-pro my-row"
                        : activeRoute(prop.layout + prop.path)
                    }
                key={key}
                  >
                    {prop.icon}
                    <Link
                      to={prop.layout + prop.path}
                      className="nav-link nav-path"
                    >
                      <p>{prop.name}</p>
                    </Link>
                  </li>
                );
            })}
          </ul>
        </div>
        </div>
        </div>
         </>   
)
}
export default Sidebar