import React, { useContext } from 'react'
import { IoRemoveCircleOutline } from "react-icons/io5";
import { MdDownloadDone } from "react-icons/md";
import { AppContext } from '../context/AppContext';
const Completedtask = () => {

  const { completedTask, setCompletedTask } = useContext(AppContext);
  const handleDeleteCompletedTask = (id) => {
    const updatedDoneTask = completedTask.filter((object) => object.id !== id);
    setCompletedTask(updatedDoneTask);
  }
  return (
    <>
      {
        completedTask.length === 0 ? (<p className='dummy-text'>No Task Completed</p>) : (
          completedTask.map((object, index) => (
            <section className='task-card' key={object.id} >
              <div className='task-text'>
                <p className='task'>{object.task}</p>
                <p className='task-role'>{object.mark}</p>
              </div>
              <div className='buttons-spacing'>
                <MdDownloadDone className='successicon' />
                <button className='delete' onClick={() => handleDeleteCompletedTask(object.id)}>
                  <IoRemoveCircleOutline className='deleteicon' />
                </button>
              </div>
            </section>
          )
          )
        )
      }
    </>
  )

}

export default Completedtask
