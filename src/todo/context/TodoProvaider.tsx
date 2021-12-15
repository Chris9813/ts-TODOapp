import { useReducer } from "react"
import { TodoState } from "../interfaces/interfaces"
import { TodoContext } from "./TodoContext"
import { todoReducer } from "./todoReducer"


const initStates: TodoState = {
    todoCount: 0,
    todos: [
        {
            id: '1',
            desc: 'Desarrollo de software',
            completed: false,
        },
        {
            id: '2',
            desc: 'Desarrollo Front-end',
            completed: false,
        },
    ],
    completed: 0,
    pending: 0
}


interface props {
    children: JSX.Element | JSX.Element[]
}


export const TodoProvaider = ({children}: props) => {

    const [todoState, dispatch] = useReducer(todoReducer, initStates)

    const toggleTodo = (id:string) => {
        dispatch({ type: 'toogleTodo' , payload: {id}})
    }


    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}
