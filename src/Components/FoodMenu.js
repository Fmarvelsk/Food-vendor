import Foodnav from './FoodNav'
import Menu from './Menu'
import Moblie from './MoblieMenu'

 const Foodmenu = () => {
    return( <>
    <div className="bg-height">
        <div className="nav-adjust">
          <Foodnav/>
        </div>
      </div>
      <Menu/>
      <Moblie/>
      </>
    )
}
export default Foodmenu