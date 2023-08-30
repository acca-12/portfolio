import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assests/img/a0261b885cfba5a65c675c33327acf5a.png";
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["CS Student", "Teaching Assistant", "LeBron James Fan"] //words to cylce through
    const [text, setText] = useState(''); //typing out word
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; //time passing
    

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);

        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className= "banner" id = "Home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm Alfonso Acosta. I'm a `}<span className="wrap">{text}</span></h1>
                        <p>My name is Alfonso Acosta. I am a third year Compurer Science student at the University of Toronto specializing in Software Engineering. I will be a TA for MATA29 this upcoming Fall!</p>
                        <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                    </Col>

                    <Col  xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img"/>

                    </Col>
                </Row>
            </Container>


        </section>
    )


}