import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        user: null
    },
    reducers: {
        getUser: (state, action)=>{
            state.user = action.payload
        }
    }
})

export const { getUser } = userDataSlice.actions
export default userDataSlice.reducer