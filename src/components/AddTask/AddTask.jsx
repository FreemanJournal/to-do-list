import React from 'react'
import { useForm } from 'react-hook-form';
export default function AddTask() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmitHandler = (data) => {
        console.log('data',data);
    }
    return (

        <section className="bg-gray-100">
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-5">
                        <h2 className='uppercase font-bold mb-5'>Add a new task</h2>
                        <form onSubmit={handleSubmit(onSubmitHandler)} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Task Name</label>
                                <input className="w-full p-3 text-sm border-gray-200 rounded-lg  focus:ring-0 focus:outline-none focus:border-slate-800" placeholder="Task Name" type="text" id="name" {...register("taskName")} />
                            </div>

                           

                            <div>
                                <label className="sr-only" htmlFor="description">Description</label>
                                <textarea
                                    className="w-full p-3 text-sm border-gray-200 rounded-lg  focus:ring-0 focus:outline-none focus:border-slate-800"
                                    placeholder="Description"
                                    rows="3"
                                    id="description"
                                    {...register("description")} 
                                ></textarea>
                            </div>

                            <div className="mt-4 flex">
                                <button
                                    type="submit"
                                    className="inline-flex items-center ml-auto justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                                >
                                    <span className="font-medium"> Add Task</span>

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
