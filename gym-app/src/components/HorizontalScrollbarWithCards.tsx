import { useAppSelector, useAppDispatch } from '../hooks';
import {useContext} from 'react';
import { Box, Typography} from '@mui/material';
import BodyPart from './BodyPart';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import {exerciseState} from '../types';
import ExerciseCard from '../components/ExerciseCard';
const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
const HorizontalScrollBar = ({exerciseInfo } : {exerciseInfo: exerciseState[]}) => {
const data = useAppSelector(state => state.bodyparts);
    return(
        <ScrollMenu >
        {exerciseInfo.map((item: exerciseState) => (
            <Box
                itemID={item.id}
                key={item.id}
                title={item.id}
                m="0 40px"
            >
                <ExerciseCard exercise={item} />
            </Box>
        ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollBar;
