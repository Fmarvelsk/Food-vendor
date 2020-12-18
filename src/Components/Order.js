import Orders from './Orders'
import FoodNav from './FoodNav'
import '../Order.css'
import React,{ useEffect } from 'react'
const Order = () => {
    useEffect( () => {
document.body.style.backgroundColor = '#F9F9F9'
    }, [])
    return(
        <>
        <div className="foodnav">
        <FoodNav/>
        </div>
        <Orders/>

        </>
    )
}
export default Order