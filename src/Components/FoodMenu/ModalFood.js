import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'

const ModalFood = () => {
    const [smShow, setSmshow] = useState(false)
    
    return (
        <>
            <Modal
            size='sm'
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            centered >
            
            <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
        
        </>
    )
}

export default ModalFood