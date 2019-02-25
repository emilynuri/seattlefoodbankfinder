import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div class="footer-main bg-dark py-5 small">
                    <div class="container">
                        <div class="row">
                            <div class="footer-list col-md-8">
                                <ul class="ml-auto my-2 my-lg-0 row">
                                    <li class="footer-item">
                                        <a class="footer-link" href="about">About</a>
                                    </li>
                                    <li class="footer-item">
                                        <a class="footer-link" href="services">Find a food bank</a>
                                    </li>
                                    <li class="footer-item">
                                        <a class="footer-link" href="community">Community</a>
                                    </li>
                                    <li class="footer-item">
                                        <a class="footer-link" href="contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer-list col-md-4">
                                <ul class="ml-auto my-2 my-lg-0 row pull-right">
                                    <li class="footer-item">
                                        <a class="footer-link" href="https://www.facebook.com/">
                                            <img src="icons/facebook.svg" />
                                        </a>
                                    </li>
                                    <li class="footer-item">
                                        <a class="footer-link" href="https://www.twitter.com/">
                                            <img src="icons/twitter.svg" />
                                        </a>
                                    </li>
                                    <li class="footer-item">
                                        <a class="footer-link" href="https://www.dribble.com/">
                                            <img src="icons/dribble.svg" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}


export default Footer;