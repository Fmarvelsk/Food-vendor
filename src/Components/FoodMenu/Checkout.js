import Card from '../../Image/credit-cards-payment.svg'
import payPal from '../../Image/assests/Group 203.svg'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { increaseCarts, decreaseCarts, deleteCarts } from '../../store/cartsAction'
import {TotalQuantity, TotalProduct, Total} from '../../store/filterStore'

const Checkout = () => {
  const history = useHistory()
  const checkoutCart = useSelector((state => state.Carts)) 
  const dispatch = useDispatch()
      
    const DecreaseQuantity = (key) => {
      dispatch((decreaseCarts(key)))
    }
    const IncreaseQuantity = (key) => {
        dispatch((increaseCarts(key)))
    }
    const Remove_Carts = (key) =>{
      dispatch((deleteCarts(key)))
    }
    const OrderSucess = (e) =>{
      e.preventDefault()
      history.push('/Success')
    } 

      if(checkoutCart.carts.length >= 1)
          return(
        <>
            <p className="order-p"><b>Order no: 2345473854</b></p>
        {checkoutCart.carts && checkoutCart.carts.map( (product, index) => 
          ( <div key={index}>
            
        <div className="item-order bold">
      
      <div>    
        <p>{product.name}</p></div>
        <div>
                              
                    <p>£ {TotalQuantity(product)}</p>
         </div>
         
        </div>
        <div className="item-order">
                  
                    <span className="remove" onClick={ ()=> Remove_Carts(index)}>Remove</span>
                    <div>
                    <button className="span-btn h" 
                    onClick={()=>DecreaseQuantity(index)}>-</button>
                                    
                      <span className="b">{product.quantity}</span>
                      <button className="span-btn" onClick={()=>IncreaseQuantity(index)}>+</button>
                    </div>
                    </div>
        <hr/>
            </div>)

            
        )}
        
        <div className="my-row">
            <span className="i-link">i</span>
        <a className="link" href="/food-allergy">Click here if you have any food allergy or intolerance</a>
        </div>
        <hr/>
        
        <div>
           <b> <p>Delivery address</p>
            <div className="border-address">
                <p>St. Edmondsbury, Lucan, Co.Dublin, K78 Y892</p>
                <span className="change-l">change</span>
            </div></b>
        </div>
        <hr/>
               <div className="item-order">
                  <div>      
                    <p>Subtotal</p></div>
                    <div>
                    <p>£ {TotalProduct(checkoutCart.carts)}</p>
                    </div>
                    </div>
                    <div className="item-order">
                  <div>      
                    <p>Delivery fee</p></div>
                    <div>
                    <p>£ 20.00</p>
                    </div>
                 </div>
                 <div className="item-order">
                  <div>      
                    <p><b>Total :</b></p></div>
                    <div className="total">
                    <p>£ {Total(checkoutCart.carts)}</p>
                    </div>
                 </div>
                 <hr/>

                 <div>
                        <p>Select payment method</p>
                          <div className="item-order pb-5">
                            <div>
                              <input className="radio-payment" type="radio" value='1'/>
                            <img src={Card} alt="payment"/>
                            </div>
                            <div>
                            <input className="radio-payment" type="radio" value='1'/>
                            <img src={payPal} alt="payPal"/>
                            </div>
                          </div>
                            <input className="checkout-btn" type='button' value="Checkout" onClick={OrderSucess}/> 
                      </div>
             
       </>
    )
    else 
    return <div className="text-center">Your basket is empty</div>
   
}
export default Checkout