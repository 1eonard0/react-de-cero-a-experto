
import { useForm } from "../hooks";

export const TodoAdd = ({onNewTodo}) => {
    const { description, onChangeForm, onResetForm } = useForm({ description: ''});

    const onFormSubmit = (event) => {
        event.preventDefault();

        if(description.length == 0) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false
        }

        onNewTodo(newTodo);
        onResetForm();
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="¿Que hay que hacer?" className="form-control" name="description" value={ description } onChange={onChangeForm}/>
        <button type="submit" className="btn btn-outline-primary mt-1">
            Agregar
        </button>
    </form>
  )
}
