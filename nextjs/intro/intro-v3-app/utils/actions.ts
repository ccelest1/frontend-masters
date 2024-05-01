'use server'

import { revalidatePath } from 'next/cache'
import db from './db'

// server mutation
export const completeToDo = async (id) => {
    await db.todo.update({
        where: { id },
        data: {
            completed: true,
        },
    })
    revalidatePath('/todos')
}

export const clearComplete = async (id) => {
    await db.todo.update({
        where: { id },
        data: {
            completed: false,
        },
    })
    revalidatePath('/todos')
}


export const newTodo = async (formData) => {
    const todo = await db.todo.create({
        data: {
            content: formData.get('content')
        }
    })
    // clear cache and reload page
    revalidatePath('/todos')
}
