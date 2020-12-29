import React from 'react'
import {Link} from 'react-router-dom'
import Succeed from '../../Image/assests/Group 207.svg'
import FoodNav from './FoodNav'
import Footer from '../Footer/FooterOrder'
const Success = () => {
    const sucess = true

    return(
        <>
        <FoodNav Succeeded={sucess}/>
        <div className="success-message">

                <img src={Succeed} alt="sucess"/>
                
      <Link to="/orders"> 
      <input className="check-btn mt-5" type="button" value="View order details"></input>
      </Link>
        </div>
        <Footer/>
    </>)
}
export default Success