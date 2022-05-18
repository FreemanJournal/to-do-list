import React from 'react'
import AddTask from '../components/AddTask/AddTask'
import Navbar from '../components/Navbar/Navbar'
import ShowTasks from '../components/ShowTasks/ShowTasks'

export default function Home() {
  return (
    <div>
        <Navbar/>
        <AddTask/>
        <ShowTasks/>
      </div>
  )
}
