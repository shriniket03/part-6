import { createSlice } from '@reduxjs/toolkit'

const notifReducer = createSlice({
    name: 'notification', 
    initialState: null, 
    reducers: {
        setMessage (state, action) {
            return action.payload
        }, 
        removeMessage(state, action) {
            return null
        },
    }

})

export const {setMessage, removeMessage} = notifReducer.actions
export default notifReducer.reducer