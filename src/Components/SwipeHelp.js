import { Box, Typography } from '@mui/material'
import SwipeIcon from '@mui/icons-material/Swipe';
const SwipeHelp = () => {
    return (
        <Box display="flex" position="fixed" bottom="30%" zIndex="1" width="100vw" flexDirection="column" alignItems="center">
            <SwipeIcon style={{ color: 'white', fontSize: '50px', width: "100px" }} />
            <Typography variant="h5" component="h5" style={{ color: 'white' }}>Swipe Left and right to start!</Typography>
        </Box>
    )
}

export default SwipeHelp