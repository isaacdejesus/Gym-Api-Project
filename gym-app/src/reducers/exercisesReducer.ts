import {createSlice} from '@reduxjs/toolkit';
import exerciseService from '../services/exerciseService';
import {clearSearchValue} from './searchReducer';
import {useDispatch} from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import {RootState} from '../store';
interface exerciseState {
    bodyPart: string,
    equipment: string,
    gifUrl: string,
    id: string,
    name: string,
    target: string
}
const initialState: exerciseState[] = [];
const exerciseSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
        setExercises(state, action) {
            return action.payload;
        }
    }
})
export const { setExercises } = exerciseSlice.actions;
export const searchExercises = (value : string): ThunkAction< void, RootState, unknown, AnyAction> => {
    return async dispatch=> {
        if(value.length !== 0 ){
            const exercisesData = await exerciseService.fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseService.exerciseOptions)
            const searchedExercises = exercisesData.filter((exercise: any) => exercise.name.toLowerCase().includes(value)
            || exercise.target.toLowerCase().includes(value)
            || exercise.equipment.toLowerCase().includes(value)
            || exercise.bodyPart.toLowerCase().includes(value)
            )
            dispatch(clearSearchValue(''))
            dispatch(setExercises(searchedExercises));
        } 
    }
}

export default exerciseSlice.reducer;
