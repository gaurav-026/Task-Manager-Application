import React from 'react'
import './Home.css'
import { IoAddCircleOutline } from "react-icons/io5";
import { LuLineChart } from "react-icons/lu";


const Home = () => {
  return (
    <>
    <section className='section1'>
    <h5 className='welcome'>Welcome to Task Master!</h5>
    <div className='buttons'>
    <button className='addbtn'>
    <IoAddCircleOutline className='addlogo'/>Add New
    </button>
    <button className='addbtn'>
    <LuLineChart className='addlogo'/>Today's Analaysis
    </button>
    </div>
    </section>
    </>
  )
}

export default Home
