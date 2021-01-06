import { useState } from 'react'
import {Col, Card} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'
import SvgPhoto from '../../Image/assests/Group 230.svg'
const DriversPassport = (props) => {
    const [file, showFile] = useState()
    const fileUpload = (e) =>{
        var files = e.target.files[0]?.name
        showFile(files)
    }
    return(
  <>
          <Col md={4}>
            <p className="bold under">{props.h3}</p>
            <Card> 
                <div className="wrapper">
  <div className="file-upload">
  {file}
    <input type="file" onChange={fileUpload}/>
    <img src={SvgPhoto} className="svg-photos" alt="upload"/>
        <p className="rf4">Drag and drop, or click to upload 240 x 240px minimum (JPG or PNG file, up to 10 MB)</p>
  </div>
  
  </div>
            </Card>
          </Col>
          </>
    )
}
export default DriversPassport

