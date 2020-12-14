import { Container, Col, Row, Navbar, Form } from 'react-bootstrap'
import MenuTab from './MenuTab'
import Group1 from '../Image/Pounded.jpeg'
import Group2 from '../Image/Snacks.jpeg'
import Chicken from '../Image/Chicken.jpeg'
import ChooseMenu from './ChooseMenu'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useSelector} from 'react-redux'
import style from '../moblie.module.css'
import { useState } from 'react'
import { Collapse } from 'bootstrap'
const Menu = () => {
    const [block, setBlock] = useState(style.cod)
    const filterArrow = ( e => e.preventDefault(), console.log(block))
    const loadData = useSelector( state => state.filterStore)
    return(
        <Container className="jumbotron jumbocolor">
            <div class="header-row">
                <div>
                    <p>Menu</p>
                </div>
                <div>
                    <p>Sort by Popular</p>
                </div>
            
            </div>
            <Row className="create-menu">
            <Col md={2} className="content nav">
    			<div className={style.filter}>
                <span className="filter-toggle-text">Filters By</span>
              <i className={style.try} onClick={filterArrow} > <ArrowDropDownIcon /></i>
		</div>
        <div className={block}>
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