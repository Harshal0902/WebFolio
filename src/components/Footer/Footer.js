import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import LoveImg from "../../assets/images/footer/love.png"
import ReactImg from "../../assets/images/footer/react.png"
import "./Footer.css"

export class Footer extends Component {
    render() {
        return (
            <Fade bottom delay="200">
                <div className="footer_text">&lt;/&gt; with <img alt="love" className="footer_icon" width="35px" height="35px" src={LoveImg} /> and &nbsp;<img alt="React Js" width="25px" height="25px" src={ReactImg} /> by John Deo</div>
            </Fade>
        )
    }
}

export default Footer
