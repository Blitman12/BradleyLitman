import React from 'react'
import { makeStyles } from '@mui/styles';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Avatar from '../../assets/home.jpg'
import Resume from '../../assets/BradLitman-Resume.docx'


const styles = makeStyles({
    title: {
        textAlign: "center",
        marginTop: "50px",
        fontSize: "3em"
    },
    avatar: {
        height: "40vh",
        marginBottom: "50px",
    },
    homeContainer: {
        display: "flex",
        flexWrap: "wrap-reverse",
        justifyContent: "space-evenly",
        marginTop: "100px"
    },
    bioContainer: {
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        marginBottom: "100px"
    },
    bioText: {
        width: "75%"
    },
    icons: {
        padding: 0,
        border: "none",
        background: "none",
        color: "white",
        margin: "5px",
        marginTop: "20px"
    },
    cv: {
        border: "none",
        background: "none",
        color: "white",
        marginLeft: "35%"
    }
})

export default function Navbar() {
    const classes = styles()
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
        >
            <div>
                <h2 className={classes.title}>Welcome to my Portfolio!</h2>
                <div className={classes.homeContainer}>
                    <motion.img
                        alt="Wife and I"
                        src={Avatar}
                        className={classes.avatar}
                        animate={{
                            borderRadius: ["49% 51% 80% 20% / 30% 30% 70% 70%", "65% 35% 59% 41% / 30% 30% 70% 70%", "48% 86% 60% 80% / 30% 30% 70% 70%", "49% 51% 80% 20% / 30% 30% 70% 70%"]
                        }}
                        transition={{ repeat: Infinity, duration: 5 }}
                    />
                    <div className={classes.bioContainer}>
                        <h3 style={{ fontSize: "35px" }}>Bradley Litman</h3>
                        <div>
                            <p className={classes.bioText}><i>Full Stack Web Developer in the Phoenix Area that loves to learn, exercise, play games and read</i></p>
                            <motion.button className={classes.icons} whileHover={{
                                scale: 1.5
                            }}>
                                <a href="https://www.facebook.com/brad.litman" target="_blank" rel="noreferrer" className={classes.icons}>
                                    <FacebookIcon />
                                </a>
                            </motion.button>

                            <motion.button className={classes.icons} whileHover={{
                                scale: 1.5
                            }}>
                                <a href="https://twitter.com/LitmanBrad" target="_blank" rel="noreferrer" className={classes.icons}>
                                    <TwitterIcon />
                                </a>
                            </motion.button>

                            <motion.button className={classes.icons} whileHover={{
                                scale: 1.5
                            }}>
                                <a href="https://github.com/Blitman12" target="_blank" rel="noreferrer" className={classes.icons}>
                                    <GitHubIcon />
                                </a>
                            </motion.button>

                            <a href={Resume} download >
                                <motion.button className={classes.cv} whileHover={{
                                    scale: 1.2,
                                    textShadow: "0px 0px 8px rgb(248,24,148)"
                                }}>
                                    Download CV
                                </motion.button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
