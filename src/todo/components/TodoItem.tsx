import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces"


interface props {
    todo: Todo,
}


export const TodoItem = ({todo}: props) => {


    const { toggleTodo } = useTodos()

    const handleClick = () => {
        toggleTodo( todo.id )
    }

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }}
        onDoubleClick={handleClick}
        >
            {todo.desc}
        </li>
    )
}
