import { useContext, useState } from "react"
import { AddTask } from "./components"
import { Context } from "./context/AppContext"
import { Task,TaskSetter } from "./interfaces/interfaces"
import { AnimatePresence,motion } from "framer-motion"
export const App = () => {
  const [formData, setFormData] = useState({
    titleTask: '',
    task: ''
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value }: { name: string; value: string } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const { task, setTask } = useContext(Context) as { task: Task[], setTask:TaskSetter };
  const onsubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTask([...task, {...formData,id:`${Date.now()}`}])
    console.log(task)
    setFormData(
      {
        titleTask: '',
        task: ''
      }
    )
  }

  const listTodo = () => {
    if (task.length == 0) {
      return (
        <div className="text-xl text-center">Sin tareas nuevas</div>
      )
    } else {
      return (
        <section className="bg-gray-200 flex flex-col p-2 mobile:p-5 gap-1">
          <AnimatePresence>
          {
            task.map((task, index) => (
              <AddTask key={index} i={index} title={task.titleTask} taskDescription={task.task} id={task.id} />
            ))
          }
          </AnimatePresence>
        </section>
      )
    }
  }
  return (
    <main className="text-gray-f mobile:mx-auto my-8 max-w-screen-tablet mobile:p-3 grid gap-4">
      <motion.h1 initial={{scale:0}} animate={{scale:1}} className="text-5xl font-bold text-center">Todo App</motion.h1>
      <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.6,delay:0.3}} className="flex items-center justify-center gap-2">
        <img src="/react.svg" alt="React-icon" height='40px' width="40px" />
        <img src="/vite.svg" alt="Vite-icon" height='40px' width="40px" />
        <img src="/ts.svg" alt="TypeScript-icon" height='40px' width="40px" />
      </motion.span>

      <div className="flex justify-between">
        
      </div>

      <div className="bg-gray-200 p-4 mobile:rounded-xl">
        <form onSubmit={onsubmit} className="flex flex-col gap-5">
          <div className="flex flex-col mobile:flex-row gap-4 items-center">
            <label className="text-lg font-bold self-start" htmlFor="titleTask">Tarea</label>
            <input required className="p-2 rounded-md w-full flex-1" onChange={handleInputChange} name="titleTask" value={formData.titleTask} type="text" placeholder="Ingrese el título de la tarea" />
          </div>
          <div className="flex gap-4 items-center flex-col mobile:flex-row ">
            <label className="text-lg font-bold self-start" htmlFor="task">Descripción</label>
            <input required className="p-2 rounded-md flex-1 w-full" onChange={handleInputChange} name="task" value={formData.task} type="text" placeholder="Ingrese la tarea" />
          </div>
          <button type="submit" className="bg-blue-500 font-medium text-white rounded-md p-2.5 hover:bg-blue-300 transition-all">Añadir Tarea</button>
        </form>
      </div>
      {
        listTodo()
      }

    </main>
  )
}
