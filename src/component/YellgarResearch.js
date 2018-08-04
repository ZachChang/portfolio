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
        <h2>進行訪談</h2>
        <h3>在完成MVP測試後，我們決定繼續投入開發。首先要做的是透過訪談，更了解使用者，我們訪談的方式有兩種：</h3>
        <h3>1. 實際訪談: <br/>我們透過Yellgar或是同類型的約會網站將使用者約出來進行訪談，有表明身份是網站開發者的訪談，也有純粹的約會，在約會過程中以聊天的方式，了解使用者們的各種想法。</h3>
        <h3>2. 線上訪談: <br/>通常收到的回饋信內容都是抱怨沒有配對成功、網頁不好用、註冊的區域沒有會員等抱怨信，透過快速、親切的處理問題，與這些會員回信、建立信賴的關係，再深入的去訪談，了解產品的各種回饋。此外，我們也創辦了客服的官方帳號，透過此帳號與各個會員溝通，持續得去了解系統出現的問題、察覺尚未被滿足的需求。</h3>
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
              <h3>年齡介於21至35歲，以女性為主，大部分為學生或初入職場者。</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">How do they find information?</h3>
              <h3>透過桌機、筆電、手機瀏覽網頁時看到廣告，有興趣於是點擊進入網頁。本身有在使用類似的網站，透過朋友介紹或搜尋引擎搜尋到。</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">What do they want?</h3>
              <h3>他們追求物質的享受，想要跳脫目前的生活方式，旅行、體驗更多事物。</h3>
          </div>
          <div className="eight wide column">
            <div className="frame-block">
              <h3 className="persona-title">Pain Points</h3>
              <h3>生活圈狹小，沒有拓展社交的管道。缺乏經濟來源，但礙於學生或其他原因無法長時間工作，渴望離開固有的生活圈。</h3>
            </div>
            <div className="frame-block">
              <h3 className="persona-title">Trigger to use the website</h3>
              <h3>觸發他們註冊網站的契機，可能是急迫的金錢需求(如學費、房租、醫療費用)，或有非常想達成的夢想，但意識到身處無法翻生的階級位置，因此需要透過某個管道，讓自己能快速的往上層的階級流動。網站的會員數和會員素質也是考量是否使用的重點。</h3>
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
    <div className="landing-frame">
      <div className="content-frame">
        <h2>Member List Page Research: Pagination vs. Infinite Scrolling</h2>
        <h3>會員頁的資訊呈現方式可以分為兩種：分頁式設計 (Pagination) 和瀑布流無限滾動設計 (Infinite Scroll)。約會網站使用者的搜尋互動方式應為反覆查找，在尋找的過程中也許會改變心意，是一個沒有已知項目的探索式搜尋，此外搜尋過程本身，就可以是一個極佳的體驗。Infinite Scroll 的呈現方式，更適合於約會網站上，無特定目標的探索式搜尋，此外在行動裝置上搭配滑動手勢，也能提供給使用者較好的體驗。</h3>
        <h3>然而，約會網站剛成立，會員數量過少的時候，Infinite Scroll 的設計會暴露出會員數過少的致命問題，使用者透過無限向下滑動，100名會員在一分鐘內就可以快速的瀏覽完畢。因此在註冊會員數較少的城市，我們使用分頁式設計來呈現會員，在會員數大於一定數量的城市，我們採用 Infinite Scroll 的設計。</h3>
      </div>
      <div className="search-img">
        <img src={Pagination} alt="Pagination"/>
        <img className="right" src={InfiniteScroll} alt="InfiniteScroll"/>
      </div>
    </div>
    <div className="payment-frame">
      <div className="content-frame">
        <h2>Payment Page Research</h2>
        <h3 className="title">訂閱會員制 vs. 點數制</h3>
        <h3>透過競爭對手分析，我們發現大部分的約會網站採用會員制: 付費後曾為該網站的會員，在訂閱為會員期限內可以使用所有的功能，到期後需要再次付款。少數的採用點數制：使用者可以將使用期限切分的比較短，要用多少時間就花多少錢。我們認為對於剛成立的的約會網站，由於會員數較少難以說服使用者訂閱，因此決定採取點數制的付費方式。此外，以點數制為基礎的付費方式，可以有更多的應用，例如我們在剛開啟的市場，採用免費增值的策略，使用者只要註冊便可以獲得免費的點數；點數也可以作為行動的獎勵，如會員成功上傳大頭照、完成豐富的個人介紹。</h3>
        <h3 className="title">點數購買方案</h3>
        <h3>在點數購買的體驗設計上，我們參考了錨定效應(Anchoring Effect) 呈現三個點數購買的方案，讓會員有三種不同的方案可以選擇，且一次購買越多的點數，單一點數的價格會越低。</h3>
      </div>
      <div className="payment-img">
        <img src={PaymentMethod} alt="PaymentMethod"/>
      </div>
    </div>

  </div>
);

export default YellgarResearch;