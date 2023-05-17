import { createSlice } from '@reduxjs/toolkit';

export const userDataSlice = createSlice({
    name: 'userData',
    initialState: {
        user: null
    },
    reducers: {
        getUser: (state, action)=>{
            state.user = action.payload
        },
        updateUser : (state,action)=>{
            state.user.imgUrl = action.payload.imgURL
            state.user.status = action.payload.status
        }
    }
})

export const { getUser } = userDataSlice.actions
export const {updateUser } = userDataSlice.actions
export default userDataSlice.reducer