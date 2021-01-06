import { Container} from 'react-bootstrap'
import '../../styles/Dashboard.css'
import { useEffect } from 'react'
import StatsData from '../Business/StatsData'
import SalesStats from '../Business/SalesStats'
//import Transaction from './Transaction'
import Sidebar from './Driverbar'
import NavBus from '../Business/NavBus'
import NotFound from '../Business/NotFound'
import { Route, useRouteMatch, Redirect, Switch } from 'react-router-dom'
import { managerData, yearLabels, driveTopic, driverStats } from "../Business/Data";
import DriverTable from './DriverTable'
import Settings from './Setting'
import WithDrawal from './WithDrawal'
import MapContainer from './Map'
const Dashboard = () => {
  const {path, url} = useRouteMatch()

  
  useEffect( () => {
   document.body.style.background= '#F3F3F3 0% 0% no-repeat padding-box'
   document.body.style.fontSize = "15px"
  })
    return(
      <>
      <Switch>
          {console.log(path)}
        <Route exact path={`${path}/dashboard`}>
        <NavBus 
        notification={true} 
        style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
        
                    <div className="main-panel">
      <Container fluid className="hurt">
        <StatsData data={driverStats} topic={driveTopic}/>
        <SalesStats 
        data={managerData} 
        labels={yearLabels}
        driver={true}
        />
        </Container>
        </div>
        </div>
        </Route>

<Route exact path={`${path}/transaction`}>
<NavBus 
        notification={true} 
        style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
  <DriverTable/>
  </div>
</Route>

<Route exact path={`${path}/settings`}>
  <NavBus
  notification={true}
  style={{position : 'fixed'}}/>
  <div>
    <Sidebar/>
    <Settings/>
  </div>
</Route>

<Route exact path={`${path}/payment-system`}>
  <NavBus 
  notification={true}
      style={{position : 'fixed'}}/>
      
        <Sidebar/>
        <div className="main-panel">
      <Container fluid className="hurt">

        <WithDrawal/>
        </Container>
        </div>
      
</Route>

<Route exact path={`${path}/map`}>
  <NavBus
  notification={true}
  style={{position : 'fixed'}}/>
  
    <Sidebar/>
    <div className="main-panel">
<Container fluid className="hurt">
  <MapContainer/>
  </Container>
  </div>
</Route>
  <Route 
  exact 
  path={`${window.location.pathname}*`}>
    <NotFound/>
        </Route>

</Switch>
        
        </>
    )
}
export default Dashboard