import {createSlice} from '@reduxjs/toolkit';

export const registerSlicer = createSlice({
    name: 'registerSlice',
    initialState:{user: {name:'',email: '',password: ''}},
    reducers: {
        save: (state,action) => {
            state.user = action.payload
        },
        remove: (state) => {
            state.user = {name:'',email: '',password: ''}
        }
    }
})

export const {save, remove} = registerSlicer.actions;
export default registerSlicer.reducer;