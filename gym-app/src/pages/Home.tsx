import {useState} from 'react';
import { Box } from '@mui/material';
import Exercises from '../components/Exercises';
import SearchExercises from '../components/SeachExercises';
import HeroBanner from '../components/HeroBanner';
import { useAppSelector, useAppDispatch } from '../hooks';
const Home = () => {
    const bodyPart = useAppSelector(state => state.bodypart);
    return (
        <Box>
            <HeroBanner />
            <SearchExercises bodyPart={bodyPart}/>
            <Exercises />
        </Box>
    )
}

export default Home;
