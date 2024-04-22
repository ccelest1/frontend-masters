'use client'

import { useState } from 'react'

// client component
const NewToDoForm = () => {
    const [state, updateState] = useState('')

    return (
        <div>
            <form>
                <input
                    type='text'
                />
            </form>
        </div>
    )
}

export default NewToDoForm
