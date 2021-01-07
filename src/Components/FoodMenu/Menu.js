import { Container, Col, Row, Dropdown } from 'react-bootstrap'
import MenuTab from './MenuTab'
import Group1 from '../../Image/kitchen (1).jpeg'
import Group2 from '../../Image/kitchen (2).jpeg'
import Chicken from '../../Image/kitchen (3).jpeg'
import ChooseMenu from './ChooseMenu'
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import {useSelector} from 'react-redux'
import {CheckMenu} from '../Business/Data'
import style from '../../styles/moblie.module.css'
import { useState } from 'react'

const Menu = () => {
    const [block, setBlock] = useState(true)
    const [sorting, setSorting] = useState('Rating');

    const loadData = useSelector( state => state.filterStore)

    const Showfilter = () => {
        setBlock(!block)
    }
    return(
        <Container className={`${style.jumbocolor} jumbotron`}>
            <Row className={style.create_menu}>
            <Col md={2} className="content nav">
    			<div className={style.filter} onClick={Showfilter}>
                <span className="filter-toggle-text">Filters By</span>
              <i className={block ? style.down : style.up} > <ArrowDropUpIcon/></i>
		</div>
        <div className={block ? style.cod : style.show}>
        <div className="my-row">
            <RestaurantMenuIcon className="rescolor"/>
                    <p>Menu</p>
                </div>
            
			    <ChooseMenu check={CheckMenu}/>
                
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
                    <span className="meal-span"> More meals</span>
                </div>

                </div>
               
</Col>

               
            </Row>
        </Container>
    )
}
export default Menu