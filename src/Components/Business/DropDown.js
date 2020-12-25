import { Dropdown } from 'react-bootstrap'
const DropDown = (props) => {
    return(
        <div>
              <Dropdown className="search-m">
                      <Dropdown.Toggle id="dropdown-basic">
                         {props.item.Type} 
                      </Dropdown.Toggle>
                    {console.log(props)}
            {props.item?.item.map( (res, i) => (
                      <Dropdown.Menu>
                          <Dropdown.Item >
                              {console.log(res.title)}
                          </Dropdown.Item>
                                </Dropdown.Menu>
                   
    
            ))}
            </Dropdown>
                    </div>
          
    )
}
export default DropDown