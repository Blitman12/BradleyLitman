import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';

const styles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "space-between",
    },
    linkHeader: {
        marginLeft: "25px",
        fontSize: "25px"
    },
    linkContainer: {
        display: "flex",
        marginRight: "25px",
        alignSelf: "center",
        flexWrap: "wrap"
    },
    links: {
        textDecoration: "none",
        color: "white",
        margin: "10px"
    },
    buttons: {
        padding: 0,
        border: "none",
        background: "none",
        color: "white",
        fontSize: "17px"
    }
})


export default function Home() {
    const classes = styles()
    return (
        <motion.div
            className={classes.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className={classes.linkHeader}>Brad Litman</h1>
            <div className={classes.linkContainer}>
                <Link to="/" className={classes.links}>
                    <motion.button 
                    className={classes.buttons}
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(248,24,148)"
                    }}
                    >
                        Home
                    </motion.button>
                </Link>
                <Link to="/about" className={classes.links}>
                <motion.button 
                    className={classes.buttons}
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(248,24,148)"
                    }}
                    >
                        About
                    </motion.button>
                </Link>
                <Link to="/projects" className={classes.links}>
                <motion.button 
                    className={classes.buttons}
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(248,24,148)"
                    }}
                    >
                        Projects
                    </motion.button>
                </Link>
                <Link to="/contact" className={classes.links}>
                <motion.button 
                    className={classes.buttons}
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(248,24,148)"
                    }}
                    >
                        Contact
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    )
}
