import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import EuroRoundedIcon from '@material-ui/icons/EuroRounded';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Sidebar from '../Business/Sidebar';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const Driverbar = () => {
    const dashboardRoutes =  [
        {
          path: "/dashboard",
          name: "Dashboard",
          icon: <DashboardIcon className="dash-icon"/>,
          layout: "/driver/user"
        },
        {
          path: "/transaction",
          name: "Delivery",
          icon: <DirectionsBikeIcon className="dash-icon"/>,
          layout: "/driver/user"
        },
        {
          path: "/payment-system",
          name: "Withdraw",
          icon: <EuroRoundedIcon className="dash-icon"/> ,
          layout: "/driver/user"
        },
        {
          path: "/settings",
          name: "Settings",
          icon: <SettingsOutlinedIcon className="dash-icon"/>,
          layout: "/driver/user"
        },
        {
          logout : true,
          path: "/",
          name: "Logout",
          icon: <PowerSettingsNewIcon className="dash-icon"/>,
          layout: "/driver"
        },

      ]  
      return(<>
          <Sidebar dashboard={dashboardRoutes} main={false}/>
          </>
      )
}

export default Driverbar