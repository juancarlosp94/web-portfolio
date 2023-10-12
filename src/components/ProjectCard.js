import { Col } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";

export const ProjectCard = ({title,description,imgUrl,projectLink}) => {
    return (
        <Col sm={6} md={4}>
            <a className="proj-link" href={projectLink}>
            <div className="proj-imgbx">
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div> 
            </div>
            </a>
        </Col>
    )
}