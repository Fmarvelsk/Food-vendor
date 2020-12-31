import {Form} from 'react-bootstrap'
const ResturantCheck = (props) => {
    return(
        <>
        
        {props.box.map( (check, i) =>{
            return(
                            <div className="checkbox-menu form-check" key={i}>
                    
                    <input type="checkbox" class=" box-color form-check-input position-static "/> <p className="mg">{check.Title}</p>
                            </div>
            )
                            
        })}
        </>
    )
}
export default ResturantCheck