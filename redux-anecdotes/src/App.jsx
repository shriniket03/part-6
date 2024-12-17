import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'

import { useDispatch } from 'react-redux'
// import anecReducer, { setAnecdote } from './reducers/anecdoteReducer'
// import services from './services/anecdote'
import { useEffect } from 'react'
import { initialiseNotes } from '../store'

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>dispatch(initialiseNotes()),[])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <AnecdoteList/>
      <AnecdoteForm/>
      <Filter/>
    </div>
  )
}

export default App