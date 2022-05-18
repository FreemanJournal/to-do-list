import React, { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsTrashFill } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../utilities/firebase.init';
import Loader from '../../utilities/Loader';
import { GlobalContext } from '../context/GlobalContext';
import TaskRow from './TaskRow';

export default function ShowTasks() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const {allTask,setAllTask} = useContext(GlobalContext)


  const deleteHandler = (id) =>{
    setAllTask(prev => prev.filter(item=>item.id !== id))   
  }

  if (loading) {
    return <Loader />
  }
  const bookingTable = ["Task Name", "Description", "Status", ""]


  return (
    <div className="overflow-x-auto px-20 mb-32">
      <h2 className='text-3xl font-bold text-center my-10 uppercase'>My Daily Tasks</h2>

      {
          allTask.length === 0 ? <h1 className="my-10 text-center text-3xl w-full">Create a new task</h1>:
        <table className="min-w-full text-sm divide-y divide-gray-200">
        <thead>
          <tr>

            {bookingTable.map((item, index) => {

              return (
                <th key={index} className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                  <div className="flex items-center">
                    {item}

                  </div>
                </th>
              )
            })}

          </tr>
        </thead>

       
      
       <tbody className="divide-y divide-gray-100">
          {
            allTask?.slice().reverse().map((user, i) => <TaskRow key={i} user={user} deleteHandler={deleteHandler}/>)
          }


        </tbody>
      </table>}
    </div>
  )
}
