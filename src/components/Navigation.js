import {Navbar, Container, Nav} from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assests/img/logo.svg'
import navIcon1 from '../assests/img/nav-icon1.svg'
import navIcon2 from '../assests/img/download.svg'
import navIcon3 from '../assests/img/nav-icon3.svg'

export const Navigation = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll); //fired on scroll returns what happens

        return () => window.removeEventListener("scroll", onScroll); //remove component from DOM
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
     <Container>
      <Navbar.Brand href="/" className="logo">
        <img src={logo} alt ="Logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className = "navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#Home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link> 
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> 
         
        </Nav>
        <span className="navbar-text">
            <div className = "social-icon">
                <a href="https://www.linkedin.com/in/alfonso-acosta/" target="_blank" rel="noreferrer"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/acca-12" target="_blank" rel="noreferrer"><img src={navIcon2} alt=""/></a>
                <a href="https://www.instagram.com/acca.12/" target="_blank" rel="noreferrer"><img src={navIcon3} alt=""/></a>
            </div>
            <button className = "vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
        </span>
      </Navbar.Collapse>
     </Container> 
  </Navbar>);
  //lines 30-33 just specify which is active and what happens on click (set active)
}