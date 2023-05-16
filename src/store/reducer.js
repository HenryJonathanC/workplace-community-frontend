import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null
    },
    reducers: {
        getEmail: (state, action)=>{
            state.email = action.payload
        }
    }
})

export const { getEmail } = userSlice.actions
export default userSlice.reducer