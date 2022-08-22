import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import {useAppDispatch} from '../hooks';
import {setBodyPartValue} from '../reducers/bodyPartReducer';
import {BPart} from '../types';
import someIcon from '../assets/exerciseIcons/cardio.png';
const BodyPart = ({item, bodyPart}: {item: BPart, bodyPart: string}) => {
    const styles = {
        borderStyle: {
            borderTop: bodyPart === item.name ? '4px solid #42a5f5' : '',
            backgroundColor: '#e3f2fd',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
        }
    }
    const dispatch = useAppDispatch();
    return (
        <Stack
            sx={styles.borderStyle}
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
        onClick={() => {
           dispatch(setBodyPartValue(item.name));
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
        >
        <img src={item.icon} alt="dumbbell" style={{width: '40px', height: '40px'}} />
        <Typography fontSize="24px" 
            fontWeight="bold"
            color="#3A1212"
            textTransform="capitalize"
        >
            {item.name}
        </Typography>
        </Stack>
    )
}
export default BodyPart;
