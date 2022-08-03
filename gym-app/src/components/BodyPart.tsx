import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';
import {useAppDispatch} from '../hooks';
import {setBodyPartValue} from '../reducers/bodyPartReducer';
const BodyPart = ({item, bodyPart}: {item: string, bodyPart: string}) => {
    const styles = {
        borderStyle: {
            borderTop: bodyPart === item ? '4px solid #ff2625' : '',
            backgroundColor: '#fff',
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
           dispatch(setBodyPartValue(item));
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
        >
        <img src={Icon} alt="dumbbell" style={{width: '40px', height: '40px'}} />
        <Typography fontSize="24px" 
            fontWeight="bold"
            color="#3A1212"
            textTransform="capitalize"
        >
            {item}
        </Typography>
        </Stack>
    )
}
export default BodyPart;
