import React from 'react';
import Competiter from '../dist/images/competiter.png';
import { List } from 'semantic-ui-react'

const YellgarDefine = props => (
  <div className="y-prcoess-frame">
    <div className="y-prcoess-title">
      <h1>1. Define & Analysis</h1>
    </div>
    <div className="t-contnet">
      <h2>此網站想達成的目標</h2>
      <h3>Yellgar的目標是在目前眾多的交友平台中尋找不一樣的市場、獲利模式。Yellgar 希望打造一個安全、保密的環境，幫助人們展開互惠互利、快速的約會，在美國這種約會模式稱作 Sugar Arrangement or Sugar Dating。</h3>
      <h2>此網站的目標使用者</h2>    
      <h3>Yellgar 是雙邊平台，設定的主要市場是美國。我們媒合以下兩種TA：<br/>1.Sugar Daddy: 經濟能力高，年齡介於35至65歲，工作較繁忙，需要商務旅行或閒暇時的伴侶。<br/> 2.Sugar Baby: 享受生活，年輕、具吸引力，社交能力強。</h3>
      <h2>為什麼選擇這個Idea</h2>
      <h3>我們希望經營的項目是建立在剛性需求上。人類尋找伴侶的需求和對金錢的追逐永遠不會消失。此外，尋求Sugar Dating的人，通常有較高的經濟能力。因此，我們認為建立在"尋找Sugar Dating伴侶"這個需求的項目，是一筆經得起時間考驗且具有資本效應的生意。</h3>
    </div>
    <div className="full-width-content">
      <h2>分析目前同類型網站的使用狀況</h2>
      <h3 className="content-frame">我們收集了目前在美國SEO排名前七名的約會網站，註冊成為他們的會員。接著，我們參考並應用Jaime Levy的 Competitive Analysis Matrix 進行競爭者分析，除了研究了各個網站的主要功能、介面設計風格、收費方式以外，我們註冊成為其他網站的會員，瀏覽它們的會員列表，以了解這類型網站的使用者樣貌。</h3>
      <img src={Competiter} alt="競爭對手分析圖表" className="hidden-ml"/>
      <h2>分析結果</h2>
      <List bulleted>
          <List.Item><h3>大部分的網站為會員制，最少需要20美金成為該網站的會員，在使用期限內可以無限次數的使用網站功能。</h3></List.Item>
          <List.Item><h3>雖然為雙邊平台，但主要收費對象皆為Sugar Daddy，Sugar Baby則為免費。</h3></List.Item>
          <List.Item><h3>許多網站介面設計風格比較舊，但每月仍然有穩定的流量和一定的會員數。</h3></List.Item>
          <List.Item><h3>大部分網站的註冊流程仍然非常繁雜，要填很多不重要的資料，使用體驗較差。</h3></List.Item>
          <List.Item><h3>我們發現許多會員至少會在三個不同的約會平台註冊成為會員，原因可能為希望大量曝光自己，增加媒合成功的機會。</h3></List.Item>
          <List.Item><h3>約會網站的使用者聯繫上後，希望能快速的交換其他較方便的聯絡方式，如電話、email等。</h3></List.Item>
      </List>
      <div className="summary">
        <h2>我們認為目前市場上的服務在使用體驗、商業模式上，仍有很大的改良和發展空間。<br/><br/>一名使用者至少會在三個不同的平台上註冊，因此也尚未有壟斷市場的平台存在。</h2>
      </div>
    </div>
  </div>
);

export default YellgarDefine;