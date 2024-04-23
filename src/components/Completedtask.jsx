import React from 'react'
import { IoRemoveCircleOutline } from "react-icons/io5";
import { MdDownloadDone } from "react-icons/md";

const Completedtask = () => {
  return (

      <section className='task-card'>
    <div className='task-text'>
    <p className='task'>Low Level Designing, Next.js, Copy, Assessment, Context API</p>
    <p className='task-role'>Office work</p>
    </div>
    <div className='buttons-spacing'>
    <MdDownloadDone className='successicon'/>
    <button className='delete'>
    <IoRemoveCircleOutline className='deleteicon'/>
    </button>
    </div>
    </section>
  )
}

export default Completedtask
