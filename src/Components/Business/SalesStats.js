import { dataSales, optionsSales, responsiveSales } from './Data'
import ChartistGraph from "react-chartist";
import { Col, Row, Card } from 'react-bootstrap'
const SalesStats = () => {
    return(
        <Row>
            <Col md={8}>
              <Card>
                  <div className="ct-chart">
               
                    <ChartistGraph className="mt-5"
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                    />
                  </div>
            
             {/*   legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }*/}
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                  </div>
              </Card>
            </Col>
          </Row>

          
    )
}
export default SalesStats