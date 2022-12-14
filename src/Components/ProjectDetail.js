import React, { useEffect, useState } from "react";
import projectsData from "../projectsData.json";
import { useParams, Link } from "react-router-dom";
import { StyledProjectDetail } from "./Styles/ProjectDetail.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faEye,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Tag from "./Tag";
import { Fade } from "react-awesome-reveal";
import SecondaryButton from "./SecondaryButton";

const ProjectDetail = () => {
  const [projects, setProjects] = useState([]);
  let { name } = useParams();

  useEffect(() => {
    setProjects(projectsData.filter((project) => project.slug === name));
  }, [name]);

  return (
    <>
      {projects.map((project, index) => (
        <StyledProjectDetail key={index}>
          <div className="content">
            <Fade>
              <Link to="/" className="previous-button">
                <FontAwesomeIcon icon={faArrowLeft} />
                BACK
              </Link>
            </Fade>
            <header>
              <Fade>
                <h3>{project.projectName}</h3>
                <div className="buttons">
                  <SecondaryButton
                    text="Preview website"
                    icon={faEye}
                    path={project.webLink}
                  />
                  <SecondaryButton
                    text="Github code"
                    icon={faGithub}
                    path={project.githubLink}
                  />
                </div>
              </Fade>
            </header>

            <div
              className="img-content"
              style={{
                backgroundPosition: "top",
                backgroundSize: "cover",
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))," +
                  `url(${project.mainImage})`,
              }}
            ></div>
            <Fade>
              <p className="project-description">{project.longDescription}</p>
            </Fade>
            <Fade>
              <div className="tags">
                {project.labels.map((label, index) => (
                  <Tag
                    key={index}
                    tagName={label.text}
                    tagColor={label.color}
                  />
                ))}
              </div>
            </Fade>
            <div className="contact">
              <Fade>
                <h3>Let's talk</h3>
                <a
                  href="mailto: mzunax@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  mzunax@gmail.com
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </a>
              </Fade>
            </div>
          </div>
        </StyledProjectDetail>
      ))}
    </>
  );
};

export default ProjectDetail;
