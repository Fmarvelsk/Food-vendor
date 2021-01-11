import React from 'react'
import { useDispatch } from 'react-redux'
import Meats from '../../Image/Meats.jpeg'
import { addToCarts } from '../../store/cartsAction'
import { productExample } from '../Business/Data'

const FoodList = () => {
  const dispatch = useDispatch()
  const addCarts = (result) => {
    dispatch(addToCarts(result))
  }
    return(
        <>
        {productExample.map((food, i) => (
          <div key={i}>
        <div className="mt-3 toggle-menu moblie-tab ">
        <div>
          <img className="menu-img" src={Meats} alt="menu" />
        </div>
        <div className="ml-3 w-moblie">
          <h5>{food.name}</h5>
          <p>
            {food.details}
          </p>
        </div>
        <div className="wde4 w-toggle">
          <div>
            <span className="ml-5 bold">£ {food.price}</span>
          </div>
          <div>
          <span className="span-btn" onClick={ () => addCarts({
            id : food.id,
            name : food.name,
            image : Meats,
            details : food.details,
            price : food.price
          })}>+</span>
         
        </div>
          </div>
          
          </div>
          <hr/> </div>
        ))}
      </>

    )
}
export default FoodList