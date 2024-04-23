import React, { useContext } from 'react'
import { GoDotFill } from "react-icons/go";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import './Task.css'
import { AppContext } from '../context/AppContext';

const Task = () => {

  //fetching the data from useContext
  const {data} = useContext(AppContext);

  

  return (
    <>
    {
      data.length === 0 ? (<p>No Task Added</p> ) : (
        data.map((object) =>(
          <section className='task-card'>
          <div className='task-text'>
          <p className='task'>{object.task}</p>
          <p className='task-role'>{object.mark}</p>
          </div>
          <div className='buttons-spacing'>
          <button className='donebtn'>
          <GoDotFill className='dot' /> Done
          </button>
          <button className='delete'>
          <FiEdit className='deleteicon'/>
          </button>
          <button className='delete'>
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
