import {Box, Stack, Typography} from '@mui/material';
import { video } from '../types';
const ExerciseVideos = ({exerciseVideos, name}: { exerciseVideos: video[], name: string }) => {
    console.log(exerciseVideos);
    const styles = {
        boxStyle: {
            marginTop: { lg: '200px', xs: '20px' }
        },
        stackStyle: {
            flexDirection: { lg: 'row' },
            gap: { lg: '110px', xs: '0' }
        }
    }
    return (
        <Box p="20px" sx={styles.boxStyle}>
            <Typography variant="h3" mb="33px">
                Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name} </span> exercise
            </Typography>
            <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={styles.stackStyle}>
        {exerciseVideos?.slice(0,3).map((item: video, index: number) => (
            <a
                key={index}
                className="exercise-video"
                href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
            >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                <Box>
                    <Typography variant="h5" color="#000">
                        {item.video.title}
                    </Typography>
                    <Typography variant="h6" color="#000">
                        {item.video.channelName}
                    </Typography>
                </Box>
            </a>
        ))}
            </Stack>
        </Box>
    )
}

export default ExerciseVideos;
