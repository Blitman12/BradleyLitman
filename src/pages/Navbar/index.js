import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';

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
    },
    hamburger: {
        "&&": {
            backgroundColor: "black"
        }
    }
})


export default function Home() {
    const classes = styles()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [showDesktop, setShowDesktop] = useState(true);
    const size = useWindowSize()

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
            width: undefined,
            height: undefined,
        });
        useEffect(() => {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            // Add event listener
            window.addEventListener("resize", handleResize);
            // Call handler right away so state gets updated with initial window size
            handleResize();
            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize);
        }, []); // Empty array ensures that effect is only run on mount
        return windowSize;
    }
    

    useEffect(() => {
        if (size.width > 717) {
            setShowDesktop(true)
        } else {
            setShowDesktop(false)
        }
    }, [size.width])

    

    return (
        <motion.div
            className={classes.container}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className={classes.linkHeader}>Brad Litman</h1>
            <div className={classes.linkContainer}>
                {showDesktop
                    ?
                    <>
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
                    </>
                    :
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setIsDrawerOpen(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} classes={{ paper: classes.hamburger }}>
                            <List className={classes.drawer}>
                                <ListItem button>
                                    <Link to="/" className={classes.links}>
                                        <motion.button
                                            className={classes.buttons}
                                            onClick={() => setIsDrawerOpen(false)}
                                            whileHover={{
                                                scale: 1.1,
                                                textShadow: "0px 0px 8px rgb(248,24,148)"
                                            }}
                                        >
                                            Home
                                        </motion.button>
                                    </Link>
                                </ListItem>
                                <ListItem button>
                                    <Link to="/about" className={classes.links}>
                                        <motion.button
                                            className={classes.buttons}
                                            onClick={() => setIsDrawerOpen(false)}
                                            whileHover={{
                                                scale: 1.1,
                                                textShadow: "0px 0px 8px rgb(248,24,148)"
                                            }}
                                        >
                                            About
                                        </motion.button>
                                    </Link>
                                </ListItem>
                                <ListItem button>
                                    <Link to="/projects" className={classes.links}>
                                        <motion.button
                                            className={classes.buttons}
                                            onClick={() => setIsDrawerOpen(false)}
                                            whileHover={{
                                                scale: 1.1,
                                                textShadow: "0px 0px 8px rgb(248,24,148)"
                                            }}
                                        >
                                            Projects
                                        </motion.button>
                                    </Link>
                                </ListItem>
                                <ListItem button>
                                    <Link to="/contact" className={classes.links}>
                                        <motion.button
                                            className={classes.buttons}
                                            onClick={() => setIsDrawerOpen(false)}
                                            whileHover={{
                                                scale: 1.1,
                                                textShadow: "0px 0px 8px rgb(248,24,148)"
                                            }}
                                        >
                                            Contact
                                        </motion.button>
                                    </Link>
                                </ListItem>
                            </List>
                        </Drawer>
                    </Toolbar>
                }
            </div>
        </motion.div>
    )
}
