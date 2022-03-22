import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const styles = makeStyles({
    projectImage: {
        width: "400px",
        maxWidth: "100%"
    },
    projectImageStar: {
        width: "800px",
        maxWidth: "100%",
        marginLeft: "3.5%"
    },
    link: {
        textDecoration: "none",
        color: "blue"
    },
    linkContainer: {
        display: "flex",
        justifyContent: "space-between"
    }
})

const style = {
    position: 'absolute',
    color: "black",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Project(props) {
    const { title, image, description, githubLink, deployedLink, first } = props
    const classes = styles()

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <div >
                {first ? "" :  <h2 style={{textAlign: "center"}}>{title}</h2>}
                <motion.img onClick={handleOpen} whileHover={{ scale: 1.2 }} src={require(`../assets/projects/${image}`)} alt={title} className={first ? classes.projectImageStar : classes.projectImage} />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign: "center"}}>
                            {title}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {description}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <div className={classes.linkContainer}>
                                <a href={githubLink} target="_blank" rel="noreferrer" className={classes.link}>GitHub Link</a>
                                <a href={deployedLink} target="_blank" rel="noreferrer" className={classes.link}>Deployed Link</a>
                            </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    )
}
