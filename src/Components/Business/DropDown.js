import { Dropdown } from 'react-bootstrap'
const DropDown = () => {
    return(
        <div >
          <Dropdown className="search-m">
							<Dropdown.Toggle id="dropdown-basic">
								Catergories: 
							</Dropdown.Toggle>
							<Dropdown.Menu>
								<Dropdown.Item >
									Soup
								</Dropdown.Item>
								<Dropdown.Item >
									Swallow
								</Dropdown.Item>
								<Dropdown.Item >
									Rice
								</Dropdown.Item>
                                <Dropdown.Item >
									Slides
								</Dropdown.Item>
                                <Dropdown.Item >
									Breads
								</Dropdown.Item>
                                <Dropdown.Item >
									Beans
								</Dropdown.Item>
                                <Dropdown.Item >
                                    Others
								</Dropdown.Item>
							
							</Dropdown.Menu>
						</Dropdown> 
          </div>
          
    )
}
export default DropDown