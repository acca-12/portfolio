import { Col, Row, Container, Tab, Nav } from "react-bootstrap"
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assests/img/color-sharp2.png"
import projImg1 from "../assests/img/project-img1.png";
import projImg2 from "../assests/img/project-img2.png";
import projImg3 from "../assests/img/project-img3.png";
import appImg from "../assests/img/PLM-Screenshot.png"
import miscImg from "../assests/img/afa8a530cb745908224c17ad3ef5febc.png"

export const Projects = () =>{

    const projects = [
        {
            title: "System Monitoring Tool",
            description: "This C program reports different metrics of utilization of a given system. It calculates memory usage, CPU usage, and also can also display the given users logged in. It also runs concurrent processes.",
            imgUrl: projImg1,
            gitLink: "https://github.com/acca-12/Systems_Monitoring_Tool"
        },

        {
            title: "System Wide File Descriptor Table",
            description: "C program that leverages Unix environment to show all current processes open file descriptors",
            imgUrl: projImg2,
            gitLink: "https://github.com/acca-12/descriptors"
        },

        {
            title: "Graph Algorithms - Dijkstra/Kruskal",
            description: "C program that implements Dijkstra and Kruskal algorithims with an implementation of the heap",
            imgUrl: projImg3,
            gitLink: "https://github.com/acca-12/dijkstra"
        },

    ];

    const projects_app = [
        {
            title: "ACORN Replica (Fullstack)",
            description: "Android app that mimics the course enrollment and viewing process of ACORN.",
            imgUrl: appImg,
            gitLink: "https://github.com/acca-12/B07-Project"
        },


    ];

    const projects_misc = [
        {
            title: "Assembly Game: Naruto Run",
            description: "Platform game fully coded in Assesmbly",
            imgUrl: miscImg,
            gitLink: "https://github.com/acca-12/assembly_game"
        },


    ];



    return(
        <section classNmae = "project" id = "projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>My personal and school projects!</p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">C</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Apps</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Misc</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                    key={index} //unique identifier
                                                    {...project} //all the props
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        projects_app.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                    key={index} //unique identifier
                                                    {...project} //all the props
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                    {
                                        projects_misc.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                    key={index} //unique identifier
                                                    {...project} //all the props
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>                      

        </section>

    )

}