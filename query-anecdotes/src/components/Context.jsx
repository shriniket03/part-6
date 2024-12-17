import { createContext, useReducer } from 'react'

const reducer = (state,action) => {
  switch (action.type) {
    case 'show': 
      return action.payload
    default:
      return null
  }
}

const CounterContext = createContext()

export const CounterContextProvider = (props) => {
    const [msg, msgDispatch] = useReducer(reducer, null)
  
    return (
      <CounterContext.Provider value={[msg, msgDispatch] }>
        {props.children}
      </CounterContext.Provider>
    )
  }

export default CounterContext
