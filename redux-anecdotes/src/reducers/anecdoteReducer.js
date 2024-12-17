import { createSlice } from '@reduxjs/toolkit'

// const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

const initialState = []

const anecdoteSlice = createSlice({
  name:'anecdotes', 
  initialState, 
  reducers: {
    voter(state,action) {
      const id = action.payload
      const elem = state.find(n=>n.id===id)
      const changed = {...elem, votes:elem.votes+1}
      return state.map(e=>e.id===id ? changed : e)
    }, 
    creater(state,action) {
      const content = action.payload
      return state.concat(content)
    },
    append(state,action) {
      state.push(action.payload)
    },
    setAnecdote(state,action) {
      console.log(action)
      return action.payload
    }
  }
})

// const voteReducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch (action.type){
//     case 'vote' : {
//       const id = action.payload.id
//       const elem = state.find(a=>a.id===id)
//       const changed = {...elem, votes:elem.votes+1}
//       return state.map(ele=>ele.id===id ? changed : ele).sort((a,b)=>b.votes-a.votes)
//     }

//     case 'create' : {
//       return state.concat(action.payload).sort((a,b)=>b.votes-a.votes)
//     }
//   }
//   return state
// }

// export const sendVote = (id) => {
//   return {
//     type: 'vote',
//     payload: {id: id}
//   }
// }

// export const createAnecdote = (anecdote) => {
//   return {
//     type: 'create',
//     payload: asObject(anecdote)
//   }
// }

export const { voter, creater, append, setAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer 