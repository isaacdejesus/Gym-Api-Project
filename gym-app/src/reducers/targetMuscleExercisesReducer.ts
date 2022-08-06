import {createSlice} from '@reduxjs/toolkit';
import {exerciseState} from '../types';
const initialState: exerciseState[]= [];
const targetExercisesSlice = createSlice({
    name: 'targetExercises',
    initialState,
    reducers: {
        setTargetExercises(state, action) {
            return action.payload;
        }
    }
})
export const { setTargetExercises } = targetExercisesSlice.actions;
export default targetExercisesSlice.reducer;
