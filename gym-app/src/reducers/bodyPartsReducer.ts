import {createSlice} from '@reduxjs/toolkit';
import exerciseService from '../services/exerciseService';
import {clearSearchValue} from './searchReducer';
import {useDispatch} from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import {RootState} from '../store';
const initialState: string[] = [];
const bodyPartsSlice= createSlice({
    name: 'bodyParts',
    initialState,
    reducers: {
        setBodyParts(state, action) {
            return action.payload;
        }
    }
})
export const { setBodyParts } = bodyPartsSlice.actions;
export const initializeBodyParts = (): ThunkAction< void, RootState, unknown, AnyAction> => {
    return async dispatch=> {
            const bodyPartsData = await exerciseService.fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseService.exerciseOptions)
            dispatch(setBodyParts(['all', ...bodyPartsData]));
    }
}

export default bodyPartsSlice.reducer;
