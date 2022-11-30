import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

const AboutModal = (props) => {
    return (
        <Modal
            open={props.showAbout}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            onClose={() => props.setShowAbout(false)}
        >
            <Box >
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>)
}

export default AboutModal

