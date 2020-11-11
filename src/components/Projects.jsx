import React, { useState, useEffect }from 'react';
import '../styles/Projects.scss';
import portfolio from '../data/portfolio';
import Card from './Card';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


function createCard (data) {
    return (
        <Card 
        key= {data.id}
        img= {data.imgURL} 
        name={data.name}
        numberOfPhotos = {data.photo}
        />
    )
}


function Projects() {
    const [filter, setFilter] = useState("Frontend");
    const [projects, setProjects] = useState([]);
  
    useEffect(() => {
      setProjects(portfolio);
    }, []);
  
    useEffect(() => {
      setProjects([]);
  
      const filtered = portfolio.map(p => ({
        ...p,
        filtered: p.category.includes(filter)
      }));
      setProjects(filtered);
    }, [filter]);

    
    return(
    <div id="projects" className="projects-container">
        <div className="projects-title">
            <Fade left>
                <h1>Projects</h1>
            </Fade>
        </div>

        <div className="portfolio">
            <Bounce top>
                <div className="projects-navbar">
                    <ul>
                        <li className={filter==="Frontend" ? 'list-navbar__active' : 'list-navbar'}>
                            <a href="javascript:void(0)" active={filter === "Frontend"} onClick={() => setFilter("Frontend")}>
                                HTML/CSS/JAVASCRIPT
                            </a>
                        </li>
                        <li className={filter==="React" ? 'list-navbar__active' : 'list-navbar'}>
                            <a href="javascript:void(0)"  active={filter === "React"} onClick={() => setFilter("React")}>
                                REACT
                            </a>
                        </li>
                        <li className={filter==="Wordpress" ? 'list-navbar__active' : 'list-navbar'}>
                            <a href="javascript:void(0)"  active={filter === "Wordpress"} onClick={() => setFilter("Wordpress")}>
                                WORDPRESS/PHP
                            </a>
                        </li>
                    </ul>
                </div>
            </Bounce>
            
            <div className="projects">
               
                {projects.map(item =>
                item.filtered=== true ? <Card key= {item.id}  img= {item.imgURL}   name={item.name}  numberOfPhotos = {item.photo} /> :null 
                )}
                
            </div>
        </div>
</div>
    )
}

export default Projects;
