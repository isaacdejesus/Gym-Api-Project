import {useEffect, useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useAppSelector, useAppDispatch } from '../hooks';
import {setSearchValue, clearSearchValue} from '../reducers/searchReducer';
import {searchExercises} from '../reducers/exercisesReducer';
import {initializeBodyParts} from '../reducers/bodyPartsReducer';
import HorizontalScrollbar from './HorizontalScrollbar'
const SearchExercises = ({bodyPart} : {bodyPart: string}) => {
    const styles = {
        topTypographyStyle: {
        fontSize: { lg: '44px', xs: '30px'}
        },
        searchTextfieldStyle: {
            input: {
                fontWeight: '700',
                border: 'none', 
                borderRadius: '4px'
            },
             width: { 
                 lg: '800px', 
                 xs: '350px' },
            backgroundColor: "#fff",
            borderRadius: '40px'
        },
        buttonStyling: {
            bgcolor: '#FF2625',
            color: "#fff",
            textTransform: 'none',
            width: { lg: "175px", xs: '80px' },
            fontSize: { lg: '20px', xs: '14px'},
            height: '56px',
            position: "absolute",
            right: '0'
        },

    }
    const searchValue = useAppSelector(state => state.search);
    const dispatch = useAppDispatch();
    const handleSearch = async () => {
        if(searchValue.length !== 0)
           dispatch(searchExercises(searchValue));
    }
    useEffect(() => {
        dispatch(initializeBodyParts())
    }, [])
    return (
        <Stack alignItems="center" mt="37px" 
        justifyContent="center" p="20px">
        <Typography 
            fontWeight={700} sx= {styles.topTypographyStyle}
            mb="50px" textAlign="center">
            Exercises you <br />
            should know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField 
                sx={styles.searchTextfieldStyle}
                value={searchValue}
                onChange={(e) => dispatch(setSearchValue(e.target.value.toLowerCase()))}
                placeholder="Search Exercises"
                type="text"
            />
            <Button className='search-btn'
                sx={styles.buttonStyling}
                onClick={handleSearch}
            >
                Search
            </Button>
        </Box>
        <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
           <HorizontalScrollbar bodyPart={bodyPart} /> 
        </Box>
        </Stack>
    )
};
export default SearchExercises;
