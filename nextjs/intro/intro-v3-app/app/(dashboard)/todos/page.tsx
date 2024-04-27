/*
Pull in todos data and render them
Make helper function as prisma requires sdk instance
*/
import db from '@/utils/db'

// being shown in terminal from server
const getData = async () => {
    const todos = await db.todo.findMany({})
    return todos
}

const ToDosPage = async () => {
    const todos = await getData()
    return <div> Todos Page</div>
}

export default ToDosPage;
