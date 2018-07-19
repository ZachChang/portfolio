import React from 'react';
import { List } from 'semantic-ui-react'
import MvpWireframe from '../dist/images/mvp_wireframe.png';
import MvpSign from '../dist/images/mvp_signup.png';
import MvpLanding from '../dist/images/mvp_landingpage.png';
import Oz from '../dist/images/oz.png';

const YellgarMvp = props => (
  <div className="y-prcoess-frame">
    <div className="y-prcoess-title">
      <h1>02. MVP Validation</h1>
    </div>
    <div className="t-contnet">
      <h2>確認產品需求</h2>
      <h3>我們透過競爭對手分析，推測出此類型的網站目前仍有開發的價值。因此接著透過最小可行性產品，驗證此類型網站是否有足夠的顧客需求。藉此來決定，專案是否值得繼續投入。</h3>
      <h2>了解適合的價值主張、設計風格</h2>    
      <h3>我們規劃透過最小可行性產品，了解以下兩個項目：<br/>1. 找出什麼樣的介面設計風格、文字敘述能誘使目標族群註冊。 <br/>2. 透過email, 評論留言功能，初步的收集使用者回饋。</h3>
      <h2>建立一個免費註冊頁面，衡量轉換率 </h2>
      <h3>我們建立一個免費的註冊頁面，將廣告流量導至此註冊頁面，紀錄完成註冊程序的使用者人數、網站瀏覽人數與註冊人數的轉換率，評估此專案的開發價值。</h3>
    </div>
    <div className="mvp-content">
      <h2>MVP Landing Page Wireframe</h2>
      <List className="list" ordered>
        <List.Item className="list-item"><h3>在Header放置符合價值主張的 hero image 與 headline。設計明確簡單的行為觸發按鈕，讓使用者直接點擊開始註冊流程。</h3></List.Item>
        <List.Item className="list-item"><h3>透過Customer Testimonal 除了提升網站的信賴感以外，也讓使用者更清楚此網站是提供什麼服務、可以從此網站獲得什麼。</h3></List.Item>
        <List.Item className="list-item"><h3>MVP設定為免費註冊，必須明確清楚的讓使用者知道，註冊和使用本網站是完全免費的。</h3></List.Item>
        <List.Item className="list-item"><h3>將註冊至配對的過程，拆解成三個步驟，並用圖示來說明，讓使用者清楚服務內容與服務流程。</h3></List.Item>
        <List.Item className="list-item"><h3>顯示目前會員數，約會網站的最重要的內容就是會員，因此目前會員數是使用者決策是否註冊的重要因素之一。最後，再設置一個行為觸發的按鈕，讓使用者瀏覽至網頁底部後導引至註冊流程。</h3></List.Item>
      </List>
        <img className="wireframe" src={MvpWireframe} alt="mvp wireframe"/>
    </div>
    <div className="mvp-outcome">
      <div className="content-frame">
        <h2>MVP Outcome</h2>
        <h3>介面的設計上，想要呈現神祕、性感，所以使用了深紅色。版面盡量乾淨，讓使用者感到專業、可靠。</h3>
        <h3>為了簡化註冊流程，提升註冊率，我將註冊的流程分成兩個個頁面，第一頁填寫重要的資料，第二頁填寫次要的資料。</h3>
        <h3>其中Body Type欄位，為了讓此MVP的網站也有讓使用者能記憶住的特色，因此用了六個圖片給使用者點選，增加互動性。身高和年齡也採用滑動式的選擇設計，讓整個註冊流程更流程簡易。</h3>
      </div>
        <div className="outcome-img">
          <img src={MvpLanding} alt="mvp wireframe"/>
          <img className="right" src={MvpSign} alt="mvp wireframe"/>
        </div>
    </div>
    <div className="mvp-oz">
      <div className="frame">
        <h2>Wizard of Oz Prototype Matching System</h2>
        <h3>為了快速、節省成本的進行測試，在此MVP中我們並沒有建置一個真正的會員配對系統。而是透過 Wizard of Oz prototyping 的方式，從註冊頁面獲得會員的聯絡信箱後，手動的去將每一名條件相符的會員配對，配對完成後再分別寄電子郵件給配對到的兩名會員，信件內容包含配對到的會員的聯絡方式暱稱、年齡、自我介紹等基本資料，以此來低成本得模擬一個真實的約會配對系統。</h3>
        <div className="oz-img">
          <img src={Oz} alt="奧茲法步驟"/>
        </div>
        <div className="summary">
          <h2>在MVP測試的期間，我們購買廣告引導流量至註冊頁面，最終獲得600多名註冊會員，註冊轉換率約為15%。這樣的數據結果，讓我們認為這樣的產品是有價值、值得我們繼續投入開發。</h2>
        </div>
      </div>
    </div>
  </div>
);

export default YellgarMvp;