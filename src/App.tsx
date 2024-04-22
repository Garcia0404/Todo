import { useContext } from "react"
import { AddTask } from "./components"
import { Context } from "./context/AppContext"
export const App = () => {
  const { task } = useContext(Context); 
  return (
    <main className="text-gray-f mx-auto my-8 max-w-screen-tablet p-3 rounded-md grid gap-4">
      <h1 className="text-5xl font-bold text-center">Todo App</h1>
      <span className="flex items-center justify-center gap-2">
        <img src="/react.svg" alt="React-icon" height='40px' width="40px" />
        <img src="/vite.svg" alt="Vite-icon" height='40px' width="40px" />
        <img src="/ts.svg" alt="TypeScript-icon" height='40px' width="40px" />
      </span>

      <div className="flex justify-between">
        <button className="bg-blue-500 font-medium text-white rounded-md p-2 mt-6 hover:bg-blue-300 transition-all">Añadir Tarea</button>
      </div>

      <section className="bg-gray-200 flex flex-col p-5">
        <AddTask title="Hacer tarea" task="Probando typescript"/>
      </section>
    </main>
  )
}
