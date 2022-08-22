import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import {BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
const Footer = () => {
    return (
        <Box mt="80px" bgcolor="#FFF5FD" borderRadius="5%"> 
            <Stack gap="40px" alignItems="center" px="40px" pt="24px">
                <img src={Logo} alt="logo" width="100px" height="80px"/>
                <Typography variant="h5" pb="5px" mt="5px">
                    Real Results Gym
                </Typography>
                <Stack direction="row" spacing={3} pb="30px">
                    <BsTwitter size={30}/>
                    <BsInstagram size={30}/>
                    <FaFacebookF size={30}/>
                </Stack>
            </Stack>
        </Box>
    )
};

export default Footer;
