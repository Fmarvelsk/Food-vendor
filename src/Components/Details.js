import RoomServiceIcon from '@material-ui/icons/RoomService';
import { Link } from 'react-router-dom'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeDelivery from '../Image/Group 137.svg'

const Details = () => {
    const imageStyle = {
        backgroundImage: `url('https://foodhive.com.ng/wp-content/uploads/2020/10/GrillXpress-foodhive-nigeria-banner.jpeg')`,
        backgroundRepeat  : 'no-repeat',
        height : '250px'
  }

    return(
        <>
          <div style={imageStyle}>


          </div>
          <div className="nav-home mt-4 mb-4">
     <Link to="/home">   <p className="home">Home</p></Link> {`${'>'}`}
     <Link to="/">
                    <p className="home">Choose customer</p></Link>{`${'>'}`}
                    <Link to="/"><p className="home">Merchants</p></Link>
        </div>
        <div className="item-order wrap-logo mr-5 ml-5">

            <div className="logo-flex"> 
            <div><img className='merchant-logo' src='https://foodhive.com.ng/wp-content/uploads/2020/09/snackland-foodhive-nigeria-logo.jpg' alt="logomerchant"/>
            </div>
            <div>
              <p className="logo">Heritage Kitchen</p>
              <p className="logo">Rating</p>
              <p className="logo">(African Cuisine)</p>
            </div>
            </div>
            <div className="border-delivery">
           
    <div class="Heading">
        <div class="Cell">
           <RoomServiceIcon className="mr-3"/> <p className="mr-3">Minimum order:</p><b><p>£ 5.00</p></b>
        </div>
        <div class="Cell igcell">   
        <img src={HomeDelivery} alt="Delivery" className="mr-3"/><p className="mr-3">Delivery fee:</p><b><p>12 noon</p></b>
       
        </div>
       </div>
       <div class="Heading">
        <div class="Cell">
        <AccessAlarmIcon className="mr-3"/> <p className="mr-3">Starting from:</p><b><p>£ 20.00</p></b>
        </div>
        <div class="Cell igcell">
           <LocationOnIcon className="mr-3"/> <p>St. Edmondsbury, Lucan, Co.Dublin, K78 Y892</p>
        </div>
    </div></div>
        

        </div>
         </>
    )
}
export default Details