import { createContext, useState } from "react"

export const Context = createContext({}); 
export const AppContext:React.FC<{children:JSX.Element|JSX.Element[]}> = ({children}) => {
  const [task,setTask] = useState<string[]>([])
  return (
    <Context.Provider value={{task,setTask}}>
      {children}
    </Context.Provider>
  )
}
