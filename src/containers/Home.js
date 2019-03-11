import React from 'react';
import './Home.css';
import Navigation from '../components/Navigation';

const Home = () => {

    return (
        <div>
            <Navigation />
            <div class="page-home">
                <div class="container h-100">
                    <div class="row h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-10 align-self-end">
                            <h1 class="text-uppercase text-white font-weight-bold">
                                SEATTLE FOOD BANK FINDER</h1>
                        </div>
                        <div class="col-lg-8 align-self-baseline">
                            <h4 class="text-white-75 font-weight-light py-5 text-white">
                                Aiming to tackle Seattle's ever-increasing homelessness crisis by easing the process of finding a suitable food bank for Greater Seattle Residents
                        </h4>
                        </div>
                    </div>

                </div>
            </div>


            <div class="container mt-5">

                <div class="row">
                    <div class="col-md-6">
                        <h2 class="mb-4">
                            What We Offer
                        </h2>
                        <p>
                            We allow the residents of the Greater Seattle area to find food banks best suited for what they are trying to accomplish from a donation standpoint. We aim take away the hassle of finding, contacting and coordinating the logistics of donating food to a food bank.
                        </p>
                    </div>
                    <div class="col-md-6">
                        <img class="w-75" src="imgs/bg-foodbank.jpg" alt="two people working at a food bank"/>
                    </div>
                </div>

                <hr class="mt-5"/>

            </div>

            <div class="container">

                <div class="row mt-5 mb-5">

                    <div class="col-md-4">
                        <h4 class="mb-4">
                            FIND A FOOD BANK
    </h4>
                        <p>
                            We want users to see all avaliable food banks and have the ability to filter based on some of the key factors that people rely on prior to picking a food bank.
    </p>
                    </div>

                    <div class="col-md-4">
                        <h4 class="mb-4">
                            COMMUNITY
    </h4>
                        <p>
                            We want to build a sense of community and allow our users to share and upload their own pictures to see how their donations help the homeless in the Seattle area.
    </p>
                    </div>

                    <div class="col-md-4">
                        <h4 class="mb-4">
                            CONTACT
    </h4>
                        <p>
                            Help us spread the word and follow us on Facebook, Twitter, and Instagram
    </p>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default Home;
