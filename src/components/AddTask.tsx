import { useContext, useState } from "react"
import { Context } from "../context/AppContext"
import { Task,TaskSetter } from "../interfaces/interfaces"

interface Props {
  title: string
  taskDescription: string
  state?: boolean
  id:string
}
export const AddTask: React.FC<Props> = ({ state = false, taskDescription, title, id }) => {
  const [completed, setCompleted] = useState(state)
  const { task, setTask } = useContext(Context) as { task: Task[], setTask:TaskSetter };
  const handleClick = () => {
    setCompleted(!completed)
  }
  const removeTask = () => {
    const updatedTasks = task.filter((taskItem:Task) => taskItem.id !== id);
    setTask(updatedTasks);
    console.log(task)
  }
  const stateTask = completed ? 'text-green-400':'text-red-400'
  const stateText = completed ? 'Completado':'Pendiente'
  const styleCheckbox = completed ? 'bg-purple-500 border' : 'bg-white border border-gray-300'
  const styleTitle = completed ? 'line-through' : ''

  return (
    <article id={id} className="bg-white-bg p-3 flex justify-between gap-4">
      <div className="flex flex-1 items-center gap-5">
        <span onClick={handleClick} className={`${styleCheckbox} p-1 transition-all hover:bg-purple-300`}>
          <svg className="w-6 h-6 stroke-white stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </span>
        <main className="flex-1">
          <h1 className={`${styleTitle} text-xl text-gray-500`}>{title}</h1>
          <span className={`hidden`}>{state}</span>
          <p className="font-light text-balance">{taskDescription}</p>
        </main>
      </div>
      <div className="flex gap-2 py-2">
        <span className={`${stateTask} p-2 grid place-content-center`}>
          <span className="font-bold">{stateText}</span>
        </span>
        <button id={id} onClick={removeTask} className="hover:outline outline-2 outline-gray-200 cursor-pointer p-2 grid place-content-center">
          <img src="/delete.svg" alt="removeTask" width='25px' height='25px' />
        </button>
      </div>
    </article>
  )
}
