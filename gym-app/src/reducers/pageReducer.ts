import {createSlice} from '@reduxjs/toolkit'
const initialState = 1;
const PaginationSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPageValue(state, action) {
            const pageValue = action.payload;
            return state = pageValue;
        },
        clearPageValue(state, action){
            return state =1 ;
        }
    }
});

export const {setPageValue, clearPageValue} = PaginationSlice.actions;
export default PaginationSlice.reducer;
