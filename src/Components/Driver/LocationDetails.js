import Logo from '../../Image/Group 88@2x.png'

const LocationDetails = () => {
    return(<>
        <div className="merchant-header wid">
              <img src={Logo} className="mr-3" alt="Location" width="45px" height ="45px"/>
              <div className="setspacing">
                    <p>Heritage Kitchen (African Cuisine)</p>
                    <p className="f-15">St. Edmondsbury, Lucan, Co.Dublin, K78 Y892</p>
                </div> 
            </div>

            <div>
                <p className="order-p"><b>delivering to :</b></p>
                <p>35 Parnell street, D09 H45</p>
            </div>

            <div>
                <p className="order-p"><b>Phone number :</b></p>
                <p>+353 20 919 2482</p>
            </div>
            
            <div>
                <p className="order-p"><b>Order no: 2345473854</b></p>
                <div className="item-order">
              <div>      
                <p>Items</p></div>
               <div>
                <p>Qty</p>
               </div>
           </div>
           </div>
          </>
    )
}
export default LocationDetails