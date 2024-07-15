export const TodoItem = ({id, title, done, onDeleteTodo, onToggleTodo}) => {
  return (
    <li key={id} className="list-group-item  d-flex justify-content-between">
        <span className={`align-self-center ${(done) ? 'text-decoration-line-through' : ''}`} onClick={() => onToggleTodo(id) }>{ title }</span>
        <button onClick={() => onDeleteTodo(id) } className="btn btn-danger">Borrar</button>
    </li>
  )
}
