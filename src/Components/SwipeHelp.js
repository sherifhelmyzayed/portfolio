import { Box, Typography } from '@mui/material'
import {SwipeIcon} from '@mui/icons-material';

const SwipeHelp = () => {
  return (
    <Box display="flex" position="fixed" height="100vh" weight="100vw" zIndex="100">
        
        <Typography variant="h1" component="h2">helping here</Typography>
        <SwipeIcon/>
    </Box>
  )
}

export default SwipeHelp