import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

const AboutModal = (props) => {
    return (
        <Modal
            open={props.showAbout}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={() => props.setShowAbout(false)}
            sx={{height: '100vh'}}
        >
            
            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Welcome to my virtual room
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    I understand that a porfolio is the most important tool to show you who am I, what I am capable of, and it helps you know my goals with great passion
                </Typography>
                <Typography>
                    Hence, My story in this virtual room. You are granted to go through my stuff!!
                </Typography>
                <Typography>
                    This project is developed in Reactm React-Three-fiber, Drei, MUI
                </Typography>
            </Box>
        </Modal>)
}

export default AboutModal

