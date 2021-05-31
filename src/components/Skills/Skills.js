import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.css"
import Skill from "../../assets/images/Skill.png"
import Python from "../../assets/images/skill-section/python.png"
import Cpp from "../../assets/images/skill-section/cpp.png"
import C from "../../assets/images/skill-section/c.png"
import Js from "../../assets/images/skill-section/javaScript.png"
import HTML5 from "../../assets/images/skill-section/html5.png"
import CSS3 from "../../assets/images/skill-section/css3.png"
import SASS from "../../assets/images/skill-section/sass.png"
import Wordpress from "../../assets/images/skill-section/wordpress.png"
import Bootstrap from "../../assets/images/skill-section/bootstrap.png"
import ReactJs from "../../assets/images/skill-section/react.png"
import jQuerry from "../../assets/images/skill-section/jQuery.png"
import Tensorflow from "../../assets/images/skill-section/tensorflow.png"

export class Skills extends Component {
    render() {
        return (
            <div>
                <h2 className="skillsbg">Skills</h2>
                <div className="skillsfr">Skills</div>
                <Container fluid className="skills__section" id="skills">
                    <Container>
                        <Row>
                            <Col md={4} className="mySkills">
                                <img alt="My skills" src={Skill} className="img__skill" />
                            </Col>

                            <Col md={8} className="skills__description">
                                <p className="skills__intro">Tech I'm familiar with..</p>

                                <div class="skill__images">
                                    <ul>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="Python" >
                                                <img className="My__Skill" alt="python" src={Python} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="C++" >
                                                <img className="My__Skill" alt="C++" src={Cpp} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="C" >
                                                <img className="My__Skill" alt="C" src={C} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="JavaScript" >
                                                <img className="My__Skill" alt="JavaScript" src={Js} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="HTML 5" >
                                                <img className="My__Skill" alt="HTML5" src={HTML5} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="CSS 3" >
                                                <img className="My__Skill" alt="CSS" src={CSS3} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="SASS" >
                                                <img className="My__Skill" alt="SASS" src={SASS} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="Bootstrap" >
                                                <img className="My__Skill" alt="Bootstrap" src={Bootstrap} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="React Js" >
                                                <img className="My__Skill" alt="React" src={ReactJs} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="jQuery" >
                                                <img className="My__Skill" alt="jQuery" src={jQuerry} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="Tensorflow" >
                                                <img className="My__Skill" alt="tensorflow" src={Tensorflow} /></span>
                                        </li>

                                        <li>
                                            <span data-tooltip="down 100" aria-label="Wordpress" >
                                                <img className="My__Skill" alt="Wordpress" src={Wordpress} /></span>
                                        </li>

                                    </ul>
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
