import React from 'react';
import './SubNavigation.css';

class SubNavigation extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-4" id="subNav">
                <div class="container">
                    <div class="nav-buttons">
                        <ul class="navbar-nav ml-auto my-2 my-lg-0">
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="services">Find a food bank</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="community">Community</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="social-buttons collapse navbar-collapse">
                        <ul class="navbar-nav ml-auto my-2 my-lg-0">
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="https://www.facebook.com/">
                                    <img src="icons/facebook.svg" />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="https://www.twitter.com/">
                                    <img src="icons/twitter.svg" />
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="https://www.dribble.com/">
                                    <img src="icons/dribble.svg" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


export default SubNavigation;