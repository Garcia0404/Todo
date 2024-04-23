export interface Task {
    titleTask:string
    task:string
    id:string
}
export type TaskSetter = (task:Task[])=>void