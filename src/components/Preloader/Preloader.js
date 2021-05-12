import React, { Component } from 'react'
import "./Preloader.scss"

export class Preloader extends Component {
    render() {
        return (
            <div>
                <div className='loader_body'>
                    <div className="loader">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>  <span></span>
                </div>
            </div>

        )
    }
}

export default Preloader
