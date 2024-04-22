import { useState } from "react"

interface Props {
  title: string
  task: string
  state?: boolean
}
export const AddTask: React.FC<Props> = ({ state = false, task, title }) => {
  const [completed, setCompleted] = useState(state)
  const handleClick = () => {
    setCompleted(!completed)
  }
  const styleCheckbox = completed ? 'bg-purple-500 border' : 'bg-white border border-gray-300'
  const styleTitle = completed ? 'line-through' : ''
  return (
    <article className="bg-white-bg p-3 flex justify-between">
      <div className="flex items-center gap-2">
        <span onClick={handleClick} className={`${styleCheckbox} p-1 transition-all hover:bg-purple-300`}>
          <svg className="w-6 h-6 stroke-white stroke-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </span>
        <main>
          <h1 className={`${styleTitle} text-xl text-gray-500`}>{title}</h1>
          <span className={`hidden`}>{state}</span>
          <p>{task}</p>
        </main>
      </div>
      <div className="flex gap-2 p-2">
        <span className="hover:outline outline-2 outline-gray-200 cursor-pointer p-2 grid place-content-center">
          <img src="/edit.svg" alt="editTask" width='25px' height='25px' />
        </span>
        <span className="hover:outline outline-2 outline-gray-200 cursor-pointer p-2 grid place-content-center">
          <img src="/delete.svg" alt="removeTask" width='25px' height='25px' />
        </span>
      </div>
    </article>
  )
}
