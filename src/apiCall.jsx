import { useEffect, useState } from "react";
import axios from "axios";

export default function ApiCall(props) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => setTodos(data))
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}