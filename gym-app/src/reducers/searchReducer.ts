import {createSlice} from '@reduxjs/toolkit'
const initialState = ""
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchValue(state, action) {
            const valueToSearch = action.payload;
            return state = valueToSearch;
        },
        clearSearchValue(state, action){
            return state = "";
        }
    }
});

export const {setSearchValue, clearSearchValue} = searchSlice.actions;
export default searchSlice.reducer;
