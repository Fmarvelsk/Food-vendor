import React from 'react'
import Meats from '../../Image/Meats.jpeg'
const FoodList = (props) => {
    return(
        <>
        <div className="mt-3 toggle-menu moblie-tab ">
        <div>
          <img className="menu-img" src={Meats} alt="menu" />
        </div>
        <div className="ml-3 w-moblie">
          <h5>{props.menu}</h5>
          <p>
            Served with choice of swallow (e.g poundo, eba, etc), and choice of
            protein (e.g goat meat, fish, assorted, etc)
          </p>
        </div>
        <div className="wde4 w-toggle">
          <div>
            <span className="ml-5 bold">£10.00</span>
          </div>
          <div>
          
          <span className="span-btn">+</span>
         
        </div>
          </div>
          
          </div>
          <hr/>
      </>
    )
}
export default FoodList