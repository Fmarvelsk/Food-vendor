import Logo from '../../Image/Group 88@2x.png'
const OrderDetails = () => {
    return(
        <>
        <div className="mt-3 mb-3 setspacing">
        <p>Order details</p>
        <div className="underline-order"></div>
        </div>
        <div className="panel">
            <div className="padding-order">
            <div className="merchant-header">
                <img src={Logo} className="mr-3" width="75px" height ="75px"/>
                <div className="setspacing">
                    <p>Heritage Kitchen (African Cuisine)</p>
                    <p className="f-15">St. Edmondsbury, Lucan, Co.Dublin, K78 Y892</p>
                </div> 
            </div>
            <hr/>
            <div>
                <p className="order-p"><b>delivering to :</b></p>
                <p>35 Parnell street, D09 H45</p>
            </div>
            <hr/>
            <div>
                <p className="order-p"><b>Phone number :</b></p>
                <p>+353 20 919 2482</p>
            </div>
            <hr/>
            
            <div>
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
                <p>Banga soup</p></div>
                <div>
                <p>£ 25.00</p>
                </div>
                </div>
                <div className="item-order">
              <div>      
                <p>Ogbono soup</p></div>
                <div>
                <p>£ 30.00</p>
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
                <div>
                <p>£ 100.00</p>
                </div>
             </div>
            
            <hr/>
           
            </div>
           
            </div>
        </div>
  </>
    )
}
export default OrderDetails