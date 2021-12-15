import { TodoList } from "./components/TodoList"
import { TodoTitle } from "./components/TodoTitle"
import { TodoProvaider } from "./context/TodoProvaider"


export const Todo = () => {




    return (
        <TodoProvaider>
            <TodoTitle />
            <TodoList />
        </TodoProvaider>
        
    )
}
