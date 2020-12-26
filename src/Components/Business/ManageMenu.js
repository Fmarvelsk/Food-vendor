import { Card, Container } from 'react-bootstrap'
import Meats from '../../Image/Meats.jpeg'
const ManageMenu = () => {
    return(
<Card>
<div className="main-panel">
      <Container fluid className="hurt">

        <div>
        <p className="dashboard-style">Create new menu</p>
           </div>
           <p className="f-15">Add you new menu here</p>
    
<div className="mt-3 merchant-header">
          <div className="">
            <img className="menu-img" src={Meats} alt="menu"/>
          </div>
          <div className="ml-3 weatr">
            <h5>Egusi soup</h5>
            <p>Served with choice of swallow (e.g poundo, eba, etc), and choice of protein (e.g goat meat, fish, assorted, etc)</p>
          </div>
          <div className="wde4">
            <span>£10.00</span>
          <span className="span-btn">+</span>
          </div>
          </div>
          
</Container>
</div>
</Card>
    )
}
export default ManageMenu