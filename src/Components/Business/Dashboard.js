import StatsCard from './StatsCard'
import Sidebar from './Sidebar'
import { Col, Container, Row } from 'react-bootstrap'
import '../../Dashboard.css'
import { useEffect } from 'react'
import SalesStats from './SalesStats'
const Dashboard = () => {
  useEffect( () => {
   document.body.style.background= '#F3F3F3 0% 0% no-repeat padding-box'
  })
    return(
        
      <div>
          
  <Sidebar/>
        <div className="main-panel">
      <Container fluid className="hurt">
        <div className="pt-3">
        <h3>Overview</h3>
        </div>
        <Row>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-server text-warning" />}
              statsText="Orders"
              statsValue="£35,485"
              statsInfo="+2.8%"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-wallet text-success" />}
              statsText="Avg. Order amounte"
              statsValue="£31,345"
              statsInfo="-2.8%"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="pe-7s-graph1 text-danger" />}
              statsText="Unique customer"
              statsValue="33,785"
              statsInfo="+2.8%"
            />
          </Col>
          <Col lg={3} sm={6}>
            <StatsCard
              bigIcon={<i className="fa fa-twitter text-info" />}
              statsText="Net Sales"
              statsValue="+2.8%"
              statsInfo=" £35,485"
            />
          </Col>
        </Row>
        <SalesStats/>
        </Container>
        </div>
        </div>
    )
}
export default Dashboard