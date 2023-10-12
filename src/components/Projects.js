import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import swipe from "../assets/img/Swipe.png";
import projimg2 from "../assets/img/project-img3.png";
import bookit from "../assets/img/BookIt.png";
import projnext from "../assets/img/project-bookit2-next.png"
import 'animate.css'
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "Book It",
            description: "Project made with Next.js using MUI as UI library",
            imgUrl: projnext,
            projectLink: "https://feature-deploy--gilded-brigadeiros-bcfdd4.netlify.app/",
        },
        {
            title: "Swipe",
            description: "Static Web App. JavaScript, CSS, HTML",
            imgUrl: swipe,
            projectLink: "https://juanp-seccion-4--chimerical-narwhal-477d93.netlify.app/",
        },
        {
            title: "BookIt",
            description: "Static Web App to be then migrated to React",
            imgUrl: bookit,
            projectLink: "https://hotels-filter-bookit--profound-crostata-a86336.netlify.app/",
        },
        {
            title: "Bussiness startup",
            description: "Design & Development",
            imgUrl: swipe,
            projectLink: "",
        },
        {
            title: "Bussiness startup",
            description: "Design & Development",
            imgUrl: projimg2,
            projectLink: "",
        },
        {
            title: "Bussiness startup",
            description: "Design & Development",
            imgUrl: bookit,
            projectLink: "",
        },
      
       
    ];

    return(
        <section className="project" id="projects">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                    {({ isVisible }) => 
                    <div className={isVisible ? "animated__animated animate__slideUp" : ""}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, temporibus modi. Non recusandae pariatur eaque blanditiis.</p>
                    </div>
                    }
                </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard key={index} 
                                                {...project}/>                                             
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Lorem ipsum</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="second-faded-background"/>
        </section>
    )
}

