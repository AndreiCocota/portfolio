import React, { Component } from 'react'
import '../styles/Skills.scss';
import skills from '../data/skills';
import Bar from './Bar';    
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

export class Skills extends Component {
    render() {
        return (
            <div id="skills" className="skills-container">
                    <div className="skills-title">
                        <Fade right>
                            <h1>My Skills</h1>
                        </Fade>
                    </div>

                    <div className="skills-table">
                        <Slide left>
                            <div className="skills-description">
                                <p> I have started leaning Web Development for 1+ years . After graduating the Complete
                                    2020 Web Development Bootcamp, I gained skills like HTML, CSS, JavaScript,
                                    Bootstrap, NodeJS, ReactJS and MondoDB. Giving that I managed to work on multiple
                                    personal projects which I have published on GitHub. I am a fast self learner, so I have
                                    learned on my way PHP and MySQL . After that, at my job, I've also learned to work with
                                    WordPress and how to make an ecommerce website for online shopping. And now, I
                                    can say that I have a wealth of knowledge.
                                </p>
                            </div>
                        </Slide>


                        <Slide right>
                            <div className="skills-bar">
                                {skills.map(item => 
                                    
                                        <Bar 
                                        key={item.id}
                                        name={item.name}
                                        level={item.level}
                                        />
                                    
                                    
                                )}
                            </div>
                        </Slide>
                    </div>
            </div>
        )
    }
}

export default Skills
