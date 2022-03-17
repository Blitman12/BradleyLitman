import React from 'react'
import { makeStyles } from '@mui/styles'


const styles = makeStyles({
    projectImage: {
        width: "500px"
    }
})

export default function Project(props) {
    const { title, image, description, githubLink, deployedLink } = props
    const classes = styles()
    return (
        <div>
            <div>
                <h2>{title}</h2>
                <img src={require(`../assets/projects/${image}`)} alt={title} className={classes.projectImage} />
                <p>{description}</p>
                <a href={githubLink} targe="_blank">GitHub Link</a>
                <a href={deployedLink} targe="_blank">Deployed Link</a>
            </div>
        </div>
    )
}
