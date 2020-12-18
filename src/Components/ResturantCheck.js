import {Form} from 'react-bootstrap'
const ResturantCheck = (props) => {
    return(
        <>
        
        {props.box.map( (check, i) =>{
            return(
                            <div className="checkbox-menu" key={i}>
                    
                            <Form.Check /> <p>{check.Title}</p>
                            </div>
            )
                            
        })}
        </>
    )
}
export default ResturantCheck