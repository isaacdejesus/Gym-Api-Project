import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import {fetchAndSetExerciseDetails} from '../reducers/exerciseDetailsReducer';
import {useAppDispatch, useAppSelector} from '../hooks';
import {setYoutubeData} from '../reducers/youtubeReducer';
import exerciseService from '../services/exerciseService';
import {setExerciseDetails} from '../reducers/exerciseDetailsReducer';
import {setYTData} from '../reducers/youtubeReducer';
import {setEquipmentExercises} from '../reducers/equipmentExercisesReducer';
import {setTargetExercises} from '../reducers/targetMuscleExercisesReducer';
const ExerciseDetail = () => {
    const { id } = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(id){
            const fetchExerciseData = async () => {
                const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
                const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
               
                const exerciseDetailData = await exerciseService.fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseService.exerciseOptions);
                dispatch(setExerciseDetails(exerciseDetailData));
               
                const exerciseVideosData = await exerciseService.fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, exerciseService.youtubeOptions);
                dispatch(setYTData(exerciseVideosData.contents));

                const targetMucleExercisesData = await exerciseService.fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseService.exerciseOptions);
                dispatch(setTargetExercises(targetMucleExercisesData));

                const equipmentExercisesData = await exerciseService.fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseService.exerciseOptions);
                dispatch(setEquipmentExercises(equipmentExercisesData));
            }

       fetchExerciseData();
        }
        //dispatch(fetchAndSetExerciseDetails(id));
        //dispatch(setYoutubeData(exerciseDetail.name));

    }, [id])
    const exerciseDetail = useAppSelector(state => state.exerciseDetails);
    const exerciseVideos = useAppSelector(state => state.youtube);
    const targetMuscleExercises = useAppSelector(state => state.target);
    const equipmentExercises = useAppSelector(state => state.equipment);
    return (
        <Box>
            <Detail exerciseDetail={exerciseDetail}/>
            <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
        </Box>
    )
}

export default ExerciseDetail;
