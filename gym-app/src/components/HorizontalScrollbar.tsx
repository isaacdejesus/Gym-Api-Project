import { useAppSelector, useAppDispatch } from '../hooks';
import {useContext} from 'react';
import { Box, Typography} from '@mui/material';
import BodyPart from './BodyPart';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import {ExercisesWithIcons} from '../assets/exerciseIcons/ExerciseIcons';
import {BPart} from '../types';
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
  
const HorizontalScrollBar = ({bodyPart } : {bodyPart: string}) => {
const data = useAppSelector(state => state.bodyparts);
    return(
        <ScrollMenu >
        {ExercisesWithIcons.map((item: any) => (
            <Box
                itemID={item.name}
                key={item.name}
                title={item.name}
                m="0 40px"
            >
                <BodyPart item={item} bodyPart={bodyPart}/>
            </Box>
        ))}
        </ScrollMenu>
    )
}

export default HorizontalScrollBar;
