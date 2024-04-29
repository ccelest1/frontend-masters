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

    return (
        <span>
            {todos.map(todo => (
                <div className='ml-2' key={todo.id}>
                    <header className='mt-5'> TASK </header>
                    <ul>
                    </ul>
                    {todo.content ? (
                        <li>
                            {todo.content}
                        </li>
                    ) : (
                        <li>
                            {'no content'}
                        </li>
                    )}
                    <li>
                        {todo.createdAt.toString()}
                    </li>

                    {todo.completed ? (
                        <li>
                            {todo.completed}
                        </li>
                    ) : (
                        <li>
                            {'no completion record'}
                        </li>
                    )}
                </div>
            ))}
        </span>
    )
}

export default ToDosPage;
