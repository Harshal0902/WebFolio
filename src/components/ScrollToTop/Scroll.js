import React, { useState, useEffect } from 'react'
import "./Scroll.css"
import Rocket from "../../assets/images/Rocket.png"

const ScrollTop = ({
    showBelow,
}) => {

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
                    <img onClick={handleClick} width="55px" height="55px" style={{ cursor: "pointer", backgroundColor: "white", borderRadius: "50%" }} className="ScrollToTop" aria-label="to top" component="span" src={Rocket} />
                }
        </div>
    )
}
export default ScrollTop