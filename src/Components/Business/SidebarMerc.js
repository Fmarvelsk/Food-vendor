import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ReceiptIcon from '@material-ui/icons/Receipt';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import Sidebar from './Sidebar';

const SidebarMerc = () => {

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
      return(<>
          <Sidebar dashboard={dashboardRoutes} main={true}/>
          </>
      )
}

export default SidebarMerc