import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";

export const TodoApp = () => {

    const { todos, todosCount, pendingTodos, handlerAddTodoItem, handlerDeleteTodoItem, handlerToggleTodoItem } = useTodo();

  return (
    <>

        <h1>TodoApp: { todosCount }, <small>pendientes: { pendingTodos }</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList  todos={todos} onDeleteTodo={ handlerDeleteTodoItem } onToggleTodo={ handlerToggleTodoItem } />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={handlerAddTodoItem}/>
            </div>
        </div>


    </>
  )
}
