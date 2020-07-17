import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import List from './SourceList'
import News from './components/News'
import Content from './components/Content'
import axios from 'axios'
import './App.css';
import Channels from './components/Channels'
import Pagination from './components/Pagination'

function App() {
  const [channels, setChannel] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [channelsPerPage] = useState(11);
  const [ChannelId, setChannelUrl] = useState();
  const [newsRes, setNews] = useState();
  const [newsChannel, setName] = useState();

  useEffect(() => {
    const fetchChannel = async () => {
      setLoading(true);
      const res = await axios.get("https://newsapi.org/v2/sources?apiKey=fc62c650d19b4e3186cad1cc396ef847")
      setChannel(res.data.sources);
      setName(res.data.sources.id)
      setLoading(false)
    }
    fetchChannel()
  }, []);

  ///PAGENATION///

  const indexOfLastChannel = channelsPerPage * currentPage
  const indexofFirstChannel = indexOfLastChannel - channelsPerPage
  const currentChannel = channels.slice(indexofFirstChannel, indexOfLastChannel)
  const check = true

  /////////////////////////////

  console.log(newsChannel)

  ////change page

  const paginate = (number) => {
    setcurrentPage(number);
  }
  const channelName = (channels) => {
    setChannelUrl(channels.url);
    setName(channels.id)
  }

  /////News Data

  const newsData = (news) => setNews(news);

  const divStyle = {
    display: 'flex-container',
  }
  return (
    <div class="row">
      <div className="col-md-4 mt-2" style={divStyle}>
        <h2 className="text-primary">News Channels</h2>
        <Channels channels={currentChannel} loading={loading} channelName={channelName}></Channels>
        <Pagination channelsPerPage={channelsPerPage} totalChannels={channels.length} paginate={paginate} />
        <div>

        </div>
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
