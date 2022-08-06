import {createSlice} from '@reduxjs/toolkit';
import {exerciseState} from '../types';
const initialState: exerciseState[] = [];
const equipmentExercisesSlice = createSlice({
    name: 'equiptmentExercises',
    initialState,
    reducers: {
        setEquipmentExercises(state, action) {
            return action.payload;
        }
    }
})
export const { setEquipmentExercises } = equipmentExercisesSlice.actions;
export default equipmentExercisesSlice.reducer;
