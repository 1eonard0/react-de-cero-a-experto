import { useState } from "react";

export const useForm = ( initialState = {}) => {
    const [formState, setFormState] = useState(initialState);

    const { username, email } = formState;

    const onChangeForm = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ] : value
        });
    };

    const onResetForm = () => {
        setFormState(initialState);
    };

    return {
        ...formState,
        formState,
        onChangeForm,
        onResetForm,
    }
}
