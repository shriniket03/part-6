import { useContext } from 'react'
import CounterContext from './Context'

const Notification = () => {
  const [counter, dispatch] = useContext(CounterContext)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  
  if (counter) {
    return (
      <div style={style}>
        {counter}
      </div>
    )
  }
  else {
    return null
  }
}

export default Notification
