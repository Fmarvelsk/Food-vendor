import Orders from './Orders'
import FoodNav from './FoodNav'
import '../Order.css'
import { useEffect } from 'react'
const Order = () => {
    useEffect( () => {
document.body.style.backgroundColor = '#F9F9F9'
    }, [])
    return(
        <>
        <FoodNav/>
        <Orders/>

        </>
    )
}
export default Order