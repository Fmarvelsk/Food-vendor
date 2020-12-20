import React, { useEffect } from 'react'
import Succeed from '../Image/Group 207.svg'
import FoodNav from './FoodNav'
import Footer from './FooterOrder'
const Success = () => {
    return(
        <>
        <FoodNav/>
        <div className="success-message">

                <img src={Succeed} alt="sucess"/>
                
        <input class="check-btn mt-5" type="button" value="View order details"></input>
        </div>
        <Footer/>
    </>)
}
export default Success