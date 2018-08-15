import React from 'react';
import Competiter from '../dist/images/competiter.png';
import { List } from 'semantic-ui-react'

const YellgarDefine = props => (
  <div className="y-prcoess-frame">
    <div className="y-prcoess-title">
      <h1>1. Define & Analysis</h1>
    </div>
    <div className="t-contnet">
      <h2>What is the Goal of the Website?</h2>
      <h3>Build a dating platform that connects each user and help them to start dating. The interaction and experience of this site not only allow people to feel the sense of privacy and security, but also help them to expose themselves in the safest way. In addition, this site has to distinguish itself from the other dating sites.</h3>
      <h2>Who is the Target User of the Website?</h2>    
      <h3>Yellgar is a two-sided platform which is a major market in the United States. We help matching two kinds of target user: <br/> 1. Sugar Daddy: Wealthy, but busy. They desire to be accompanied by young and attractive people. <br/> 2. Sugar Baby:  Sociable, attractive. They need money or mentor.</h3>
      <h2>Why Sugar Dating?</h2>
      <h3>We want to build a business model which is based on the inelastic demand. The need to pursuit better material comfort and companionship would never disappear, and moreover, sugar daddies are usually rich, and willing to pay for good service. Therefore, we believe that “searching for sugar dating partners” is a highly profitable business and will stand the test of time.</h3>
    </div>
    <div className="full-width-content">
      <h2>Competitor Analysis</h2>
      <h3 className="content-frame">We had collected the top seven dating sites from the SEO ranking in  United States. Then, we conducted competitor analysis according to Jaime Levy’s Competitive Analysis Matrix. In addition to research the main functions, user interface, user experience, and charging methods, we also signed up as their members to browse and chat with real Sugar Daddies and Babies.</h3>
      <img src={Competiter} alt="競爭對手分析圖表" className="hidden-ml"/>
      <h2>Results</h2>
      <List bulleted>
          <List.Item><h3>Most of the Sugar Dating sites are charged through the membership model. One would take at least 20 dollars to become a member, and all functions are available within the member's effective period.</h3></List.Item>
          <List.Item><h3>Sugar Daddy is always charged for service, but Sugar Baby is usually free to use dating sites.</h3></List.Item>
          <List.Item><h3>The interface style of some competitors are outdated, but there is still much traffic in their websites.</h3></List.Item>
          <List.Item><h3>Most websites have bad registration experience because the process is long and complex.</h3></List.Item>
          <List.Item><h3>We found that many members will sign up as members at least in three different dating platforms, probably because they want to expose themselves more and to increase the chances of a successful matching</h3></List.Item>
          <List.Item><h3>After the dating match succeeds, users would like to exchange other contact information, such as phone number, and email.</h3></List.Item>
      </List>
      <div className="summary">
        <h2>We believe that there is still a lot of space for improvement and development for the user experience and business model in the current dating website market.<br/><br/>A user will sign up in at least on three different dating platforms, so there is no monopoly platform yet.</h2>
      </div>
    </div>
  </div>
);

export default YellgarDefine;