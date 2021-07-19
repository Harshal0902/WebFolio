import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Fade from 'react-reveal/Fade';
import "./Contact.css";
import GitHubImg from "../../assets/images/socials/github.png"
import LinkedinImg from "../../assets/images/socials/linkedin.png"
import TwitterImg from "../../assets/images/socials/twitter.png"
import InstaImg from "../../assets/images/socials/instagram.png"
import DevImage from "../../assets/images/developer-illustration.png";

function Contact() {
    return (
        <Container fluid className="contact_section" id="contact">
            <Container>
                <Row>
                    <Col md={6} className="contact_description">
                        <Fade left>
                            <h1 className="contact_left"> &lt;John Deo/&gt;</h1>
                            <p className="contact_body">
                                "There are three responses to a piece of design — yes, no, and WOW! Wow is that I aim for."
                            </p>
                            <br />
                            <img fill="dark" src={DevImage} className="img-dev" alt="avatar" />
                        </Fade>
                    </Col>

                    <Col md={6}>
                        <Fade right cascade>
                            <h1 className="formLogo" >Reach Out to Me</h1>

                            {/* Replace it with your formspre link */}
                            <form action="<YOUR-LINK>" method="POST" className="contact_right">

                                <fieldset>
                                    <textarea type="text" required className="form_control_input" id="Name"
                                        placeholder="Your name" name="Sender's Name" />
                                </fieldset>
                                <fieldset>
                                    <textarea type="email" required className="form_control_input" id="Email"
                                        placeholder="Your email" name="Sender's Email" />
                                </fieldset>
                                <fieldset>
                                    <textarea className="form_control_textarea" required name="Message" id="Message" placeholder="Message"></textarea>
                                </fieldset>

                                <button type="submit" id="formBtn" className="btn">SEND</button>

                                <div className="hover"><span>Get in Touch</span>

                                    <a rel="Github" href="/#" target="blank" style={{ textDecoration: "none" }}>
                                        <img width="46px" height="46px" src={GitHubImg} alt="Github" />
                                    </a>

                                    <a rel="Linkedin" href="/#" target="blank">
                                        <img width="46px" height="46px" src={LinkedinImg} alt="Linkedin" />
                                    </a>

                                    <a rel="Twitter" href="/#" target="blank" style={{ textDecoration: "none" }}> <img width="46px" height="46px" src={TwitterImg} alt="Twitter" />
                                    </a>

                                    <a rel="Instagram" href="/#" alt="Harshal_0902" target="blank" style={{ textDecoration: "none" }}> <img width="46px" height="46px" src={InstaImg} alt="Instagram" />
                                    </a>

                                </div>

                            </form>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Contact;
