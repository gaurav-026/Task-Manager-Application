import React, { useContext } from 'react'
import { GoDotFill } from "react-icons/go";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import './Task.css'
import { AppContext } from '../context/AppContext';

const Task = () => {

  //fetching the data from useContext
  const {data,setData, taskAnalyse} = useContext(AppContext);

  const taskCompleted = (id)=>{
      const updatedData = data.filter((object)=> object.id !== id );
      const doneTask = data.find((object)=> object.id === id);
      taskAnalyse(updatedData, doneTask);

  }
  const handleDelete = (id)=>{
    const updatedData = data.filter((object)=> object.id !== id);
    setData(updatedData);
  }

  return (
    <>
    {
      data.length === 0 ? (<p className='dummy-text'>No Task Added</p> ) : (
        data.map((object, index) =>(
          <section className='task-card' key={object.id}>
          <div className='task-text'>
          <p className='task'>{object.task}</p>
          <p className='task-role'>{object.mark}</p>
          </div>
          <div className='buttons-spacing'>
          <button className='donebtn' onClick={()=> taskCompleted(object.id)}>
          <GoDotFill className='dot' /> Done
          </button>
          <button className='delete'>
          <FiEdit className='deleteicon'/>
          </button>
          <button className='delete' onClick={()=> handleDelete(object.id)}>
          <IoRemoveCircleOutline className='deleteicon'/>
          </button>
          </div>
          </section>
        ))
        
      )
    }

    

    </>
  )
}

export default Task
