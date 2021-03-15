import { Dropdown } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { filterValue } from '../../store/index'

const DropDown = (props) => {
	const dispatch = useDispatch()
	const showValue = (result) => dispatch(filterValue({value :result})) 

	    return(
        <div>
          <Dropdown className="search-m">
							<Dropdown.Toggle id="dropdown-basic">
							{props.drop.Type}
							</Dropdown.Toggle>
							<Dropdown.Menu>
				{props.drop.item.map( (dropdown, i) =>(
						<Dropdown.Item key={i} onClick={ () => showValue(dropdown.title)}>
						{dropdown.title}
					</Dropdown.Item>
					
				))}			
							</Dropdown.Menu>
						</Dropdown> 
          </div>
          
    )
}
export default DropDown