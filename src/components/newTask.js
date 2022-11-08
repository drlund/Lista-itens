import React, { useState } from "react";

const NewTask = ({onSubmit}) => {
    const [newItem, setNewItem] = useState("");

    const setNewTask = ({target}) => {
        setNewItem(target.value);
    }

    const submit = (event) => {
        event.preventDefault();
        onSubmit(newItem);
    };

    return (
        <di>
            <form onSubmit={submit}>
                <input 
                    className="Todo-input"
                    onChange={setNewTask}
                    placeholder="nome da tarefa"
                />
                <button type="submit">Criar tarefa</button>
            </form>
        </di>
    )
};

export default NewTask;