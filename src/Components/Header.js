import Form from './Form'
import CarouselFood from './CarouselFood.js'
const Header = () => {
    return(
        <div className="one-piece bg-height">
            
            <div className="work">
                <div className="email-form">
                <div className="mt-5">
                <h1 className="header-highlight">Want Jollof?</h1>
    
    
                    </div>
                   
                    <div class="order-food">
                    <p>Order food, drinks and more from African Vendors</p>
                    </div>
                    <div class="form-field">
                    <Form />
                    </div>
                </div>
                <div className="dds">
                    <CarouselFood/>
 </div>
            </div> 
                   </div>
    )
}
export default Header