import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fade from 'react-reveal/Fade';
import Rocket from "../../assets/images/Rocket.png"

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        position: 'fixed',
        bottom: '7vh',
        [theme.breakpoints.down('sm')]: {
            bottom: '14vh',
        },
        [theme.breakpoints.up('xs')]: {
            right: '3%',
        },
        [theme.breakpoints.up('lg')]: {
            right: '3%',
        },
    }
})
)

const ScrollTop = ({
    showBelow,
}) => {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`scroll`, handleScroll)
            return () => window.removeEventListener(`scroll`, handleScroll)
        }
    })

    return (
        <div>
            <Fade>
                {show &&
                    <img onClick={handleClick} width="55px" height="55px" style={{ cursor: "pointer", backgroundColor: "white", borderRadius: "50%" }} className={classes.toTop} aria-label="to top" component="span" src={Rocket} />
                }
            </Fade>
        </div>
    )
}
export default ScrollTop