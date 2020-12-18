import React, {useEffect} from 'react'
import {Row, Container, Col } from 'react-bootstrap'
import ResturantCheck from './ResturantCheck'
import Checkout from './Checkout'
import Tab from './Tab'
const Resturant = () => {
    useEffect( () => {
        document.body.style.backgroundColor = '#F9F9F9'
            }, [])
           
const check = [{
    Title:'Soup'
},
{
    Title: 'Swallow'
},{
    Title :'Rice'
},{
    Title : 'slides'
},{
    Title : 'Bread'
},{
    Title : 'Beans'
}, {
    Title : 'Others'
}]
return(<Container className="pb-5 mb-5 pt-5 my-container-lg my-container">
 <Row className="tabscreen">
<Col md={3} lg={2} sm={9}>
 <div className="mt-3 mb-3 setspacing done">
 <p>Categories</p>
 <div className="underline-order"></div>
 </div>
 <div className="panel">
     <div className="padding-order">
     <ResturantCheck box={check}/>
     </div>
 </div>
</Col>


<Col md={5} lg={7} sm={9}>
 
<div className="mt-3 mb-3">
<div>
<Tab sd={check}/>
    </div>

</div>
<div className="panel">
         </div>


</Col>

<Col md={4} lg={3} sm={9}>
<div className="mt-3 mb-3 done">
   <p>Basket details</p>
   
<div className="underline-details"></div>
    </div>
<div className="panel sp">
<Checkout/>
</div>
</Col>
</Row>
</Container>

 )
}
export default Resturant