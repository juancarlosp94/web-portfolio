import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import gitBash from "../assets/img/Git-Icon-White.svg";
import react from "../assets/img/react.svg";
import java from "../assets/img/java-4-logo-svgrepo-com.svg";
import colorSharp from "../assets/img/color-sharp.png";
import python from "../assets/img/python.svg"
import mysql from "../assets/img/mysql-logo.svg"
import aws from "../assets/img/amazon-s3.svg"


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      

      return (

        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src= {gitBash} alt='Image'/>
                                    <h5> Git Bash </h5>
                                </div>
                                <div className='item'>
                                    <img src={react} alt='Image'/>
                                    <h5> React </h5>
                                </div>
                                <div className='item'>
                                    <img src={java} alt='Image'/>
                                    <h5> Java </h5>
                                </div>
                                <div className='item'>
                                    <img src={python} alt='Image'/>
                                    <h5> Python </h5>
                                </div>
                                <div className='item'>
                                    <img src={mysql} alt='Image'/>
                                    <h5> MySQL </h5>
                                </div>
                                <div className='item'>
                                    <img src={aws} alt='Image'/>
                                    <h5> Amazon Web Services </h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp}/>
        </section>
      )
}