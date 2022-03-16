import React from 'react'
import { motion } from 'framer-motion'
import { makeStyles } from '@mui/styles';

const styles = makeStyles({
    title: {
        textAlign: "center",
        marginTop: "50px"
    }
})

export default function Projects() {
    const classes = styles()
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
        >
            <h2 className={classes.title}>Projects</h2>
        </motion.div>
    )
}
