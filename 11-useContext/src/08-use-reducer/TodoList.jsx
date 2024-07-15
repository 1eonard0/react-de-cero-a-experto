import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem key={todo.id} id={todo.id} title={todo.description} done={todo.done} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
            ))
        }
    </ul>
  )
}
