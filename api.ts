import { ITask } from "./Types/tasks";

const baseUrl = 'http://localhost:3001/task';

export const getAllTodos = async (): Promise<ITask[]> => {
    const res = await fetch(`${baseUrl}`, {cache:'no-store'});
    console.log(`response:`, res);
    const todos = await res.json();
    console.log(todos);
    return todos;
};

export const addTodo = async (todo:ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            todo,
        )
} );
const newTodo = await res.json();
return newTodo;
};

export const editTodo = async (todo:ITask): Promise<ITask> => {
    const res = await fetch(`${baseUrl}/${todo.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            todo,
        )
} );
const updateTodo = await res.json();
return updateTodo;
};


export const deleteTodo = async (id:string): Promise<void> => {
    await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
} );
};