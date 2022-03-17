import React from 'react'
import { motion } from 'framer-motion'
import { makeStyles } from '@mui/styles';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import HomeIcon from '@mui/icons-material/Home';
import Map from "../../assets/map.jpeg"

const styles = makeStyles({
    title: {
        textAlign: "center",
        marginTop: "50px",
        fontSize: "2em"
    },
    map: {
        width: "30%",
    },
    contactContainer: {
        marginTop: "100px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    contactInfo: {
        display: "flex",
        alignItems: "center",
    },
    contactList: {
        listStyle: "none",
        margin: "20px"
    },
    listItem: {
        display: "flex",
        margin: "30px"
    }
})


export default function Contact() {
    const classes = styles()
    return (
        <motion.div
            initial={{ x: '-100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'tween', duration: 0.5, delay: 0.8 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
            <h2 className={classes.title}>Contact</h2>
            <div className={classes.contactContainer}>
                <div className={classes.contactInfo}>
                    <ul className={classes.contactList}>
                        <motion.li className={classes.listItem}>
                            <MailOutlineIcon /> <span style={{marginLeft: "10px"}}>bradlitman94@gmail.com</span>
                        </motion.li>
                        <motion.li className={classes.listItem}>
                            <PhoneAndroidIcon /> <span style={{marginLeft: "10px"}}>602 - 705 - 5848</span>
                        </motion.li>
                        <motion.li className={classes.listItem}>
                            <HomeIcon /> <span style={{marginLeft: "10px"}}>Phoenix, Arizona</span>
                        </motion.li>
                    </ul>
                </div>
                <motion.img alt="phoenix map" src={Map} className={classes.map} />
            </div>
            <div>

            </div>
        </motion.div>
    )
}
