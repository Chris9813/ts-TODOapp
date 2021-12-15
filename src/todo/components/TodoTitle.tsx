import { useTodos } from '../hooks/useTodos'

export const TodoTitle = () => {

    const { pendingTodos } = useTodos();

    return (
        <div>
            <h1>Todos: {pendingTodos.length}</h1>
        </div>
    )
}
