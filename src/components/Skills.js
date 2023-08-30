import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assests/img/meter1.svg";
import meter2 from "../assests/img/meter2.svg";
import meter3 from "../assests/img/meter3.svg";
import arrow1 from "../assests/img/arrow1.svg";
import arrow2 from "../assests/img/arrow2.svg";
import colorSharp from "../assests/img/color-sharp.png"
export const Skills = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 2000, min: 1024 },
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

    return(
        <section className = "skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>My skills in Software Development.</p>
                            <Carousel responsive={responsive} infnite={true} className="owl-carousel owl-theme skill-slider">
                                <div className ="item">
                                    <img src={meter1} alt = "Image"/>
                                    <h5>C</h5>
                                </div>
                                <div className ="item">
                                    <img src={meter1} alt = "Image"/>
                                    <h5>Linux</h5>
                                </div>
                                <div className ="item">
                                    <img src={meter3} alt = "Image"/>
                                    <h5>Python</h5>
                                </div>
                                <div className ="item">
                                    <img src={meter3} alt = "Image"/>
                                    <h5>Java</h5>
                                </div>
                                <div className ="item">
                                    <img src={meter2} alt = "Image"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className ="item">
                                    <img src={meter2} alt = "Image"/>
                                    <h5>HTML/CSS</h5>
                                </div>
                                <div className ="item">
                                    <img src={meter2} alt = "Image"/>
                                    <h5>React</h5>
                                </div>
                                <div className ="item">
                                    <img src={meter2} alt = "Image"/>
                                    <h5>Data Structures</h5>
                                </div>
                                <div className ="item">
                                    <img src={meter2} alt = "Image"/>
                                    <h5>Machine Learning</h5>
                                </div>
                                
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>);
}
