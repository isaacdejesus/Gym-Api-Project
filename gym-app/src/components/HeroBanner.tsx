import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/Banner.jpg';
const HeroBanner = () => {
    const styles = {
        boxStyling: {
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px'}
        },
        typographyStyling: {
            fontSize: { lg: '24px', xs: '20px' }
        },
        buttonStyling: {
            backgroundColor: "#0288d1", padding: '10px'
        },
        exerciseStyling: {
            opacity: 0.1,
            display: { lg: 'block', xs: 'none'}
        }
    }
    return (
        <Box sx={styles.boxStyling} position="relative" p = "50px">
            <Typography 
                color="#0288d1"
                fontWeight="700"
                fontSize="46px"> 
                Real Results Gym
            </Typography>
            <Typography 
                fontWeight={500}
                sx={styles.typographyStyling}
                mb="23px" mt="30px"
            >
                Customized Training <br /> To Fit you!
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check out popular routines
            </Typography>
        <Button variant="contained" 
            color="error" 
            href="#exercises" 
            sx={styles.buttonStyling}
        >
        Explore Exercises
        </Button>
        <Typography fontWeight={600}
            color="#ffa726"
            sx={styles.exerciseStyling}
            fontSize="200px"
        >
            Real Results 
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
        </Box>
    )
};
export default HeroBanner;
