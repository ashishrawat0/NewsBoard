import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import List from './SourceList'
import News from './components/News'
import Content from './components/Content'
import axios from 'axios'
import './App.css';
import Channels from './components/Channels'
import Pagination from './components/Pagination'
import { SourceProvider } from './SourceContext'
function App() {

  const [ChannelId, setChannelUrl] = useState();
  const [newsRes, setNews] = useState();
  const [newsChannel, setName] = useState();
  const [pageNumber,setcurrentPage] =useState();
  const check = true;

  ////change page/////

  const paginate = (number) => {
    setcurrentPage(number);
  }

  const channelName = (channels) => {
    setChannelUrl(channels.url);
    setName(channels.id);
  }

  /////News Data /////

  const newsData = (news) => setNews(news);

  ///// Div Style ////

  const divStyle = {
    display: 'flex-container',
  }

  return (
    <div class="row">
      <div className="col-md-4 mt-2" style={divStyle}>
        <h2 className="text-primary">News Channels</h2>
        <SourceProvider pageNumber={pageNumber}>
        <Channels channelName={channelName}></Channels>
        <Pagination  paginate={paginate} />
        </SourceProvider>
      </div>
      <div className="col-md-4">
        <News channelId={ChannelId} l={check} newsData={newsData} />
      </div>
      <div className="col-md-4">
        <Content newsRes={newsRes} newsChannel={newsChannel} />
      </div>
    </div>
  );
}

export default App;
