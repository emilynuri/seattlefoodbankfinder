import React from 'react';
import './Navigation.css';
import {Link} from 'react-router';

class Navigation extends React.Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light fixed-top py-4" id="mainNav">
                <div class="container">
                    <div class="nav-buttons">
                        <ul class="navbar-nav ml-auto my-2 my-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link js-scroll-trigger" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link js-scroll-trigger" to="/find">Find a food bank</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link js-scroll-trigger" to="/community">Community</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link js-scroll-trigger" to="/contact">Contact</Link>
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


export default Navigation;
