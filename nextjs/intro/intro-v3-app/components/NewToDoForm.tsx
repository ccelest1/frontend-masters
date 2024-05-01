import styles from '@/app/(dashboard)/todos/styles.module.css'
import { newTodo } from '@/utils/actions'

// rec to be client side using useState, onChange
const NewToDoForm = ({ }) => {
    return (
        <div>
            <form
                action={newTodo}
            >
                <input
                    name="content"
                    className={`${styles.formbox}`}
                    type='text'
                />
                <button
                    type="submit"
                >
                    new todo
                </button>
            </form>
        </div>
    )
}

export default NewToDoForm
