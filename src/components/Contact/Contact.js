import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.scss";
import gitImage from "../../assets/images/developer-illustration.png";

function Footer() {
    return (
        <Container fluid className="contact_section" id="contact">
            <Container>
                <Row>
                    <Col md={6} className="contact_description">
                        <h1 style={{ fontSize: "2.5em" }} className="contact_left"> &lt; Harshal Raikwar/&gt;</h1>
                        <p className="contact_body">
                            "There are three responses to a piece of design — yes, no, and WOW! Wow is that I aim for."
                        </p>
                        <br />
                        <img src={gitImage} className="img-dev" alt="avatar" />

                        

                    </Col>
                    <Col md={6}>
                        <h1 className="formLogo" style={{ fontFamily: "Lobster, cursive" }}>Reach Me Out<img
                            src="https://img.icons8.com/plasticine/50/000000/technical-support.png" /></h1>
                        <form action="https://formspree.io/f/maylzqqd" method="POST" className="contact-left">

                            <fieldset>
                                <textarea type="text" className="form_control_input" id="exampleMessage"
                                    placeholder="Your name" name="Sender's Name" />
                            </fieldset>
                            <fieldset>
                                <textarea type="email" className="form_control_input" id="exampleMessage"
                                    placeholder="Your email" name="Sender's Email" />
                            </fieldset>
                            <fieldset>
                                <textarea className="form_control_textarea" name="Message" id="exampleMessage" placeholder="Message"></textarea>
                            </fieldset>
                            <button type="submit" id="formBtn" className="btn" style={{ color: "white" }}>SEND</button>

                            <div className="hover"><span>Get in Touch</span>

                        <a href="https://github.com/Harshal0902" target="blank" style={{ textDecoration: "none" }}> <img
                            src="https://img.icons8.com/bubbles/50/000000/github.png" /> </a>

                        <a href="https://www.linkedin.com/in/harshal-raikwar-43056b199/" target="blank"
                        > <img src="https://img.icons8.com/bubbles/50/000000/linkedin.png" />
                        </a>

                        <a href="https://twitter.com/HarshalRaikwar6" target="blank" style={{ textDecoration: "none" }}> <img
                            src="https://img.icons8.com/bubbles/50/000000/twitter.png" /> </a>

                        <a href="https://www.instagram.com/harshal_0902/" target="blank" style={{ textDecoration: "none" }}> <img
                            src="https://img.icons8.com/bubbles/50/000000/instagram-new.png" /> </a>

                        </div>

                        </form>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Footer;
