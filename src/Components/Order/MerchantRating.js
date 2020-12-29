import Rating from './ClickRating'
import Logo from '../../Image/Group 88@2x.png'
const MerchantRating = () => {
    return(
        <>
       {/* <div className="mt-3 mb-3 ">
        <p>Rate mercent</p>
        <div className="underline-order"></div>
            
    </div>*/}
          <div>
              <div className="rate-star pt-3">
              <img className='merchant-logo pb-3' src={Logo} alt="logomerchant"/>
                  <p>Heritage Kitchen</p>
                  <p>(African Cuisine)</p>
                  <Rating/>
              </div>

</div>
</>

    )
}
export default MerchantRating