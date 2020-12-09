import React from 'react'
import Arrow from '../Image/arrow.png'
const Form = () => {
    return(
        <>
            <form className="form-look">
                <div className="svg-ic">
                <input className="form-control cs" type="text" placeholder="Enter your Address or eircode" />
                <img src={Arrow} className="arr" alt="png"/>
                </div>
                <div className="form-box mt-3 ">
                       <input 
                       className="delivery"type="button" value="DELIVERY"/>
                       
                           <input className="Pickup" type="button" value="PICKUP"/>
                       </div>
            </form>
        </>
    )
}
export default Form