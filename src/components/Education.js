import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CTD from "../assets/img/CTD.jpg";
import simplilearn from "../assets/img/download.png";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Education = () => {

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
        <section className="education">
            <Container>
                <Row>
                    <Col>
                        <div className='education-bx'>
                            <h2>
                                Education
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className='education-slider'>
                                <div className='item'>
                                    <img src= {CTD} alt='Image'/>
                                    <h5> Full Stack Developer </h5>
                                </div>
                                <div className='item'>
                                    <img src={simplilearn} alt='Image'/>
                                    <h5> Data Science </h5>
                                </div>
                                <div className='item'>
                                    <h2>DevTools</h2>
                                    <h5> Web developer in process </h5>
                                </div>
                                <div className='item'>
                                    <img src={CTD} alt='Image'/>
                                    <h5> Full Stack Developer </h5>
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

