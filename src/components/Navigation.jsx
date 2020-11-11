import React, { Component } from 'react'
import '../styles/Navigation.scss';

const goHome = () => document.getElementById('home').scrollIntoView();
const goAbout = () => document.getElementById('about').scrollIntoView();
const goProjects = () => document.getElementById('projects').scrollIntoView();
const goContact = () => document.getElementById('contact').scrollIntoView();
const goSkills = () => document.getElementById('skills').scrollIntoView();

export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {isCollapsedMenu: false, show: true, scrollPos: 0}
        this.handleClickMenu = this.handleClickMenu.bind(this);
    }

    
    handleClickMenu () {
        this.setState({
            isCollapsedMenu: !this.state.isCollapsedMenu
        });
        
    }

    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        window.scrollTo(0,0)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);   
    }

    handleScroll = () => {
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        })
    }
    
    
    
    render() {
        return (
            <div className="navbar-container"   
            style={ this.state.show ? (window.scrollY > 100 ? {backgroundColor:"#d72323"} : null)  : {visibility:"hidden"}}
            
            >
                <div className="nav-logo">
                        <h1 onClick={goHome}><a role="button">MyPortofolio.</a></h1>
                    <span className="menu-icon" onClick={this.handleClickMenu} style={(this.state.show && window.innerWidth < 600) ? {visibility:"visible"} : {visibility:"hidden"}}>
                        <i className="fa fa-bars"></i>
                    </span>
                </div>

                <div className="navbar-items" style={this.state.isCollapsedMenu ? {display:"inline"} : null }>
                    <ul>
                        <li onClick={goHome}><a role="button">Home</a></li>
                        <li onClick={goAbout}><a role="button">About</a></li>
                        <li onClick={goSkills}><a role="button">Skills</a></li>
                        <li onClick={goProjects}><a role="button">Projects</a></li>
                        <li onClick={goContact}><a role="button">Contact</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navigation
