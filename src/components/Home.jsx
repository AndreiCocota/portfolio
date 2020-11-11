import React, { Component } from 'react';
import Navigation from './Navigation';
import '../styles/Home.scss';
import Fade from 'react-reveal/Fade';

export class Home extends Component {
    render() {
        return (
            <div id="home" className="home-container">            
                <Navigation />
                <Fade big >
                <h1>Hi, my name is <span className="red-span">Andrei Cocota</span></h1>
                <p>I'm a junior web developer</p>
                <a className="button-red" role="button" onClick={() => document.getElementById('projects').scrollIntoView()}>View My Projects</a>
                </Fade>
            </div>
        )
    }
}

export default Home;
