import React from 'react';
import Customer from '../dist/images/customer.png';
import LandingResearch from '../dist/images/landingpage_research.png';

const YellgarResearch = props => (
  <div className="y-prcoess-frame">
    <div className="y-prcoess-title">
      <h1>03. Research</h1>
    </div>
    <div className="research-content">
      <div className="content-frame">
        <h2>進行訪談</h2>
        <h3>在完成MVP測試後，我們決定繼續投入開發。首先要做的是透過訪談，更了解使用者，我們訪談的方式有兩種：</h3>
        <h3>1. 實際訪談: <br/>我們透過Yellgar或是同類型的約會網站將使用者約出來進行訪談，有表明身份是網站開發者的訪談，也有純粹的約會，在約會過程中以聊天的方式，了解使用者們的各種想法。</h3>
        <h3>2. 線上訪談: <br/>通常收到的回饋信內容都是抱怨沒有配對成功、網頁不好用、註冊的區域沒有會員等抱怨信，透過快速、親切的處理問題，與這些會員回信、建立信賴的關係，再深入的去訪談，了解產品的各種回饋。此外，我們也創辦了客服的官方帳號，透過此帳號與各個會員溝通，持續得去了解系統出現的問題、察覺尚未被滿足的需求。</h3>
      </div>
      <img className="customer-img" src={Customer} alt="客服"/>
    </div>
    <div className="persona-frame">
      <div className="content-frame">
        <h2>Building Personas (Sugar Daddy)</h2>
        <div className="ui stackable grid">
          <div className="eight wide column">
            <div className="frame-block">
              <h3 className="persona-title">Who are they?</h3>
              <h3>年齡介於35至65歲，以男性為主，經濟能力高，願意在娛樂、生活、旅遊上有大量的開銷。</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">How do they find information?</h3>
              <h3>透過桌機、筆電、手機瀏覽網頁時看到廣告，有興趣於是點擊進入網頁。本身有在使用類似的網站，透過搜尋引擎搜尋到。</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">What do they want?</h3>
              <h3>戀愛的感覺、陪伴的感覺。由於他們多數工作繁忙，在金錢充裕但時間不足的情況下，希望能用擁有較多的東西---金錢，去開啟一場約會，不一定是需要身體上的接觸，主要是去填補心靈上的需求。</h3>
            </div>
          </div>
          <div className="eight wide column right">
            <div className="frame-block">
              <h3 className="persona-title">Pain Points</h3>
              <h3>生活圈狹小，沒有認識對象的管道。工作繁忙、生活追求效率，沒有辦法慢慢培養感情。可能是短暫的停留在某個城市，需要短暫的伴侶</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">Trigger to use the website</h3>
              <h3>讓他們註冊網站的契機主要是該會員的數量和素質，會員素質包含會員的長相、年齡、聊天時的談吐是否符合他們條件。價錢反而不是他們主要考量的事情，只要能認識到滿意的對象，即使註冊成為會員的價格高昂，他們認為也是值得的。</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="content-frame">
        <h2>Building Personas (Sugar Baby)</h2>
        <div className="ui stackable grid">
          <div className="eight wide column">
            <div className="frame-block">
              <h3 className="persona-title">Who are they?</h3>
              <h3>年齡介於35至65歲，以男性為主，經濟能力高，願意在娛樂、生活、旅遊上有大量的開銷。</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">How do they find information?</h3>
              <h3>透過桌機、筆電、手機瀏覽網頁時看到廣告，有興趣於是點擊進入網頁。本身有在使用類似的網站，透過搜尋引擎搜尋到。</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">What do they want?</h3>
              <h3>戀愛的感覺、陪伴的感覺。由於他們多數工作繁忙，在金錢充裕但時間不足的情況下，希望能用擁有較多的東西---金錢，去開啟一場約會，不一定是需要身體上的接觸，主要是去填補心靈上的需求。</h3>
            </div>
          </div>
          <div className="eight wide column">
            <div className="frame-block">
              <h3 className="persona-title">Pain Points</h3>
              <h3>生活圈狹小，沒有認識對象的管道。工作繁忙、生活追求效率，沒有辦法慢慢培養感情。可能是短暫的停留在某個城市，需要短暫的伴侶</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">Trigger to use the website</h3>
              <h3>讓他們註冊網站的契機主要是該會員的數量和素質，會員素質包含會員的長相、年齡、聊天時的談吐是否符合他們條件。價錢反而不是他們主要考量的事情，只要能認識到滿意的對象，即使註冊成為會員的價格高昂，他們認為也是值得的。</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="landing-frame">
      <div className="content-frame">
        <h2>Landing Page Research</h2>
        <h3>我們的網站有兩個不同的目標族群: Sugar Daddy 和 Sugar Baby，因此設計了針對兩個族群的登陸頁，和一個通用的頁面。我們透過 A/B test 了解怎樣的介面呈現和價值主張能夠提升註冊轉換率。測試結果發現對於 Sugar Daddy，輪播的性感的照片，搭配直接的標題，擁有最高的註冊率。對於 Sugar Baby，使用傳達享受、富足生活的照片，是成效最好的設計。而通用頁面的設計，則是採用神秘、性感的照片是最適當的。</h3>
      </div>
      <div className="landing-img">
        <img src={LandingResearch} alt="landingpage-research"/>
      </div>
    </div>
  </div>
);

export default YellgarResearch;