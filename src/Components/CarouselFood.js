import Jollof from '../Image/jollof.jpeg'
import Group1 from '../Image/Group 113.png'
import Group2 from '../Image/Group 114.png'
const CarouselFood = () => {
    return(
        <div id="my-carousel" class="carousel slide carousel-fade" data-ride="carousel" data-interval="3000">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src={Jollof} alt="First slide"/>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={Group1} alt="Second slide"/>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src={Group2} alt="First slide"/>
           </div>
        </div>
        <a class="carousel-control-prev" href="#my-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#my-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    
    )
}
export default CarouselFood