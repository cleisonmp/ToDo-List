import { Check, Trash } from "phosphor-react";

interface TaskProps extends TaskInfo{
  onTaskStatusChange: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function Task({id,content,isFinished,onTaskStatusChange,onDeleteTask}: TaskProps) {  
  
  function handleTaskStatusChange(){
    onTaskStatusChange(id)
  }
  function handleDeleteTask(){
    onDeleteTask(id)    
  }
  // rounded-full border-2 border-blue-300 w-[1.125rem] h-[1.125rem]
  return (
    <li className="flex items-start justify-between rounded bg-gray-500 mt-3 first:mt-0 p-4 gap-3">
      <div className="flex items-center justify-center gap-3">
        <div hidden={isFinished}>
          <button 
            title="Completar Tarefa"         
            onClick={handleTaskStatusChange}
            className="text-gray-100 rounded-full hover:border-blue-500 mt-[1px] h-6 w-6 flex items-center justify-center border border-blue-200">          
          </button>
        </div>
        <div hidden={!isFinished}>
          <button 
            title="Desfazer Tarefa"         
            onClick={handleTaskStatusChange}
            className="text-gray-100 rounded-full bg-purple-500 hover:bg-purple-200 p-1 mt-[1px] h-6 w-6 flex items-center justify-center">
            <Check size={12} weight="bold"/>
          </button>
        </div>      
        <span className="text-sm">
          {content}
        </span>
      </div>      
      <button 
        title="Deletar Comentário" 
        onClick={handleDeleteTask}
        className="text-gray-300 rounded hover:text-red-500 hover:bg-gray-400 p-1 max-h-6">
        <Trash />
      </button>
   </li>
  )
}
