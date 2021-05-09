import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import "./About.css";
// Change this with your DP
import myImg from "../../assets/profile-dp.jpg"
import Hi from "../../assets/Hi.gif"
import Type from "./Type";


function About() {
    return (
        <Container fluid className="about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="about-description">
                        <h1 style={{ fontSize: "2.6em" }} className="about-intro">Hi <img src={Hi} width="50px" style={{ marginBottom: "20px" }}></img>, I'm John Deo</h1>
                        <Type />
                        <p className="about-body" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        <br />
                            <br />
                        I am a
                        <i>
                                <b> Web Developer</b></i>  and <i><b>Machine Learning enthusiast.</b>
                            </i>
                            <br />
                            <br />
                            <a href="#" target="blank"><div className="btn" style={{ color: "white" }}>My Resume
                            <div className="btn2"></div>
                            </div></a>

                        </p>
                        <br />
                        <a href="#" target="blank" style={{ textDecoration: "none" }}> <img
                            src="https://img.icons8.com/bubbles/65/000000/github.png" /> </a>

                        <a href="#" target="blank" style={{ textDecoration: "none" }}
                        > <img src="https://img.icons8.com/bubbles/65/000000/linkedin.png" />
                        </a>

                        <a href="#" target="blank" style={{ textDecoration: "none" }}
                        ><img src="https://img.icons8.com/nolan/65/medium-new.png" /> </a>

                        <a href="#" target="blank" style={{ textDecoration: "none" }}> <img src="https://img.icons8.com/color/65/000000/stackoverflow.png" /> </a>

                        <a href="#" target="blank" style={{ textDecoration: "none" }}> <img
                            src="https://img.icons8.com/bubbles/65/000000/twitter.png" /> </a>

                        <a href="#" target="blank" style={{ textDecoration: "none" }}> <img
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
