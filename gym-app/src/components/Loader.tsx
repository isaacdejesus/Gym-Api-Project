import {Stack} from '@mui/material';
import {ThreeDots} from  'react-loader-spinner';
const Loader = () =>
{
    return(
        <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
            <ThreeDots color="gray"/>
        </Stack>
    )
}

export default Loader;
