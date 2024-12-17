import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer, {setAnecdote, append, voter} from './src/reducers/anecdoteReducer'
import filterReducer from './src/reducers/filterReducer'
import notifReducer, {setMessage, removeMessage} from './src/reducers/notifReducer'
import services from './src/services/anecdote'

const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        filter: filterReducer,
        notification: notifReducer
    }
})

export const initialiseNotes = () => {
    return async dispatch => {
        const res = await services.getAll()
        dispatch(setAnecdote(res))
    }
}

export const createAnecdote = anecdote => {
    return async dispatch => {
        const res = await services.create(anecdote)
        dispatch(append(res))
    }
}

export const updateAnecdote = anecdote => {
    return async dispatch => {
        console.log(anecdote)
        const res = await services.update(anecdote.id, {content:anecdote.content, votes:anecdote.votes+1})
        dispatch(voter(res.id))
    }
}

export const setNotification = (msg, time) => {
    return async dispatch => {
        dispatch(setMessage(msg))
        setTimeout(()=>dispatch(removeMessage(null)),time*1000)
    }
}

export default store