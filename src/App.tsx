import { ClipboardText, PlusCircle } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

const taskDefaultList:TaskInfo[] = [
  {
    id: 'task1',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    id: 'task2',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    id: 'task3',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: true,
  },
  {
    id: 'task4',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: false,
  },
  {
    id: 'task5',
    content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isFinished: true,
  },
]
export function App() {  
  const [newTaskText, setNewTaskText] = useState('');
  const [tasksCreated, setTasksCreated] = useState(taskDefaultList)
  const tasksFinished = tasksCreated.filter(task => task.isFinished).length;
  const hasAtLeastOneTask = (tasksCreated.length>0)

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()
    
    setTasksCreated(state=>{      
      return (        
        [...state,{
          content: newTaskText,
          id: uuidv4(),
          isFinished: false
        }]
      )
    })
    setNewTaskText('')
  }
  function handleNewTaskTextChange(event: ChangeEvent<HTMLInputElement>)  {    
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }
  function handleNewTaskTextInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function changeTaskStatus(taskId: string){
    const tasksChanged = tasksCreated.map(task => 
      task.id==taskId
      ?{...task, isFinished:!task.isFinished}
      :task
    )
    setTasksCreated(tasksChanged)
  }
  function deleteTask(taskId: string){
    const taskWithoutDeletedTask = tasksCreated.filter(task => task.id !== taskId)
    setTasksCreated(taskWithoutDeletedTask)
  }  

  return (
    <>
      <Header/>
      <div className="max-w-[46rem] mt-[-1.7rem] mb-8 mx-auto gap-16 items-start px-4 md:px-0">
        <form onSubmit={handleCreateNewTask} className="flex h-14 gap-2">
          <input 
            type="text"
            placeholder="Adicione uma nova tarefa"
            className="rounded bg-gray-500 placeholder-gray-300 p-4 w-full text-gray-100 outline-none shadow-outline shadow-purple-500"
            value={newTaskText}
            onChange={handleNewTaskTextChange}
            onInvalid={handleNewTaskTextInvalid}
            required
          />
          <button 
            type="submit"            
            className="w-[5.625rem] bg-blue-500 rounded flex items-center justify-center gap-2 text-sm hover:bg-blue-300 transition-colors"
          >
            Criar
            <PlusCircle size={16}/>
          </button>
        </form>
        <div className="flex items-center justify-between mt-16">
          <div className="flex gap-2 items-center justify-center">
            <strong className="text-blue-300 font-bold text-sm">
              Tarefas Criadas
            </strong>
            <span className="rounded-full bg-gray-400 px-2 py-[0.125rem] text-xs">
              {tasksCreated.length}
            </span>
          </div>        
          <div className="flex gap-2 items-center justify-center">
            <strong className="text-purple-500 font-bold text-sm">
              Concluídas
            </strong>
            <span className="rounded-full bg-gray-400 px-2 py-[0.125rem] text-xs">
              {hasAtLeastOneTask
                ?tasksFinished + " de " + tasksCreated.length
                :0
              }
            </span>
          </div>        
        </div>
        {hasAtLeastOneTask
          ? <ul className="mt-6">
              {tasksCreated.map(task => {
                return (
                  <Task 
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    isFinished={task.isFinished}
                    onDeleteTask={deleteTask}
                    onTaskStatusChange={changeTaskStatus}
                  />
                )
              })}
            </ul>
          : <div className="flex flex-col items-center justify-center mt-6 border-t border-gray-400 rounded text-gray-300 w-full px-6 py-16">
              <ClipboardText size={56}/>
              <strong className="mt-4">
                Você ainda não tem tarefas cadastradas
              </strong>
              <span className="mt-1">
                Crie tarefas e organize seus itens a fazer
              </span>
            </div>
        }
      </div>
    </>
  )
}
