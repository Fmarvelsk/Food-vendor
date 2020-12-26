import Jollof from '../Image/jollof.jpeg'
import Group1 from '../Image/Group 113.png'
import Group2 from '../Image/Group 114.png'
const CarouselFood = () => {
    return(
        <div id="my-carousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" src={Jollof} alt="First slide"/>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100" src={Group1} alt="Second slide"/>
            </div>
            <div className="carousel-item">
            <img className="d-block w-100" src={Group2} alt="First slide"/>
           </div>
        </div>
     </div>
    
    )
}
export default CarouselFood