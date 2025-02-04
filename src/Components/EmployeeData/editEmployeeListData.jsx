import React, { useState } from 'react'
import "../../Components/EmployeeData/EmployeeListTable.module.css"
import { Button, Offcanvas } from 'react-bootstrap'

const EditEmployeeListData = (props) => {
    //  const [show, setShow] = useState(false);

    const handleClose = () => props.setOpenSidebar(false);
    const handleShow = () => props.setOpenSidebar(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow} className="me-2">
    
      
    </Button>
    <Offcanvas show={props.openSidebar} onHide={handleClose} placement="end" >

      <Offcanvas.Header closeButton>
        
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      
      </Offcanvas.Header>
      
      <Offcanvas.Body>
     
      </Offcanvas.Body>
    </Offcanvas>
  </>
  )
}

export default EditEmployeeListData;
