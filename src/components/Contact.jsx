import React, { Component } from 'react';
import '../styles/Contact.scss';
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';


function sendEmail(e) {
    e.preventDefault();

      emailjs.sendForm('andreicocotamails', 'template_t6dsrhu', e.target, 'user_bRqH2DcST90d3RBgT0dA4')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }



export class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact-container">
                <div className="contact-title">
                    <Fade right>
                        <h1>Contact</h1>
                    </Fade>
                </div>

                <Bounce clear>
                <div className="form-container">
                    <p>If you want to discuss more please contact me</p>

                    <form onSubmit={sendEmail}>
                        
                    <input type="hidden" name="contact_number" />

                    <input type="text" name="from_name" placeholder="Name..." />

                    <input type="email" name="user_email" placeholder="Email..." />

                    <textarea rows="7" name="message" placeholder="Message..." />

                    <button className="submit-button" type="submit" value="Send">Submit</button> 

                    </form>
                    </div>        
                </Bounce>

            </div>
        )
    }
}

export default Contact
