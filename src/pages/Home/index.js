import React from 'react'
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';


const styles = makeStyles({
    title: {
        textAlign: "center",
        marginTop: "50px"
    }
})

export default function Navbar() {
    const classes = styles()
    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{duration: 2}}
        >
            <div>
                <h2 className={classes.title}>Welcome to my Portfolio!</h2>
            </div>
        </motion.div>
    )
}
