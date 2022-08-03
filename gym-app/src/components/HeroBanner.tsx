import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/Banner.jpg';
const HeroBanner = () => {
    const styles = {
        boxStyling: {
            mt: { lg: '212px', xs: '70px'},
            ml: { sm: '50px'}
        },
        typographyStyling: {
            fontSize: { lg: '44px', xs: '40px' }
        },
        buttonStyling: {
            backgroundColor: "#FF2625", padding: '10px'
        },
        exerciseStyling: {
            opacity: 0.1,
            display: { lg: 'block', xs: 'none'}
        }
    }
    return (
        <Box sx={styles.boxStyling} position="relative" p = "50px">
            <Typography 
                color="#FF2625"
                fontWeight="600"
                fontSize="26px"> 
                Fitness Club 
            </Typography>
            <Typography 
                fontWeight={700}
                sx={styles.typographyStyling}
                mb="23px" mt="30px"
            >
                Sweat, Smile <br />  and Repeat
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Check out the most effective exercises
            </Typography>
        <Button variant="contained" 
            color="error" 
            href="#exercises" 
            sx={styles.buttonStyling}
        >
        Explore Exercises
        </Button>
        <Typography fontWeight={600}
            color="#ff2625"
            sx={styles.exerciseStyling}
            fontSize="200px"
        >
            Exercise
        </Typography>
        <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
        </Box>
    )
};
export default HeroBanner;
