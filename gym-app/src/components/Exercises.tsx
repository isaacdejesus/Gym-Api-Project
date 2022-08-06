import {useEffect} from 'react';
import {Pagination, Box, Stack, Typography} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks';
import ExerciseCard from './ExerciseCard';
import {exerciseState} from '../types';
import {setPageValue} from '../reducers/pageReducer';
import {searchByBodyPart} from '../reducers/exercisesReducer';
const Exercises = ({bodyPart} : {bodyPart: string}) => {
    const styles = {
        boxStyles: {
            mt: {lg: '110px'}
        },
        stackStyles: {
            gap:{ lg: '110px', xs: '50px'}
        },
    }
    const exercises = useAppSelector(state => state.exercises);
    const currentPage = useAppSelector(state => state.page);
    const dispatch = useAppDispatch();
    console.log(exercises);
    const exercisesPerPage = 9;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
    const paginate = (e: any, value: number) => {
        dispatch(setPageValue(value));
        window.scrollTo({top: 1800, behavior: 'smooth'})
    }
    useEffect(() => {
        dispatch(searchByBodyPart(bodyPart));
    }, [bodyPart])

    return (
        <Box 
            id="exercises"
            mt="50px" 
            p="20px"
            sx={styles.boxStyles}
        >
            <Typography variant="h3" mb="46px">
                Results
            </Typography>
            <Stack 
                direction='row' 
                flexWrap="wrap"
                justifyContent="center"
                sx={styles.stackStyles}
            >
        {currentExercises.map((exercise: exerciseState, index) => (
            <ExerciseCard key={index} exercise={exercise}/>
        ))} 
            </Stack>
            <Stack>
        {exercises.length > 9 && (
            <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}
                size="large"
            />
        )}
            </Stack>
        </Box>
    )
};
export default Exercises;
