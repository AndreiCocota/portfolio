import React, { Component } from 'react'
import profileImage from '../images/profile-image.jpg';
import '../styles/About.scss';
import cv from '../files/AndreiCocotaCV.pdf';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';



export class About extends Component {
    render() {
        return (
            <div id="about" className="about-container">
                <div className="about-title">
                   <Fade left> 
                        <h1>About Me</h1> 
                   </Fade>
                </div>

                <div className="about-details">
                    <Slide left>
                        <img className="profile-image" src={profileImage} alt="profile-image"/>
                    </Slide>
                    <Slide right>
                        <div className="profile-text">
                            <p>I'm a Junior Web Developer from Bucharest, Romania. I am passionate about programming, especially web development 
                            and I want to become a successfully Full Stack Web Developer. <span><a role="button" onClick={() => document.getElementById('projects').scrollIntoView()}>Check my projects!</a></span>
                            </p>
                            <a className="button-red" href={cv} download>GET MY CV</a>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default About
