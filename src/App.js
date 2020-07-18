import React, { useState, useEffect } from 'react';
import axios from 'axios'
import News from './components/News'
import Content from './components/Content'
import './App.css';
import Channels from './components/Channels'
import Pagination from './components/Pagination'
import { SourceProvider } from './Context/SourceContext'
function App() {

  const [newsRes, setNews] = useState();
  const [newsChannel, setName] = useState();
  const [pageNumber,setcurrentPage] =useState();
  const check = true;
  const [news, setNewsDetails] = useState();



  /////// fetch news details///

  const fetchChannel = async (channels) => {
    const domain = channels.url.replace('http://', '').replace('https://', '').replace('www.', '')
    const res = await axios.get(`https://newsapi.org/v2/everything?domains=${domain}&apiKey=fc62c650d19b4e3186cad1cc396ef847`)
    setNewsDetails(res.data.articles)
    setName(channels.id);
}



  ////change page/////

  const paginate = (number) => {
    setcurrentPage(number);
  }

  const channelName = (channels) => {
    setName(channels.id);
    console.log("seting the channel")
  }

  /////News Data /////

  const newsData = (news) => setNews(news);

  ///// Div Style ////

  const divStyle = {
    display: 'flex-container',
  }

  return (
    <div class="row">
      <div className="col-md-4 mt-2"  style={divStyle}>
        <h2 className="text-primary" style={{textAlign:"center"}}>News Channels</h2>
        <SourceProvider pageNumber={pageNumber}>
        <Channels fetchChannel={fetchChannel}></Channels>
        <Pagination  paginate={paginate} />
        </SourceProvider>
      </div>
      <div className="col-md-4">
        <News news={news} l={check} newsData={newsData} />
      </div>
      <div className="col-md-4">
        <Content newsRes={newsRes} newsChannel={newsChannel} />
      </div>
    </div>
  );
}

export default App;
