import { NavLink, Button } from 'react-bootstrap'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ReceiptIcon from '@material-ui/icons/Receipt';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Blank from '../../Image/assests/blank-profile-picture.png'
const Sidebar = (props) => {
const dashboardRoutes =  [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <DashboardIcon className="dash-icon"/>,
      layout: "/merchant/user"
    },
    {
      path: "/manage-orders",
      name: "Manage orders",
      icon: <ShoppingCartOutlinedIcon className="dash-icon"/>,
      layout: "/merchant/user"
    },
    {
      path: "/transaction-history",
      name: "Transaction report",
      icon: <ReceiptIcon className="dash-icon"/> ,
      layout: "/merchant/user"
    },
    {
      path: "/merchant-menu",
      name: "Manage Menu",
      icon: <RoomServiceIcon className="dash-icon"/>,
      layout: "/merchant/user"
    },
    {
      logout : true,
      path: "/",
      name: "Logout",
      icon: <PowerSettingsNewIcon className="dash-icon"/>,
      layout: "/merchant"
    },
    
  ]  
  const activeRoute = (routeName) => {
    console.log(window.location.pathname)
  return window.location.pathname.indexOf(routeName) > -1 ? "active my-row" : "my-row"
  }
return(
  <>
  
<div className="sidebar open-nav">
  <div className="ml-5 mr-5 mt-3">
    <img src={Blank} className="profile-pic" alt="profile" />
    <h4 className="mt">Hello Femi</h4>
  <p className="f-15">Heritage Kitchen</p>
  <div className="mb-3 pt-3">
  <a className=" p-btn login-btn new-menu" href="/merchant/user/create-menu">Create new menu +</a>
  </div>
  <hr/>
  <div>
          <ul className="nav-dash">
            {dashboardRoutes.map((prop, key) => {
              if (!prop.redirect)
              {console.log(window.location.pathname)}

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
                    <NavLink
                      href={prop.layout + prop.path}
                      className="nav-link nav-path"
                    >
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );
              return null;
            })}
          </ul>
        </div>
        </div>
        </div>
         </>   
)
}
export default Sidebar