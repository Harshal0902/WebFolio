import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css"
import Skill from "../../assets/images/Skill.png"
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Tilt from "react-parallax-tilt";

import Python from "../../assets/images/skill-section/python.png"
import Cpp from "../../assets/images/skill-section/cpp.png"
import C from "../../assets/images/skill-section/c.png"
import Js from "../../assets/images/skill-section/javaScript.png"
import ReactJs from "../../assets/images/skill-section/react.png"
import Tensorflow from "../../assets/images/skill-section/tensorflow.png"
import Cloud from "../../assets/images/skill-section/google-cloud.png"
import MongoDBImg from "../../assets/images/skill-section/mongodb.png"
import SASS from "../../assets/images/skill-section/sass.png"
import Tailwind from "../../assets/images/skill-section/tailwindcss.png"
import Bootstrap from "../../assets/images/skill-section/bootstrap.png"
import HTML from "../../assets/images/skill-section/html5.png"

export class Skills extends Component {
    render() {
        return (
            <div>

                <Fade left >
                    <div>
                        <h2 className="skillsbg">Skills</h2>
                        <div className="skillsfr">Skills</div>
                    </div>
                </Fade>

                <Container fluid className="skills_section" id="skills">
                    <Container>
                        <Row>
                            <Col md={4} className="mySkills">
                                <Fade left>
                                    <img alt="My skills" src={Skill} className="img_skill" />
                                </Fade>
                            </Col>

                            <Col md={8} className="skills_description">
                                <Fade top>
                                    <p className="skills_intro">Tech I'm familiar with..</p>
                                </Fade>

                                <div class="skill_images">

                                    <Flip left cascade>
                                        <ul>

                                            {/* Use tiltEnable={false} inside Tilt to restrict tile effect */}

                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="Python" >
                                                        <img className="My_Skill" alt="python" src={Python} /></span>
                                                </Tilt>
                                            </li>


                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="C++" >
                                                        <img className="My_Skill" alt="C++" src={Cpp} /></span>
                                                </Tilt>
                                            </li>


                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="C" >
                                                        <img className="My_Skill" alt="C" src={C} /></span>
                                                </Tilt>
                                            </li>


                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="JavaScript" >
                                                        <img className="My_Skill" alt="JavaScript" src={Js} /></span>
                                                </Tilt>
                                            </li>


                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="React Js" >
                                                        <img className="My_Skill" id="React-logo" alt="React" src={ReactJs} /></span>
                                                </Tilt>
                                            </li>

                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="Tensorflow" >
                                                        <img className="My_Skill" alt="tensorflow" src={Tensorflow} /></span>
                                                </Tilt>
                                            </li>

                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="Cloud" >
                                                        <img className="My_Skill" alt="Cloud" src={Cloud} /></span>
                                                </Tilt>
                                            </li>


                                            <li>

                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="MongoDB" >
                                                        <img className="My_Skill" alt="MongoDB" src={MongoDBImg} /></span>
                                                </Tilt>
                                            </li>

                                            <li style={{ width: "90px" }}>
                                                <Tilt scale={1.2} transitionSpeed={2500}>

                                                    <span data-tooltip="down 100" aria-label="Tailwind CSS" >
                                                        <img className="My_Skill" style={{ marginLeft: "-5px" }} alt="Tailwind CSS" src={Tailwind} /></span>
                                                </Tilt>
                                            </li>


                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>
                                                    <span data-tooltip="down 100" aria-label="SASS" >
                                                        <img className="My_Skill" alt="SASS" src={SASS} /></span>
                                                </Tilt>
                                            </li>


                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>

                                                    <span data-tooltip="down 100" aria-label="Bootstrap" >
                                                        <img className="My_Skill" alt="Bootstrap" src={Bootstrap} /></span>
                                                </Tilt>
                                            </li>


                                            <li>
                                                <Tilt scale={1.2} transitionSpeed={2500}>

                                                    <span data-tooltip="down 100" aria-label="HTML 5" >
                                                        <img className="My_Skill" alt="HTML 5" src={HTML} /></span>
                                                </Tilt>
                                            </li>

                                        </ul>
                                    </Flip>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </div>
        )
    }
}

export default Skills