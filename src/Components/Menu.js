import { Container, Col, Row, Navbar, Form, Dropdown } from 'react-bootstrap'
import MenuTab from './MenuTab'
import Group1 from '../Image/Pounded.jpeg'
import Group2 from '../Image/Snacks.jpeg'
import Chicken from '../Image/Chicken.jpeg'
import ChooseMenu from './ChooseMenu'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useSelector} from 'react-redux'
import style from '../moblie.module.css'
import { useState } from 'react'
const Menu = () => {
    const [block, setBlock] = useState(style.cod)
    const [sorting, setSorting] = useState('Rating');
    const filterArrow = ( e => e.preventDefault(), console.log(block))
    const loadData = useSelector( state => state.filterStore)
    return(
        <Container className="jumbotron jumbocolor">
            <div class="header-row">
             </div>
            <Row className="create-menu">
            <Col md={2} className="content nav">
    			<div className={style.filter}>
                <span className="filter-toggle-text">Filters By</span>
              <i className={style.try} onClick={filterArrow} > <ArrowDropDownIcon /></i>
		</div>
        <div className={block}>
        <div className="my-row">
            <RestaurantMenuIcon className="rescolor"/>
                    <p>Menu</p>
                </div>
            
			    <ChooseMenu
              Title='Soup'
              l1='Egusi'
              l2='Efo riro'
              l3='Okro'
              l4='Ogbono'
              l5='Stew'
              />    
              <ChooseMenu
              Title='Slides'
              l1='Fried rice'
              l2='Jollof rice'
              l3='White rice'
              l4='Plantain rice'
              l5='Yam and Egg'/> 
              
              <ChooseMenu
              Title='Others'
              l1='Small chops'
              l2='Agege bread'
              l3='Groundnut'
              l4='Gizdodo'
              l5='Grilled fish'/>  
             </div>
                         </Col>
            
            <Col md={9}>
            <div className="dropdown-sort">
                <Dropdown>
							<Dropdown.Toggle variant="success" id="dropdown-basic">
								Sort by: {sorting}
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item onClick={() => setSorting('Lowest Rating')}>
									Lowest Rating
								</Dropdown.Item>
								<Dropdown.Item onClick={() => setSorting('Highest Rating')}>
									Highest Rating
								</Dropdown.Item>
								<Dropdown.Item onClick={() => setSorting('Latest Rating')}>
									Latest
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown> </div>
            
            
                <div className="color-menu pb-3">
                <MenuTab 
                Image={Group1}
                Name='Heritage Kitchen Lucan'/>
                <MenuTab 
                Image={Group2}
                Name='Intercontinental , Parnel sq.'
                />
                <MenuTab Image={Chicken}
                Name='Rilwan Kitchen , Ballymun.'/>
                 <div className="text-center">
                    <a href=""> More meals</a>
                </div>

                </div>
               
</Col>

               
            </Row>
        </Container>
    )
}
export default Menu