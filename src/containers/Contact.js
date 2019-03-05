import React from 'react';
import './Contact.css';
import SubNavigation from '../components/SubNavigation';

const Contact = () => {

    return (
        <div>
            <SubNavigation />
            <div class="page-contact">
                <div class="container pt-3">
                    <div class ="contact-content">
                      <div class ="contact-top-content">
                        <h1>Contact Us</h1>
                        <h6>Please contact us with any questions or feedback and we will try to get back to you as soon as we can!</h6>
                      </div>
                      <div class ="contact-bottom-content">
                        <form class="contact-form">
                          <input type="text" placeholder="First Name"/>
                          <input type="text"placeholder="Last Name"/>
                          <input type="text" placeholder="Email"/>
                          <input type="text" placeholder="Subject"/>
                          <textarea rows="4" cols="50" placeholder="Write your message here..."/>
                          <div class ="submit-button">
                          <input type="submit" value="SUBMIT"/>
                          </div>
                        </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;
