import React, { Component } from 'react'
import "./VolExp.scss";
import Crosswoc from "../../assets/images/experience-page/crosswoc.png";
import MLSA from "../../assets/images/experience-page/MLSA.jpg";
import Aaruush from "../../assets/images/experience-page/aaruush.jpg";

export class VolExp extends Component {
    render() {
        return (
            <div>
                <div className="exp-Bg">Volunteer Experience</div>
                <h2 className="exp-Fr">Volunteer Experience</h2>
                <div className="cards-list">

                    <div className="card">
                        <div className="card-image">
                            <img src={Crosswoc} rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>Mentor</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={MLSA} rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>Beta MLSA</p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={Aaruush} rel="" />
                        </div>
                        <div className="card-title title-black">
                            <p>Event Coordinator</p>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default VolExp
