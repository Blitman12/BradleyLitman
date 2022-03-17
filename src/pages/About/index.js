import React from 'react'
import { motion } from 'framer-motion';
import { makeStyles } from '@mui/styles';
import Typewriter from "typewriter-effect";
import AboutPhoto from "../../assets/about.jpg"



const styles = makeStyles({
    title: {
        textAlign: "center",
        marginTop: "50px"
    },
    container: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap"
    },
    photo: {
        borderRadius: "50%"
    },
    favoriteSkills: {
        textAlign: "center",
        margin: "20px 0"
    },
    textBio: {
        width: "500px",
        marginLeft: "15px",
        marginBottom: "50px"
    },
    list: {
        listStyle: "none",
        padding: 0,
        marginLeft: "15px"
    }
})

export default function About() {
    const classes = styles()
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.5, delay: 0.8 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            <h2 className={classes.title}>About</h2>
            <div className={classes.favoriteSkills}>
                <p>Favorite Skills are:</p>
                <Typewriter
                    className={classes.typeChange}
                    skipAddStyles="true"
                    options={{
                        strings: ["React", "JavaScript", "MongoDB/Mongoose", "GraphQl", "Apollo", "Node/Express"],
                        autoStart: true,
                        loop: true
                    }}
                />
            </div>
            <div className={classes.container}>
                <div>
                    <img src={AboutPhoto} alt="My wife and I on the beach" className={classes.photo} />
                </div>
                <div>
                    <div>
                        <div>
                            <h3>Who Am I</h3>
                            <p className={classes.textBio}>Full Stack Web Developer leveraging a Nursing background to be an adaptable team player with a skill to learn and implement new knowledge efficiently. A Full Stack Development Bootcamp from the University of Arizona has provided further knowledge built upon self-taught skills starting early 2020. Known as a hard worker and team collaborator, my aim is to always be learning, communicating, optimizing and to bring others with me. Previously worked on a team to develop a full stack MERN application with GraphQl that allows users to find and save/rate date ideas. I am eager to apply my skills and experience as a fast-paced learner and collaborative focused attitude to a new team in the development world. </p>
                        </div>
                        <h3>Skills</h3>
                        <ul className={classes.list}>
                            <motion.li whileHover={{ scale: 1.1}}>React</motion.li>
                            <motion.li whileHover={{ scale: 1.1}}>JavaScript</motion.li>
                            <motion.li whileHover={{ scale: 1.1}}>Node/Express</motion.li>
                            <motion.li whileHover={{ scale: 1.1}}>Mongoose/MongoDB</motion.li>
                            <motion.li whileHover={{ scale: 1.1}}>SQL/Sequelize</motion.li>
                            <motion.li whileHover={{ scale: 1.1}}>REST</motion.li>
                            <motion.li whileHover={{ scale: 1.1}}>GraphQl</motion.li>
                            <motion.li whileHover={{ scale: 1.1}}>HandleBars</motion.li>
                            <motion.li whileHover={{ scale: 1.1}}>Material UI/Bootstrap</motion.li>
                            <motion.li whileHover={{ scale: 1.1}}>HTML/CSS</motion.li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
