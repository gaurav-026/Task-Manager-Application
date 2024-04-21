import React from 'react'
import Task from './Task'
import './Analytics.css'
import Completedtask from './Completedtask'
const Analytics = () => {
  return (
    <section>
        <h3>Your Today's Analysis</h3>
        <h4>Completed Tasks:</h4>
        <Completedtask/>
        <h4>Remaining Tasks:</h4>
        <Completedtask/>
    </section>
  )
}

export default Analytics