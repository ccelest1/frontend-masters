'use client'

import { useState } from 'react'

// client component
const NewToDoForm = ({ onChange }) => {
    console.log(window.localStorage)
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
