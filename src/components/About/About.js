import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from 'react-reveal/Fade';
import Tilt from "react-parallax-tilt";
import "./About.css";
import myImg from "../../assets/DP.png"
import Hi from "../../assets/Hi.gif"
import GitHubImg from "../../assets/images/socials/github.png"
import LinkedinImg from "../../assets/images/socials/linkedin.png"
import MediumImg from "../../assets/images/socials/medium.png"
import StackOverImg from "../../assets/images/socials/stackoverflow.png"
import TwitterImg from "../../assets/images/socials/twitter.png"
import InstaImg from "../../assets/images/socials/instagram.png"
import Type from "./Type";

function About() {
    return (
        <Fade bottom duration="2000">
            <Container fluid className="about__section" id="about">
                <Container>
                    <Row>
                        <Col md={8} className="about__description">

                            <div className="text__center">
                                <h1 className="about__intro">Hi <img alt='Hii' src={Hi} width="50px" ></img>, I'm John Doe</h1>
                                <Type />
                            </div>

                            <p className="about__body" >

                                <main id="container">
                                    <div id="terminal">

                                        <section id="terminal__bar">
                                            <div id="bar__buttons">
                                                <button className="bar__button" id="bar__button--exit">&#10005;</button>
                                                <button className="bar__button">&#9472;</button>
                                                <button className="bar__button">&#9723;</button>
                                            </div>
                                            <p id="bar__user">johndoe@ubuntu: ~</p>
                                        </section>

                                        <section id="terminal__body">
                                            <div id="terminal__prompt">
                                                <span id="terminal__prompt--user">johndoe@ubuntu:</span>
                                                <span id="terminal__prompt--location">~</span>
                                                <span id="terminal__prompt--bling">$ cat about.txt</span>
                                            </div>
                                            <div id="terminal__bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br />
                                                <br />
                                                I am a <i>
                                                    <b> Web Developer</b></i> and <i><b>Machine Learning enthusiast.</b>
                                                </i>
                                            </div>
                                            <div id="terminal__prompt" >
                                                <span id="terminal__prompt--user">johndoe@ubuntu:</span>
                                                <span id="terminal__prompt--location">~</span>
                                                <span id="terminal__prompt--bling">$</span>
                                                <span id="terminal__prompt--cursor"></span>
                                            </div>
                                        </section>

                                    </div>
                                </main>

                                <a rel="My Resume" href="/#" target="blank"><div className="btn" style={{ color: "white", marginTop: "1.5rem" }}>My Resume
                                </div></a>

                            </p>
                            <br />

                            <div className="text_center_link">

                                <a rel="Github" href="/#" target="blank">
                                    <img src={GitHubImg} alt="Github" />
                                </a>

                                <a rel="Linkedin" href="/#" target="blank">
                                    <img src={LinkedinImg} alt="Linkedin" />
                                </a>

                                <a rel="Medium" href="/#" target="blank"> <img src={MediumImg} alt="Medium" />
                                </a>

                                <a rel="Stackoverflow" href="/#" target="blank"> <img src={StackOverImg} alt="Stackoverflow" />
                                </a>

                                <a rel="Twitter" href="/#" target="blank"> <img src={TwitterImg} alt="Twitter" />
                                </a>

                                <a rel="Instagram" href="/#" alt="Harshal_0902" target="blank"> <img src={InstaImg} alt="Instagram" />
                                </a>

                            </div>

                        </Col>
                        <Col md={4} className="myAvtar">
                            <Tilt>
                                <img src={myImg} className="profile_image" alt="Me" />
                            </Tilt>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Fade>
    );
}
export default About;
