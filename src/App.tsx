import { Header } from "./components/Header";
import { Task } from "./components/Task";

export function App() {  
  return (
    <>
      <Header/>
      <div>
        <input type="text" placeholder="Adicionar"/>
        <button type="submit">Criar</button>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <strong>
            Tarefas Criadas
          </strong>
          <span>
            10
          </span>
        </div>        
        <div>
          <strong>
            Concluídas
          </strong>
          <span>
            5 de 10
          </span>
        </div>        
      </div>
      <ul>
        <Task/>
        <Task/>
        <Task/>
        <Task/>
      </ul>
    </>
  )
}
