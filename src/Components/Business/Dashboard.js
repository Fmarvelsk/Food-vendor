import { Container} from 'react-bootstrap'
import '../../styles/Dashboard.css'
import { useEffect } from 'react'
import StatsData from './StatsData'
import SalesStats from './SalesStats'
import Transaction from './Transaction'
import Sidebar from './Sidebar'
import NavBus from './NavBus'
import NotFound from './NotFound'
import CreateMenu from './CreateMenu'
import { Route, useRouteMatch, Redirect, Switch } from 'react-router-dom'
import ManageOrder from './ManageOrder'
import ManageMenu from './ManageMenu'
import { managerData, yearLabels } from "./Data";
const Dashboard = () => {
  const {path, url} = useRouteMatch()

  
  useEffect( () => {
   document.body.style.background= '#F3F3F3 0% 0% no-repeat padding-box'
   document.body.style.fontSize = "15px"
  })
    return(
      <>
      <Switch>
        <Route exact path={`${path}/dashboard`}>
        <NavBus notification={true} style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
        
                    <div className="main-panel">
      <Container fluid className="hurt">
        <StatsData/>
        <SalesStats 
        data={managerData} 
        labels={yearLabels}/>
        </Container>
        </div>
        </div>
        </Route>

        <Route exact path={`${path}/create-menu`}>
        <NavBus notification={true} style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
        </div>
          <CreateMenu/>
        </Route>
  
        <Route  exact path={`${path}/transaction-history`}>
        <NavBus notification={true} style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
        </div>
    <Transaction/>
  </Route>
  
  <Route exact path={`${path}/manage-orders`}>
  <NavBus notification={true} style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
</div>
    <ManageOrder/>
  </Route>
  
  <Route exact path={`${path}/merchant-menu`}>
  <NavBus notification={true} style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
        </div>
    <ManageMenu/>
  </Route>

  <Route exact path={`${window.location.pathname}*`}>
    <NotFound/>
        </Route>

</Switch>
        
        </>
    )
}
export default Dashboard