import { Task } from "../interface/interfaces"

const API = 'http://localhost:3000'


export const createTaskRequest = (task: Task) => 
    fetch(`${API}/tasks`,{
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
            'Content-Type': 'application/json'
        }
    })