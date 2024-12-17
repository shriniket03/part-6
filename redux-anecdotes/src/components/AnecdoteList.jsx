import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdote, setNotification } from '../../store'

const AnecdoteList = () => {
    const anecdoter = useSelector(state => {
        console.log(state)
        return state.anecdotes.filter(anecdote=>anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
    })

    const dispatch = useDispatch()
  
    const vote = (id) => {
      console.log('vote', id)
      const anecdote = anecdotes.find(anecdote=>anecdote.id===id)
      dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
      dispatch(updateAnecdote(anecdotes.find(anecdote=>anecdote.id===id)))
    }

    const anecdotes = [...anecdoter].sort((a,b)=>b.votes-a.votes)

    return (
        <div>
            {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
                   <div>
                    {anecdote.content}
                </div>
                <div>
                    has {anecdote.votes}
                    <button onClick={() => vote(anecdote.id)}>vote</button>
                </div>
            </div>
            )}
        </div>
    )
}

export default AnecdoteList