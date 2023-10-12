import { Col, Container, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import gitHub from '../assets/img/github-mark-white.svg'


export const Footer = () => {
    return (
        <footer className="footer">
            <Container className="footer-container">
                <Row className= "footter-container-elements">
                    {/*<MailchimpForm/>*/}
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="http://www.linkedin.com/in/juancarlosperdigon" target="_blank"><img src={navIcon1}/></a>
                            <a href="https://github.com/juancarlosp94" target="_blank"><img src={gitHub} alt=''/></a>
                            
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}