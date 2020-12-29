import { Dropdown } from 'react-bootstrap'

const DropDown = (props) => {
    return(
        <div>
          <Dropdown className="search-m">
							<Dropdown.Toggle id="dropdown-basic">
							{props.drop.Type}
							</Dropdown.Toggle>
							<Dropdown.Menu>
				{props.drop.item.map( (dropdown, i) =>(
						<Dropdown.Item key={i}>
						{dropdown.title}
					</Dropdown.Item>
					
				))}			
							</Dropdown.Menu>
						</Dropdown> 
          </div>
          
    )
}
export default DropDown