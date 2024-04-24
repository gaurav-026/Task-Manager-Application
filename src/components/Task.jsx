import React, { useState, useContext } from 'react'
import { GoDotFill } from "react-icons/go";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './Task.css'
import { AppContext } from '../context/AppContext';

const Task = () => {

  //fetching the data from useContext
  const { data, setData, taskAnalyse } = useContext(AppContext);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState('');
  const [editedMark, setEditedMark] = useState('');


  const taskCompleted = (id) => {
    const updatedData = data.filter((object) => object.id !== id);
    const doneTask = data.find((object) => object.id === id);
    taskAnalyse(updatedData, doneTask);

  }
  const handleDelete = (id) => {
    const updatedData = data.filter((object) => object.id !== id);
    setData(updatedData);
  }

  const handleEdit = (id) => {
    const taskToEdit = data.find((object) => object.id === id);
    // console.log(taskToEdit);
    setEditTaskId(id);
    setEditedTask(taskToEdit.task);
    setEditedMark(taskToEdit.mark);
    setShowEditModal(true);
  }

  const handleEditSave = () => {
    const updatedData = data.map((task) =>
      task.id === editTaskId ? { ...task, task: editedTask, mark: editedMark } : task
    );
    setData(updatedData);
    setShowEditModal(false);

    // console.log(updatedData);
  };

  const handleCloseEdit = () => {
    setShowEditModal(false);
  };

  return (
    <>
      {
        data.length === 0 ? (<p className='dummy-text'>No Task Added</p>) : (
          data.map((object, index) => (
            <section className='task-card' key={object.id}>
              <div className='task-text'>
                <p className='task'>{object.task}</p>
                <p className='task-role'>{object.mark}</p>
              </div>
              <div className='buttons-spacing'>
                <button className='donebtn' onClick={() => taskCompleted(object.id)}>
                  <GoDotFill className='dot' /> Done
                </button>
                <button className='delete' onClick={() => handleEdit(object.id)}>
                  <FiEdit className='deleteicon' />
                </button>
                <button className='delete' onClick={() => handleDelete(object.id)}>
                  <IoRemoveCircleOutline className='deleteicon' />
                </button>
              </div>
            </section>
          ))

        )
      }

      {showEditModal && (
        <Modal show={showEditModal} onHide={handleCloseEdit}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Task</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg: going to market after office"
                  autoFocus
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mark Important</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg: very important"
                  autoFocus
                  value={editedMark}
                  onChange={(e) => setEditedMark(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className='addbtn2' onClick={handleCloseEdit}>
              Close
            </Button>
            <Button className='addbtn' onClick={handleEditSave}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      )}



    </>
  )
}

export default Task
