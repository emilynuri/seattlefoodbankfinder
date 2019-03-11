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
                        <label for="fname">First Name</label>
                        <label for="lname">Last Name</label>
                        <input type="text" placeholder="First Name"/>
                        <input type="text"placeholder="Last Name"/>
                        <label for="email">Email</label>
                        <label for="subject">Subject</label>
                        <input type="text" placeholder="Email"/>
                        <input type="text" placeholder="Subject"/>
                        <label for="message">Write your message below</label>
                        <textarea rows="4" placeholder="Write your message here..."/>
                          <input type="submit" value="SUBMIT" class="submit-button"/>
                        </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Contact;
