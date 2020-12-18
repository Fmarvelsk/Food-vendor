import Resturant from './Resturant'
import Navbar from './FoodNav'
import '../Resturant.css'

export default function Resturants() {
    const Navdetails = {
        link : 'home',
        url :'/',
        Image : 'https://foodhive.com.ng/wp-content/uploads/2020/10/GrillXpress-foodhive-nigeria-banner.jpeg'
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
