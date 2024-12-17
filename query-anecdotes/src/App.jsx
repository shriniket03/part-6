import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import CounterContext from './components/Context'
import { useContext } from 'react'

const baseUrl = 'http://localhost:3001/anecdotes'

const App = () => {
  const [counter, dispatch] = useContext(CounterContext)
  const queryClient = useQueryClient()

  const updater = async (anec) => {
    const response = await axios.put(`${baseUrl}/${anec.id}`, {votes:anec.votes+1, content:anec.content})
    dispatch({type:'show', payload:`anecdote '${anec.content}' voted`})
    setTimeout(()=>dispatch({type:'na', payload:null}),5000)
    return response.data
  }

  const mutation = useMutation({
    mutationFn: updater,
    onSuccess: () => {queryClient.invalidateQueries({queryKey:['anecdotes']})}
  })


  const handleVote = (anecdote) => {
    mutation.mutate(anecdote)
  }

  const result = useQuery({
    queryKey:['anecdotes'],
    queryFn: () =>  axios.get('http://localhost:3001/anecdotes').then(res=>res.data),
    retry: 1
  })

  console.log(JSON.parse(JSON.stringify(result)))

  if (result.isLoading || result.isError || result.isPending) {
    return <h2>anecdote service not available due to problems in server</h2>
  }

  const anecdotes = result.data

  // const anecdotes = [
  //   {
  //     "content": "If it hurts, do it more often",
  //     "id": "47145",
  //     "votes": 0
  //   },
  // ]

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
