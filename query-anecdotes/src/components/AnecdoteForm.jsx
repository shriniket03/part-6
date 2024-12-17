import {useQuery, useMutation, useQueryClient} from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import CounterContext from './Context'

const baseUrl = 'http://localhost:3001/anecdotes'

const AnecdoteForm = () => {
  const [counter, dispatch] = useContext(CounterContext)
  const queryClient =  useQueryClient() 

  const createNote = newNote => {
    axios.post(baseUrl, newNote).then(res => {
      dispatch({type:'show', payload: `anecdote '${newNote.content}' created`})
      queryClient.invalidateQueries({queryKey:['anecdotes']})
      setTimeout(()=>dispatch({type:'na', payload: null}),5000)
      return res.data
    })
    .catch(error=>{
      dispatch({type:'show', payload: 'too short anecdote, must have length 5 or more'})
      setTimeout(()=>dispatch({type:'na', payload: null}),5000)
      return error
    })
  }

  const mutation = useMutation({
    mutationFn: createNote,
    onSuccess: () => {queryClient.invalidateQueries({queryKey:['anecdotes']})}
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
    mutation.mutate({content:content, votes:0})
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
