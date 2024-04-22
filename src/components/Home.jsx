import React from 'react'
import './Home.css'
import { IoAddCircleOutline } from "react-icons/io5";
import { LuLineChart } from "react-icons/lu";
import Task from './Task';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';



const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Task</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg: going to market after office"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mark Important</Form.Label>
              <Form.Control
                type="text"
                placeholder="eg: very important"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='addbtn2' onClick={handleClose}>
            Close
          </Button>
          <Button className='addbtn' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


      <section className='section1'>
        <h5>Welcome to Task Master!</h5>
        <div className='buttons'>
          <button className='addbtn' onClick={handleShow}>
            <IoAddCircleOutline className='addlogo' />Add New
          </button>
          <Link to={'/analytics'}>
            <button className='addbtn'>
              <LuLineChart className='addlogo' />Today's Analaysis
            </button>
          </Link>
        </div>
      </section>

      <h4>Your Today's Tasks</h4>
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />

    </>
  )
}

export default Home
