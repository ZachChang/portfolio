import React from 'react';
import Customer from '../dist/images/customer.png';
import LandingResearch from '../dist/images/landingpage_research.png';
import InfiniteScroll from '../dist/images/infinite_scroll.png';
import Pagination from '../dist/images/pagination.png';
import PaymentMethod from '../dist/images/payment_method.png';

const YellgarResearch = props => (
  <div className="y-prcoess-frame research-mobile">
    <div className="y-prcoess-title">
      <h1>3. Research</h1>
    </div>
    <div className="research-content">
      <div className="content-frame">
        <h2>Conducting Interviews</h2>
        <h3>The interviews were made mainly through face-to-face meetings, but sometimes through online chat. There were two observers roles we used:</h3>
        <h3>1. Complete Participant: <br/>We asked participants out for dinner from Yellgar or other dating websites. We went through the complete dating process without saying that observation and research was being conducted. As a complete participant of sugar dating, we can observe real interactions from online chatting to offline dating.</h3>
        <h3>2. Observer-as-Participant: <br/>We interacted with users through official accounts and emails of Yellgar, or the participants knew that we were developer of a dating platform before the face-to-face dating.</h3>
      </div>
      <div className="customer-img">
        <img src={Customer} alt="客服"/>
      </div>
    </div>
    <div className="persona-frame">
      <div className="content-frame">
        <h2>Building Personas (Sugar Daddy)</h2>
        <div className="ui stackable grid">
          <div className="eight wide column">
            <div className="frame-block">
              <h3 className="persona-title">Who are They?</h3>
              <h3>Between the age of 35 - 65. Wealthy, and willing to spend a lot of money on entertainment, tourism, and dating.</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">How Do They Find Information?</h3>
              <h3>They find information mainly from advertisements on desktop computers, laptops, and mobile devices. Some of the sugar daddies have used this kind of websites before, and they usually use google search engine.</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">What Do They Want?</h3>
              <h3>They want the feeling of being in love and the sense companionship. Most of them have a busy schedule, so they are glad to have fast and efficient dates. They do not necessarily need physical contact, but mainly need a relationship to fill their spiritual needs.</h3>
            </div>
          </div>
          <div className="eight wide column right">
            <div className="frame-block">
              <h3 className="persona-title">Pain Points</h3>
              <h3>They have small social network, and hope to expand it. They have busy schedules, so it is difficult for them to take romantic relationships slowly. Some of them stay in a city for a short time, and need a temporary companion.</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">Trigger to Use the Website</h3>
              <h3>The triggers to use a dating website are quality and quantity of the members in the site. Sugar daddies consider the quality of members, including the age, looks, job and the content of online chatting.</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="content-frame">
        <h2>Building Personas (Sugar Baby)</h2>
        <div className="ui stackable grid">
          <div className="eight wide column">
            <div className="frame-block">
              <h3 className="persona-title">Who are They?</h3>
              <h3>Between the age of 21 - 35. Most of them are students or fresh graduates.</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">How do They Find Information?</h3>
              <h3>They find information mainly from advertisements from desktop computers, laptops, and mobile devices. Some of the them receive the information from friends.</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">What do They Want?</h3>
              <h3>They need money or mentors. They feel that they are stuck in life, and want to overcome it.</h3>
            </div>
          </div>
          <div className="eight wide column">
            <div className="frame-block">
              <h3 className="persona-title">Pain Points</h3>
              <h3>They have small social network, and hope to expand it.</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">Trigger to Use the Website</h3>
              <h3>The triggers for sugar babies to use the website are the need for money. Some of them need to pay off rent, loan, and medical expenses. Some of them have big dreams, but the dreams need a lot of money to achieve.</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="landing-frame">
      <div className="content-frame">
        <h2>Landing Page Research</h2>
        <h3>There are two different target users in Yellgar: sugar daddy and sugar baby. Therefore, we designed two landing pages for each target users, and also one general landing page for both groups. We have conducted the A/B tests to understand the right value proposition and visual design style. The results of the tests showed that the landing page with sexy photos and direct titles had the highest registration conversion rate for sugar daddy; the landing page with photos of travel and luxury has the highest registration conversion rate for sugar baby, and it is suitable to design the general page with mysterious and sexy photos.</h3>
      </div>
      <div className="landing-img">
        <img src={LandingResearch} alt="landingpage-research"/>
      </div>
    </div>
    <div className="landing-frame">
      <div className="content-frame">
        <h2>Member List Page Research: Pagination vs. Infinite Scrolling</h2>
        <h3>There are two information presentation methods for member list: Pagination and Infinite Scroll. On the dating website, users often do not know what they are looking for; they are just browsing most of the time. The infinite scrolling is more suitable for exploratory searching, so it is often used in dating websites.</h3>
        <h3>However, if there is only a few members on the dating site, the infinite scrolling would expose the fatal flaw of lack of members. Users can quickly browse through more than 100 members in one minute with infinite scrolling. Therefore, Yellgar uses pagination to present the member list in the cities with less members, and uses infinite scrolling to present the member list in the cities with more members.</h3>
      </div>
      <div className="search-img">
        <img src={Pagination} alt="Pagination"/>
        <img className="right" src={InfiniteScroll} alt="InfiniteScroll"/>
      </div>
    </div>
    <div className="payment-frame">
      <div className="content-frame">
        <h2>Payment Page Research</h2>
        <h3 className="title">Subscription Revenue Model v.s Pay As You Go Model</h3>
        <h3>We found that most of the dating websites use the subscription revenue model. In the Subscription Revenue Model, a customer pays the subscription fee mainly on monthly basis to have continued access to the service. On the other hand, only a few dating websites use the Pay As You Go Model. In Pay As You Go model, users can add “credits” to their account by paying some amount of money in advanced, which is charged, based on continued consumption. Once the credits are used up, the user can no longer access the service until he/she purchase more credits.</h3>
        <h3>If a dating website have only a few members, it is hard to persuade users to subscribe, so we initially used the Pay As You Go Model. Furthermore, “credits” can be designed as rewards to encourage users to complete some actions, such as registration, uploading photos, fulfilling personal profile,  and inviting friends.</h3>
        <h3 className="title">Credit Buying Plan</h3>
        <h3>I designed the experience of buying credits based on the Anchoring Effect. There are three credit buying plan to choose, and the cost for each credit would be lower if users buy more credits.</h3>
      </div>
      <div className="payment-img">
        <img src={PaymentMethod} alt="PaymentMethod"/>
      </div>
    </div>

  </div>
);

export default YellgarResearch;