import Resturant from './Resturant'
import Navbar from './FoodNav'
import '../../styles/Resturant.css'

export default function Resturants() {
    const Navdetails = {
        link : 'Heritage Kitchen',
        url :'/',
    }
    return(
        <>
        <div className="foodnav">

    <Navbar details={Navdetails}/>
    </div>
    <Resturant/>
        </>
    )
}
