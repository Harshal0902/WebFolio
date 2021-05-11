import React, { Component } from 'react'
import WoekExp from "./WorkExperience"
import VolExp from "./VolExp"
export class Experience extends Component {
    render() {
        return (
            <div id="experiences">
                <WoekExp />
                <VolExp />
            </div>
        )
    }
}

export default Experience
