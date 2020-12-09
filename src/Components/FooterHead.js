import {Container, Form } from 'react-bootstrap'
import Arrow from '../Image/arrow.png'
import Jollof from '../Image/jollof2.png'
const FooterHeader = () => {
    return(
        <div className="bg-footer-header mt-5">
                <div className="mt-3 jumbo">
                <Container className="text-center ready">
            <h1 className="h1-change">Ready to Order ?</h1>
            <div className="browse-local">
           <p> Browse local restaurants and businesses for delivery by entering your address below?</p>
            </div>
            <div className="form-flex">
                <Form inline>
                <img className="s" src={Arrow} alt="arrow"/>
                    <Form.Control className="form-control-footer" type="text" placeholder="Email address or ericode"/>
                   
                    <div className="op-btn">
                    <button className="dl-btn"/>
                    </div>
                </Form>
            </div>
            <div className="postion-img">
                
                <img className="img-change" src={Jollof} alt="jollof"/>
            </div>
                </Container>
                </div>
        </div>
    )
}
export default FooterHeader