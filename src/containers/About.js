import React from 'react';
import './About.css';
import SubNavigation from '../components/SubNavigation';

const About = () => {

    return (
        <div>
            <SubNavigation />
            <div class="page-about">
                <div class="container pt-3">
                  <div class ="about-left">
                    <div class ="about-left-content">
                    <h3>Mission Statement</h3>
                    <p>Our mission at Seattle Food Bank Finder is to allow all Greater Seattle residents to easily find and donate food or their time to the several food banks in the area and thus helping feed the millions of low-income and homeless population of Seattle. </p>
                    <h6>Akshaya Venkat, Emily Nuri</h6>
                    <h6>Seattle Food Bank Finder </h6>
                    </div>
                  </div>
                  <div class ="about-right">
                    <div class ="about-right-content">
                    <h1>ABOUT US</h1>
                    <h3>Overview</h3>
                    <p>Seattle Food Bank Finder started when the founders came to the realization about how hard it was to find a suitable food bank in Seattle. There are several food banks all over Seattle, who serve different communities, take in various types of food donations, are open during different times and days of the week, but there is not one place where a resident can filter out these variables and find the best suited food bank for them. At Seattle Food Bank Finder, we want to make it easy for the Greater Seattle community to find and donate to a food bank.</p>
                    <h3>Who We Are </h3>
                    <p>The founders of Seattle Food Bank Finder are two University of Washington HCDE students who are passionate about helping the Greater Seattle community realize how much their efforts can help the low-income and homeless population in Seattle</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );

}

export default About;
