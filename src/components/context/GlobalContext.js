import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";

export const GlobalContext = createContext();

export default function GlobalProvider({ children }) {
    const [allTask, setAllTask] = useState();

    const { isLoading, data } = useQuery('tasks', () => fetch(`/data/data.json`).then(res => res.json()))
    useEffect(()=>{
       
        setAllTask(data)
    },[data])

    return <GlobalContext.Provider value={{allTask,setAllTask}}>{children}</GlobalContext.Provider>
}