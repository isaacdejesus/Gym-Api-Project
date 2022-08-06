import {createSlice} from '@reduxjs/toolkit';
import exerciseService from '../services/exerciseService';
import {clearSearchValue} from './searchReducer';
import {useDispatch} from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import {RootState} from '../store';
import {exerciseState} from '../types';
const initialState: exerciseState = {
    bodyPart: "",
    equipment: "",
    gifUrl: "",
    id: "",
    name: "",
    target: ""
};
const exerciseSlice = createSlice({
    name: 'exerciseDetails',
    initialState,
    reducers: {
        setExerciseDetails(state, action) {
            return action.payload;
        }
    }
})
export const { setExerciseDetails } = exerciseSlice.actions;
export const fetchAndSetExerciseDetails = (value : string): ThunkAction< void, RootState, unknown, AnyAction> => {
    return async dispatch=> {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
            const exerciseDetailData = await exerciseService.fetchData(`${exerciseDbUrl}/exercises/exercise/${value}`, exerciseService.exerciseOptions)
            dispatch(setExerciseDetails(exerciseDetailData));
        } 
    }


export default exerciseSlice.reducer;
