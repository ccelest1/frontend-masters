'use client'
import { useTransition, useState } from "react"
//hook - give it a function to deprioritize in relation to other tasks to be performed, other ui to be rendered
import { completeToDo, clearComplete } from "@/utils/actions"

// onClick takes callback that invokes startTransition that takes a callback to complete a todo per a given id
const Todo = ({ todo }) => {
    const [isPending, startTransition] = useTransition()
    let counter = 0
    return (
        <div
            className={`px-8 py-2 border border-black/25 cursor-pointer ${todo.completed ? 'line-through text-black/30' : ''
                }`}
            onClick={() => startTransition(() => completeToDo(todo.id))}
            key={todo.id}
        >
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
            <li>
                {`it is ${todo.completed} that this task has been completed`}
            </li>
        </div>
    )
}

export default Todo
