import Rating from './ClickRating'
const MerchantRating = () => {
    return(
        <>
        <div className="mt-3 mb-3 ">
        <p>Rate mercent</p>
        <div className="underline-order"></div>
            
          </div>
          <div className="panel">
              <div className="rate-star">
                  <p>Logo</p>
                  <p>Heritage Kitchen</p>
                  <p>(African Cuisine)</p>
                  <Rating/>
              </div>

</div>
</>

    )
}
export default MerchantRating