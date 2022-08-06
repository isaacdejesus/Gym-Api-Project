import{exerciseState} from '../types';
import {Box, Stack, Typography} from '@mui/material';
import HorizontalScrollbarWithCards from './HorizontalScrollbarWithCards';
import Loader from './Loader';
const SimilarExercises = ({targetMuscleExercises, equipmentExercises}: {targetMuscleExercises: exerciseState[] , equipmentExercises: exerciseState[]}) => {
    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant="h3" mb={3} mt= {5}> Exercises that target the same muscle group</Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
                {targetMuscleExercises.length ? 
                    <HorizontalScrollbarWithCards exerciseInfo={targetMuscleExercises} />
                    : <Loader />
                }
            </Stack>
            <Typography variant="h3" mb={3} mt={5}> Exercises that used the same equipment</Typography>
            <Stack direction='row' sx={{ p: '2', position: 'relative' }}>
                {equipmentExercises.length ? 
                    <HorizontalScrollbarWithCards exerciseInfo={equipmentExercises} />
                    : <Loader />
                }
            </Stack>
        </Box>
    )
}

export default SimilarExercises;
