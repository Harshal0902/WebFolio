import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import "./About.scss";
import myImg from "../../assets/images/HRDP.jpg"
import Hi from "../../assets/images/Hi.gif"
import Type from "./Type";


function About() {
    return (
        <Container fluid className="about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="about-description">
                        <h1 style={{ fontSize: "2.6em" }} className="about-intro">Hi <img src={Hi} width="50px" style={{ marginBottom: "20px" }}></img>, I'm Harshal Raikwar</h1>
                        <Type />
                        <p className="about-body" >
                            Hi, my name is Harshal Raikwar. I am a 2nd Year Student at SRM-IST pursuing my Bachelor's Degree in Computer Science and Engineering. I like to code things from scratch, and enjoy bringing ideas to life in the browser.
                        <br />
                            <br />
                        I am a
                        <i>
                                <b> Web Developer</b></i>  and <i><b>Machine Learning enthusiast.</b>
                            </i>
                            <br />
                            <br />
                        I am currently a part of&nbsp;
                        <i>
                                <b>Microsoft Learn Student Ambassador
                            </b>
                            </i> community.
                        <br />
                            <br />
                        I love playing around with web design and hopefully creating something that makes people smile.
                       <br />
                            <br />
                            <a href="https://drive.google.com/file/d/1hbfP0a3aAkRu_-yx8wvm1hWzrlirocea/view?usp=sharing" target="blank"><div className="btn" style={{ color: "white" }}>My Resume
                            <div className="btn2"></div>
                            </div></a>

                        </p>
                        <br />
                        <a href="https://github.com/Harshal0902" target="blank" style={{ textDecoration: "none" }}> <img
                            src="https://img.icons8.com/bubbles/65/000000/github.png" /> </a>

                        <a href="https://www.linkedin.com/in/harshal-raikwar-43056b199/" target="blank"
                        > <img src="https://img.icons8.com/bubbles/65/000000/linkedin.png" />
                        </a>

                        <a href="https://harshalraikwar07.medium.com/" target="blank" style={{ textDecoration: "none" }}
                        ><img src="https://img.icons8.com/nolan/65/medium-new.png" /> </a>

                        <a href="https://stackoverflow.com/users/15463638/harshal0902" target="blank" style={{ textDecoration: "none" }}> <img src="https://img.icons8.com/color/65/000000/stackoverflow.png" /> </a>

                        <a href="https://twitter.com/HarshalRaikwar6" target="blank" style={{ textDecoration: "none" }}> <img
                            src="https://img.icons8.com/bubbles/65/000000/twitter.png" /> </a>

                        <a href="https://www.instagram.com/harshal_0902/" target="blank" style={{ textDecoration: "none" }}> <img
                            src="https://img.icons8.com/bubbles/65/000000/instagram-new.png" /> </a>


                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default About;
