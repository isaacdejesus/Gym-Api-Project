import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchReducer';
import exercisesReducer from './reducers/exercisesReducer'
import bodyPartsReducer from './reducers/bodyPartsReducer';
import bodyPartReducer from './reducers/bodyPartReducer';
const store = configureStore({
    reducer: {
        search: searchReducer,
        exercises: exercisesReducer,
        bodyparts: bodyPartsReducer,
        bodypart: bodyPartReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
