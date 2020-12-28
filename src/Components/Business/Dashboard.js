import StatsCard from './StatsCard'
import { Col, Container, Row } from 'react-bootstrap'
import '../../Dashboard.css'
import { useEffect } from 'react'
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
        <NavBus style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
        
                    <div className="main-panel">
      <Container fluid className="hurt">
        <div>
        <h3>Overview</h3>
        <p className="f-15"><span>Heritage Kitchen restaurant</span> overview and dashboard.</p>
        </div>
        <Row>
          <Col lg={3} sm={6}>
            <StatsCard
              statsText="Orders"
              statsValue="£35,485"
              statsInfo="+2.8%"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              statsText="Avg.Order amount"
              statsValue="£31,345"
              statsInfo="-2.8%"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              statsText="Unique customer"
              statsValue="33,785"
              statsInfo="+2.8%"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              statsText="Net Sales"
              statsValue="+2.8%"
              statsInfo=" £35,485"
            />
          </Col>
        </Row>
        <SalesStats data={managerData} labels={yearLabels}/>
        </Container>
        </div>
        </div>
        </Route>

        <Route exact path={`${path}/create-menu`}>
        <NavBus style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
        </div>
          <CreateMenu/>
        </Route>
  
        <Route  exact path={`${path}/transaction-history`}>
        <NavBus style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
        </div>
    <Transaction/>
  </Route>
  
  <Route exact path={`${path}/manage-orders`}>
  <NavBus style={{position:'fixed'}}/>
        <div>
        <Sidebar/>
</div>
    <ManageOrder/>
  </Route>
  
  <Route exact path={`${path}/merchant-menu`}>
  <NavBus style={{position:'fixed'}}/>
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