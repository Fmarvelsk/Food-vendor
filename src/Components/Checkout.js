
const Checkout = () => {
    const DecreaseQuantity = () => {
            console.log('Decrese')
    }
    const IncreaseQuantity = () => {
        console.log('increase')
    }
    return(
        <>
        <p className="order-p"><b>Order no: 2345473854</b></p>
        <div className="item-order">
      <div>      
        <p>Efo riro</p></div>
        <div>
                              
                    <p>£ 20.00</p>
         </div>
        </div>
        <div className="item-order">
                  <div>      
                    <p>Remove</p></div>
                    <div>
                    <span className="span-btn" onClick={()=>DecreaseQuantity()}>-</span>
                                    <span className="b">0</span>
                                    <span className="span-btn" onClick={()=>IncreaseQuantity()}>+</span>
                    </div>
                    </div>
                  
        <hr/>
        <div className="my-row">
            <span className="i-link">i</span>
        <a className="link">Click here if you have any food allergy or intolerance</a>
        </div>
        <hr/>
        <div>
            <p><b>Delivery address</b></p>
            <div className="border-address">
                <p>St. Edmondsbury, Lucan, Co.Dublin, K78 Y892</p>
                <a className="change-l">change</a>
            </div>
        </div>
        <hr/>
               <div className="item-order">
                  <div>      
                    <p>Subtotal</p></div>
                    <div>
                    <p>£ 80.00</p>
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
                    <p>£ 100.00</p>
                    </div>
                 </div>
                 <hr/>
                 <div>
                        <p>Select payment method</p>
                        <div>
                            <input className="checkout-btn" type='button' value="Checkout" /> 
                        </div>
                 </div>
             
       </>
    )
}
export default Checkout