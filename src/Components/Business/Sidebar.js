import { NavLink, Button } from 'react-bootstrap'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ReceiptIcon from '@material-ui/icons/Receipt';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import DashboardIcon from '@material-ui/icons/Dashboard';

const Sidebar = (props) => {
const dashboardRoutes =  [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <DashboardIcon className="dash-icon"/>,
      layout: "/merchant/user"
    },
    {
      path: "/orders",
      name: "Manage orders",
      icon: <ShoppingCartOutlinedIcon className="dash-icon"/>,
      layout: "/merchant/user"
    },
    {
      path: "/transaction-histroy",
      name: "Transaction report",
      icon: <ReceiptIcon className="dash-icon"/> ,
      layout: "/merchant/user"
    },
    {
      path: "/merchant-menu",
      name: "Manage Menu",
      icon: <RoomServiceIcon className="dash-icon"/>,
      layout: "/merchant/user"
    }
  ]  
  const activeRoute = (routeName) => {
  return window.location.pathname.indexOf(routeName) > -1 ? "active my-row" : "my-row"
  }
return(
<div className="sidebar">
  <div className="ml-5 mt-5 mr-5">
    <img src='' />
    <h4>Femi</h4>
  <p className="f-15">Heritage Kitchen</p>
  <div className="mb-5 pt-3">
  <a class=" p-btn login-btn new-menu" href="/merchant/user/create-menu">Create new menu +</a>
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
                      prop.upgrade
                        ? "active active-pro"
                        : activeRoute(prop.layout + prop.path)
                    }
                                        key={key}
                  >
                    {prop.icon}
                    <NavLink
                      href={prop.layout + prop.path}
                      className="nav-link dark-color"
                    >
                      <i className={prop.icon} />
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
      
)
}
export default Sidebar