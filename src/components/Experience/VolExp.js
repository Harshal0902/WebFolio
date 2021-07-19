import React, { Component } from 'react'
import "./VolExp.css";
import Fade from 'react-reveal/Fade';
import MLSA from "../../assets/images/experience-page/MLSA.jpg";

export class VolExp extends Component {
    render() {
        return (
            <div>
                <Fade left>
                    <div>
                        <div className="vol_exp-Bg">Volunteer Experience</div>
                        <h2 className="vol_exp-Fr">Volunteer Experience</h2>
                    </div>
                </Fade>

                <Fade bottom cascade>
                    <div className="cards-list">

                        <div className="card">
                            <div className="card-image">
                                <img alt="MLSA" src={MLSA} rel="" />
                            </div>
                            <div className="card-title title-black">
                                <p>Beta MLSA</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-image">
                                <img alt="MLSA" src={MLSA} rel="" />
                            </div>
                            <div className="card-title title-black">
                                <p>Beta MLSA</p>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-image">
                                <img alt="MLSA" src={MLSA} rel="" />
                            </div>
                            <div className="card-title title-black">
                                <p>Beta MLSA</p>
                            </div>
                        </div>

                    </div>
                </Fade>
            </div>
        )
    }
}

export default VolExp
