import { useState } from 'react'
import { Card, Container, Form } from 'react-bootstrap'
import { Popular } from './Data'
import Meats from '../../Image/Meats.jpeg'
const ManageMenu = () => {
  const [hide, useShow] = useState(false)
  const [setDate, UseData] = useState('')
  const ToogleMenu = (e) => {
    useShow(!hide)
  }
  const SuspendMeal = () => {
    console.log(setDate)
    useShow(false)
  }
    return(
<div className="main-panel">
      <Container fluid className="hurt">

        <div>
        <h3>Manage Menu</h3>
           </div>
    { Popular.map( (menu,  i) => (
        <div className="mt-3 manage-menu" key={i}>
        <div className="toggle-menu">
                <div>
                  <img className="menu-img" src={Meats} alt="menu"/>
                </div>
                <div className="ml-3 w-moblie">
                  <h5>{menu}</h5>
                  <p>Served with choice of swallow (e.g poundo, eba, etc), and choice of protein (e.g goat meat, fish, assorted, etc)</p>
                </div>
                <div className="wde4 w-toggle">
                  <div>
      
                  <span className="ml-5 bold">£10.00</span>
                  </div>
                <div className="scssc">
                  <div className={`toggle-container ${!hide ? 'abled' : 't-disabled'}`}>
                  <span className={`dialog-button ${!hide ? '' :"disabled"}`}  onClick={ToogleMenu}></span>
                    </div>
                  <p className="mt">toogle to suspend menu</p>
                  </div>
      
                  
                </div>
                </div>
                { !hide ? '' : (<div className="form-flex mt-3">
                  <div>
                <Form.Control placeholder="DD/MM/YYYY" className="change-input" onChange={(e) => UseData(e.target.value)}/>
                </div>
                <div> <input class="w-100 total" type="button" value="Save" onClick={SuspendMeal}/></div>
                </div> 
                )}
                
                </div>      
                  
      
    ))}
            
</Container>
</div>
    )
}
export default ManageMenu