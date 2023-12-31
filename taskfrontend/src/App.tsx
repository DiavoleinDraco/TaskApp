import TaskList from './components/Tasklist'
import TaskForm from './components/TaskForm'

function App(){
  return (
      <div className="bg-zinc-800 h-screen  text-white flex items-center justify-center">
        <div className="bg-gray-950 p-4 w-1/5"> <h1 className=" text-3xl  font-bold text-center block my-2">Tasks App</h1> 
        
        <TaskForm/>
        <TaskList/>
        </div>
      </div>
  )
}

export default App