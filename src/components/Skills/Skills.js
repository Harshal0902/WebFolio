import React, { Component } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "./Skills.scss"
import Skill from "../../assets/images/Skill.png"

export class Skills extends Component {
    render() {
        return (
            <div>
                <h2 className="skillsbg">Skills</h2>
                <div className="skillsfr">Skills</div>
                <Container fluid className="skills_section" id="skills">
                    <Container>
                        <Row>
                            <Col md={4} className="mySkills">
                                <img src={Skill} className="img_skill" />
                            </Col>

                            <Col md={8} className="skills_description">
                                <p className="skills_intro">Tech I'm familiar with..</p>

                                <div class="skill_images">
                                    <ul>

                                        <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/python.png"/></a></span>
                                            <span>Python</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/c-plus-plus-logo.png"/></a></span>
                                            <span>C++</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/c-programming.png"/></a></span>
                                            <span>C</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/html-5--v2.png"/></a></span>
                                            <span>JavaScript</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/html-5--v1.png"/></a></span>
                                            <span>HTML 5</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/css3.png"/></a></span>
                                            <span>CSS 3</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/sass.png"/></a></span>
                                            <span>SASS</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/dusk/75/000000/wordpress.png"/></a></span>
                                            <span>Wordpress</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/bootstrap.png"/></a></span>
                                            <span>Bootstrap</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/plasticine/75/000000/react.png"/></a></span>
                                            <span>React</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/ios-filled/75/0033cc/jquery.png"/></a></span>
                                            <span>jQuery</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/tensorflow.png"/></a></span>
                                            <span>Tensorflow</span>
                                        </li>

                                        {/* <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/google-cloud.png"/></a></span>
                                            <span>Cloud</span>
                                        </li>

                                        <li><span><a href="#"><img src="https://img.icons8.com/color/75/000000/docker.png"/></a></span>
                                            <span>Docker</span>
                                        </li> */}

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
