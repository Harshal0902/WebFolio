import React, { useState, useEffect } from 'react'
import "./Scroll.css"

const ScrollTop = ({
    showBelow,
}) => {

    // const classes = useStyles();

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
            {show &&
                <img onClick={handleClick} className="ScrollToTop" aria-label="to top" component="span" src="https://img.icons8.com/bubbles/60/000000/up.png" />
            }
        </div>
    )
}
export default ScrollTop