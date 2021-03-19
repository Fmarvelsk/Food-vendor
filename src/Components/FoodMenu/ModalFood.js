import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Radio from './Radio'
const ModalFood = (props) => {

    return (
        <>
            <Modal
            size='sm'
            show={props.show}
            onHide={props.handleClose}
            aria-labelledby="modal-sizes-title-sm"
            centered >
            
            <Modal.Header closeButton>
          <Modal.Title id="modal-sizes-title-sm">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="food-flex">
          <Radio/>
        </Modal.Body>
      </Modal>
        
        </>
    )
}

export default ModalFood