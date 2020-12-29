import Orders from './Orders'
import FoodNav from './FoodNav'
import '../Order.css'
import React,{ useEffect } from 'react'
const Order = () => {
    useEffect( () => {
document.body.style.backgroundColor = '#F9F9F9'
    }, [])
    const Link = [{
       link: 'Home',
       url : '/'
    },
{
    link : 'My order',
    url: '/'
},
{
    link : 'Kitchen Merchant',
    url : ''
}
]
    return(
        <>
        <div className="foodnav">
        <FoodNav orderLink={Link}/>
        </div>
        <Orders/>

        </>
    )
}
export default Order