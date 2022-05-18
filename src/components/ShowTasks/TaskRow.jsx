import React, { useState } from 'react'
import { BsTrashFill } from 'react-icons/bs';
import { toast } from 'react-toastify';

export default function TaskRow({ user,deleteHandler }) {
    const [isComplete, setIsComplete] = useState(false);

    const completeHandler = () =>{
        setIsComplete(prev => !prev)
        toast.success(`${user.taskName} is completed.`)
    }


    return (
        <tr >

            <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                {user.taskName}
            </td>

            <td className={`p-4 text-gray-700 whitespace-nowrap ${isComplete && "line-through"}`}>{user.description}</td>
            <td className="p-4 whitespace-nowrap">
                {isComplete ? <button
                    className="bg-pink-600 text-white px-3 py-1.5 rounded text-xs font-medium"

                >
                    completed
                </button> :
                    <button
                        className="bg-green-100 text-green-700 px-3 py-1.5 rounded text-xs font-medium"
                        onClick={completeHandler}
                    >
                        complete
                    </button>}
            </td>
            <td className="p-4 whitespace-nowrap">
                <button className="inline-block p-3 text-pink-600 border border-pink-600 rounded-full hover:text-white hover:bg-pink-600 active:bg-pink-500 focus:outline-none focus:ring" onClick={()=>deleteHandler(user.id)}>
                    <span className="sr-only"> Delete </span>
                    <BsTrashFill />
                </button>
            </td>

        </tr>
    )
}
