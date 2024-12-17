import { useDispatch } from 'react-redux'
import { createAnecdote, setNotification } from '../../store'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        console.log('create')
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification(`you created '${content}'`, 10))
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={create}>
                <input name='anec'/>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm