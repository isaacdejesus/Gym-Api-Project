import {createSlice} from '@reduxjs/toolkit';
import exerciseService from '../services/exerciseService';
import {clearSearchValue} from './searchReducer';
import {useDispatch} from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';
import {RootState} from '../store';
import {exerciseState, video } from '../types';
const initialState: video[] = [];
const youtubeSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {
        setYTData(state, action) {
            return action.payload;
        }
    }
})
export const { setYTData } = youtubeSlice.actions;
export const setYoutubeData = (value : string): ThunkAction< void, RootState, unknown, AnyAction> => {
    return async dispatch=> {
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
            const exerciseVideosData = await exerciseService.fetchData(`${youtubeSearchUrl}/search?query=${value}`, exerciseService.youtubeOptions)
            dispatch(setYTData(exerciseVideosData.contents));
        } 
    }


export default youtubeSlice.reducer;
