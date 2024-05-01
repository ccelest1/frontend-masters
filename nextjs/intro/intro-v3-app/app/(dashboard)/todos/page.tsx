/*
Pull in todos data and render them
Make helper function as prisma requires sdk instance
*/
import db from '@/utils/db'
import TodoList from '@/components/TodoList'
// being shown in terminal from server
const getData = async () => {
    const todos = await db.todo.findMany({})
    return todos
}

const ToDosPage = async () => {
    await new Promise((resolve) => setTimeout(() => resolve(), 200))
    const todos = await getData()

    return (
        <TodoList
            todos={todos}
        />
    )
}

export default ToDosPage;
