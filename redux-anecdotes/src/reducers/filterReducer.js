import { createSlice } from '@reduxjs/toolkit'

// const filterReducer = (state = '', action) => {
//   console.log('state now: ', state)
//   console.log('action', action)
//   switch (action.type) {
//     case 'SET_FILTER' : {
//       return action.payload
//     }
//     default : {
//       return state
//     }
//   }
// }

const filterReducer = createSlice({
  name: 'filters', 
  initialState:'', 
  reducers: {
    filterer (state,action) {
      return action.payload
    },
  }
})

// export const filterInput = (filter) => {
//     return {
//         type: 'SET_FILTER',
//         payload: filter
//     }
// }

export const {filter} = filterReducer.actions
export default filterReducer.reducer