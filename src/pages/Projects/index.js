import React from 'react'
import { motion } from 'framer-motion'
import { makeStyles } from '@mui/styles';
import Project from '../../components/project';

const styles = makeStyles({
    title: {
        textAlign: "center",
        marginTop: "50px",
        fontSize: "2em"
    },
    starProject: {
        display: "flex",
        justifyContent: "center",
    },
    projectTitle: {
        fontSize: "25px",
        textAlign: "center",
        marginBottom: "30px"
    },
    projectsContainer: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "30px",
        flexWrap: "wrap"
    }
})


export default function Projects() {
    const classes = styles()
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.5, delay: 0.8 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            <h2 className={classes.title}>Projects</h2>
            <h3 className={classes.projectTitle}>Star Project</h3>
            <div className={classes.starProject}>
                <Project first={true} title='RenDATEvous' image="rendatevous.png" description='MERN Stack with GraphQl/Apollo to find, save and rate Date ideas. Also a PWA!' githubLink='https://github.com/Blitman12/ren-date-vous' deployedLink='https://rendatevous.herokuapp.com/' />
            </div>
            <div className={classes.projectsContainer}>
                {projects.map((project, index) => {
                    const first = false
                    const { title, image, description, githubLink, deployedLink } = project
                    return <Project first={first} title={title} image={image} description={description} githubLink={githubLink} deployedLink={deployedLink} key={title} />
                })}
            </div>
        </motion.div>
    )
}



const projects = [
    {
        title: 'Baby Aid',
        image: 'baby-aid.png',
        description: 'Full Stack application using Sequelize and Node/Express. Allows parents to create a secure account and ask parent related questions and get answers',
        githubLink: 'https://github.com/Blitman12/Baby-Aid',
        deployedLink: 'https://stark-brook-30406.herokuapp.com/'
    },
    {
        title: 'Budget Tracker',
        image: 'budget-tracker.JPG',
        description: 'Converted application to a PWA with service-workers and offline functionality through IndexedDB',
        githubLink: 'https://github.com/Blitman12/budget-tracker',
        deployedLink: 'https://mighty-hollows-59425.herokuapp.com/'
    },
    {
        title: 'Citizen Master',
        image: 'citizen-master.jpeg',
        description: 'City searcher to find a plethora of city scores and nearby events. Local Storage used to save searched cities',
        githubLink: 'https://github.com/Blitman12/Citizen-Master',
        deployedLink: 'https://blitman12.github.io/Citizen-Master/'
    }
]