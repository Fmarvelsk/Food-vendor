import StatsCard from './StatsCard'
import { Col, Container, Row } from 'react-bootstrap'
import '../../Dashboard.css'
import { useEffect } from 'react'
import SalesStats from './SalesStats'
import Transaction from './Transaction'
import Sidebar from './Sidebar'
import NavBus from './NavBus'
import CreateMenu from './CreateMenu'
import { Route, useRouteMatch } from 'react-router-dom'
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
        <NavBus style={{position:'fixed'}}/>
        <div>
        <Sidebar/>

        <Route path={`${path}/dashboard`}>
                    <div className="main-panel">
      <Container fluid className="hurt">
        <div>
        <h3>Overview</h3>
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
        </Route>

        <Route path={`${path}/create-menu`}>
          <CreateMenu/>
        </Route>
        <Route path={`${path}/transaction-history`}>
    <Transaction/>
  </Route>
  <Route path={`${path}/manage-orders`}>
    <ManageOrder/>
  </Route>
  <Route path={`${path}/merchant-menu`}>
    <ManageMenu/>
  </Route>
  <Route path={`${path}/*`}>
    {console.log(path)}
    <h3>404 Not Found</h3>
  </Route>
        </div>
        </>
    )
}
export default Dashboard