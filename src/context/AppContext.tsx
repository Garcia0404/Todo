import { createContext, useEffect, useState } from "react"
import { Task } from "../interfaces/interfaces";
export const Context = createContext({});
export const AppContext: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const [task, setTask] = useState<Task[]>([])
  useEffect(()=>{
    if(task.length!==0){
    const taskJson = JSON.stringify(task)
    localStorage.setItem('Tasks',taskJson)
    }
  },[task])
  useEffect(()=>{
    const jsonTask = localStorage.getItem('Tasks')
    if(jsonTask?.length){
      const tasks = JSON.parse(jsonTask)
      setTask(tasks)
    }
  },[])
  return (
    <Context.Provider value={{ task, setTask }}>
      {children}
    </Context.Provider>
  )
}
