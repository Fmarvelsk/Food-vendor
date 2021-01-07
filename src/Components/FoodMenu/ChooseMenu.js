import {Form} from 'react-bootstrap'
const ChooseMenu = (props) => {
    return(
        <>
        {props.check.map((props, i ) =>{
          return(
            <div className="color-menu mb-5" key={i}>
            <div className="checkbox-menu pt-3">
                
            <Form.Check /> <p>{props.Title}</p>
            </div>
            <div className="hr-u">
            <div className="checkbox-menu pt-3">
            <Form.Check /> <p>{props.l1}</p>
            </div>
            <div className="checkbox-menu pt-3">
            <Form.Check /> <p>{props.l2}</p>
            </div>
              <div className="checkbox-menu pt-3">
            <Form.Check /> <p>{props.l3}</p>
            </div>
          
            <div className="checkbox-menu pt-3">
            <Form.Check /> <p>{props.l4}</p>
            </div>
            <div className="checkbox-menu pt-3">
            <Form.Check /> <p>{props.l5}</p>
            </div>
            
            </div>
            <div className="more-meals hr-u mt-5 mb-3">
                <span className="meal-span"> More meals</span>
            </div>
                    </div>
      
          )
        })} 
              
        </>
    )
}
export default ChooseMenu