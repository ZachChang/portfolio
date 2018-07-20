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
			<h3>根據MVP測試研究的結果，開始進行網站整體規劃和各個頁面的細部設計，不過一個約會網站並不是在網站架設好之後就完成，最重要的”內容”是會員，必須等到註冊會員達到一定的數量，才能呈現最好的服務跟體驗，因此在初步的設計階段最主要的考量是 : “如何在會員數非常少的成長期，仍然能給使用者良好的體驗，讓網站會員數穩定成長"。</h3>
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
	    	<h2>Yellgar currently has:<br/>- Over 3,000 early adaptor users with a return rate of 	41.2% (USA)<br/>- 2% paying customers since the first paid package launched (USA)</h2>
	    	<h2>約會網站最重要的內容是會員本身，身為網站開發者的目標是把網站體驗設計好，並依不同的開發階段、擁有的會員數制定出合宜的策略，持續的優化網頁內容，提升轉換率與留存率。</h2>
	    	<h2>開發此類型的約會網站無可避免的會遇到很多道德的問題跟挑戰，但開發的過程能夠了解人們真實的慾望和感受，對於一名開發者而言是非常珍貴的經驗。若想了解更多設計細節，歡迎透過email與我聯絡。</h2>
	    </div>
    </div>
  </div>
);

export default YellgarDesign;