import { useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const SimpleForm = () => {

    const { formState, onChangeForm, onResetForm, username, email } = useForm({
        username : '',
        email : ''
    });

    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onChangeForm}/>
            <input type="text" className="form-control mt-2" placeholder="email@email.com" name="email" value={email} onChange={onChangeForm}/>
            { 
                (email === 'email2@mail.com') && <Message />
            }

            <button onClick={onResetForm} className="btn btn-primary mt-2">Reset</button>
        </>
    )
}
