import React from 'react';
import LandingOutcome from '../dist/images/landing_outcome.png';
import CreditsOutcome from '../dist/images/credits_outcome.png';
import SignupOutcome from '../dist/images/signup_outcome.png';
import TipsOutcome from '../dist/images/tips_outcome.png';

const YellgarDesign = props => (
  <div className="y-prcoess-frame">
    <div className="y-prcoess-title">
      <h1>4. Design</h1>
    </div>
    <div className="design-contnet">
    	<div className="content-frame">
			<h3>A dating website is not finished before there are enough members because the most important part for a dating website is the members. The best service and experience of a dating website are based on the number of  active users. Therefore, the initial design consideration is “ How to create great user experience and let the members grow for the early stage? ”</h3>
    	</div>
    	<div className="design-img-frame">
    		<div className="design-img">
    			<h3>Landing Page</h3>
    			<img src={LandingOutcome} alt=""/>
    		</div>
	    	<div className="design-img">
	    		<h3 className="right">Payment Page </h3>
	    		<img className="right" src={CreditsOutcome} alt=""/>
	    	</div>
    	</div>
    	<div className="design-img-frame">
    		<div className="design-img">
    			<h3>Sign Up Page </h3>
    			<img src={SignupOutcome} alt=""/>
    		</div>
	    	<div className="design-img">
	    		<h3 className="right">Tips Page</h3>
	    		<img className="right" src={TipsOutcome} alt=""/>
	    	</div>
    	</div>
	    <div className="design-summary">
	    	<h2 className="font-bold">Yellgar currently has:<br/>- Over 3,000 early adaptor users with a return rate of 	41.2% (USA)<br/>- 2% paying customers since the first paid package launched (USA)</h2>
	    	<h2>The most important part of the dating site is the members. Therefore, as a dating website developer or designer, I have to adaptively design the best experience and strategy according to different stages of the website to improve the retention rate and the conversion rate.</h2>
	    	<h2>It is inevitably to meet some moral problems and challenges while developing this type of dating site. However, the process of developing a dating site can understand people's real desires and feelings; it is also a very valuable experience for a developer. If you want to know more details of the development process, please feel free to contact me by email.</h2>
	    </div>
    </div>
  </div>
);

export default YellgarDesign;