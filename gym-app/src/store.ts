import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './reducers/searchReducer';
import exercisesReducer from './reducers/exercisesReducer'
import bodyPartsReducer from './reducers/bodyPartsReducer';
import bodyPartReducer from './reducers/bodyPartReducer';
import pageReducer from './reducers/pageReducer';
import exerciseDetailsReducer from './reducers/exerciseDetailsReducer';
import youtubeReducer from './reducers/youtubeReducer';
import targetMuscleExercisesReducer from './reducers/targetMuscleExercisesReducer';
import equipmentExercisesReducer from './reducers/equipmentExercisesReducer';
const store = configureStore({
    reducer: {
        search: searchReducer,
        exercises: exercisesReducer,
        bodyparts: bodyPartsReducer,
        bodypart: bodyPartReducer,
        page: pageReducer,
        exerciseDetails: exerciseDetailsReducer,
        youtube: youtubeReducer,
        target: targetMuscleExercisesReducer,
        equipment: equipmentExercisesReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
