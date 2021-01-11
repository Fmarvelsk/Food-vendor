import DriversPassport from './DriversPassport'
import {Row} from 'react-bootstrap'
const Settings = () => {
    const topic = ['Passport', 'Drivers License']
    return(
        <div className="main-panel">
            <div className="hurt container-fluid">
      <p className="dash-topic">Verification</p>
      <p className="f-15">Upload document for verification</p>
        <Row>
                {topic.map((passport) => {
                    return <DriversPassport h3={passport}/>;
                })}
                
            </Row>
            </div>
            </div>
  )

}
export default Settings
