import {createSlice} from '@reduxjs/toolkit'
const initialState = "all";
const bodyPartSlice = createSlice({
    name: 'bodyPart',
    initialState,
    reducers: {
        setBodyPartValue(state, action) {
            const valueToSearch = action.payload;
            return state = valueToSearch;
        },
        clearBodyPartValue(state, action){
            return state = "";
        }
    }
});

export const {setBodyPartValue, clearBodyPartValue} = bodyPartSlice.actions;
export default bodyPartSlice.reducer;
