import React from 'react';
import { List } from 'semantic-ui-react'
import MvpWireframe from '../dist/images/mvp_wireframe.png';
import MvpSign from '../dist/images/mvp_signup.png';
import MvpLanding from '../dist/images/mvp_landingpage.png';
import Oz from '../dist/images/oz.png';

const YellgarMvp = props => (
  <div className="y-prcoess-frame">
    <div className="y-prcoess-title">
      <h1>2. MVP Validation</h1>
    </div>
    <div className="t-contnet">
      <h2>Determining the Product Requirements</h2>
      <h3>We surmised that the sugar dating website is currently worth developing from the competitor analysis. Then, we built a MVP (minimum viable product) to determine whether this type of website will have sufficient customer requirements. We make the decision of  whether we should build the full, mature, stable product based on the MVP testing.</h3>
      <h2>Build a Free Sign up Page to Measure the Conversion Rate</h2>    
      <h3>We have built a free sign up page, then recorded the number of users completing registration and the conversion rate.</h3>
      <h2>Understanding the Right Value Proposition and Visual Design Style</h2>
      <h3>We not only found out what kind of value proposition and visual design style have the best sign up conversion rate, but also collected user feedbacks from emails and comments.</h3>
    </div>
    <div className="mvp-content">
      <h2>MVP Landing Page Wireframe</h2>
      <List className="list" ordered>
        <List.Item className="list-item"><h3>Place the hero image and headline which fits the value proposition in the header. Design the clear call-to-action button, allows the users to click and start the registration process directly.</h3></List.Item>
        <List.Item className="list-item"><h3>Improve trust of the website from the customer testimonial. Moreover, the customer testimonial let users know what services this site provides and what they can get from it.</h3></List.Item>
        <List.Item className="list-item"><h3>Let the users know that this MVP site is free to sign up and to be used.</h3></List.Item>
        <List.Item className="list-item"><h3>Split the signed up to matching process into three steps, and represent them with icons to allow the users to understand the service and process clearly.</h3></List.Item>
        <List.Item className="list-item"><h3>Current number of members is an important factor to affect the sign up rate, so it must be displayed. We set a call-to-action button in the bottom of site again, for the users who browse though the page.</h3></List.Item>
      </List>
        <img className="wireframe" src={MvpWireframe} alt="mvp wireframe"/>
    </div>
    <div className="mvp-outcome">
      <div className="content-frame">
        <h2>MVP Outcome</h2>
        <h3>On the interface design, I used red as the main color to create a mysterious and sexy style. Showing only the essential information to keep the interface clean for looking professional and reliable.</h3>
        <h3>I divided the registration process to 2 separate page to simplify it. The essential section is on the first page, and the secondary section is on the second page.</h3>
        <h3>This MVP is simple, but we still want some features which could make this MVP more interactive. Therefore, there are 6 images for users to select in the body type section, and sliders for selecting age and height.</h3>
      </div>
        <div className="outcome-img">
          <img src={MvpLanding} alt="mvp wireframe"/>
          <img className="right hidden-ml" src={MvpSign} alt="mvp wireframe"/>
        </div>
    </div>
    <div className="mvp-oz">
      <div className="frame">
        <h2>Wizard of Oz Prototype Matching System</h2>
        <h3>We did not build a real matching system for a quick and low-cost MVP testing. However, we used Wizard of Oz prototyping to simulate a dating matching system. We sent matching email, including companion’s age, connect, and self introduction to members who successfully matched.</h3>
        <div className="oz-img">
          <img src={Oz} alt="奧茲法步驟"/>
        </div>
        <div className="mvp-summary">
          <h2>After the MVP testing, we got more than 600 members, and the sign up conversion rate was 15%. The results of the MVP testing show that Yellgar is valuable and worthy to start building the complete version.</h2>
        </div>
      </div>
    </div>
  </div>
);

export default YellgarMvp;