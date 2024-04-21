import React from 'react'
import { GoDotFill } from "react-icons/go";
import { IoRemoveCircleOutline } from "react-icons/io5";
import './Task.css'

const Task = () => {
  return (
    <section className='task-card'>
    <div className='task-text'>
    <p className='task'>Low Level Designing, Next.js, Assessment</p>
    <p className='task-role'>Office work</p>
    </div>
    <div className='buttons-spacing'>
    <button className='donebtn'>
    <GoDotFill className='dot' /> Done
    </button>
    <button className='donebtn'>
    <GoDotFill className='dot2' /> Not Done
    </button>
    <button className='delete'>
    <IoRemoveCircleOutline className='deleteicon'/>
    </button>
    </div>
    </section>
  )
}

export default Task