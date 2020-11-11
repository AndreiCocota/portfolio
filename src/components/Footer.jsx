import React, { Component } from 'react';
import '../styles/Footer.scss';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Slide from 'react-reveal/Slide';


export class Footer extends Component {
    render() {
        return (
            <div className="footer-container">
                <Fade bottom>
                    <div className="arrow-button">
                        <button className="arrowlogo" onClick={()=> document.getElementById('home').scrollIntoView()}>
                            <span><i className="fa fa-angle-double-up"></i></span>
                        </button>
                    </div>
                </Fade>

                <div className="social-items">
                     <Rotate>
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/andrei-cocota-576846197/">
                                <span><i className="fa fa-linkedin"></i></span>
                            </a>
                        </div>
                     </Rotate>   
                     <Rotate>
                        <div className="social-icon">
                            <a href="https://github.com/AndreiCocota">
                                <span><i className="fa fa-github"></i></span>
                            </a>
                        </div>
                     </Rotate>   
                     <Rotate>
                        <div className="social-icon">
                            <a href="https://www.facebook.com/andrei.cocota/">
                                <span><i className="fa fa-facebook-f"></i></span>
                            </a>
                        </div>
                     </Rotate>   
                </div>

                <Slide bottom>
                    <div className="contact-items">
                        <p>Phone: +40727457195</p>
                        <p>Mail: andrei_real2000@yahoo.com</p>
                    </div>
                </Slide>

                <Slide bottom>
                    <div className="powered-by">
                        <p>Powered by Andrei Cocota <span className="red-span">2020</span></p>
                    </div>
                </Slide>
            </div>
        )
    }
}

export default Footer
