import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import List from './SourceList'
import News from './components/News'
import Content from './Content'
import axios from 'axios'
import './App.css';
import Channels from './components/Channels'
import Pagination from './components/Pagination'

function App() {
  const [channels, setChannel] = useState([]);
  const [loading, setLoading] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [channelsPerPage] = useState(10);
  const [ChannelId,setChannelUrl]= useState();

  useEffect(() => {
    const fetchChannel = async () => {
      setLoading(true);
      const res = await axios.get("https://newsapi.org/v2/sources?apiKey=6bd739815b4b407dbb9ea58f67fe8e1a")
      setChannel(res.data.sources);
      setLoading(false)
    }
    fetchChannel()
  }, []);

  ///PAGENATION///

  const indexOfLastChannel=channelsPerPage*currentPage
  const indexofFirstChannel=indexOfLastChannel-channelsPerPage
  const currentChannel=channels.slice(indexofFirstChannel,indexOfLastChannel)

  /////////////////////////////

  ////change page
   const paginate = (number)=> setcurrentPage(number);
   const channelName = (channels)=> setChannelUrl(channels.url);
  console.log(ChannelId)
  return (
    <div class="row">
      <div className="col-md-4 mt-2">
        <h2 className="tex-primary">News Channels</h2>
        <Channels channels={currentChannel} loading={loading} channelName={channelName} />
        <Pagination channelsPerPage={channelsPerPage} totalChannels={channels.length} paginate={paginate}/>
      </div>
      <div className="col-md-4">
        <News channelId={ChannelId}/>
      </div>
      <div className="col-md-4">
        <Content />
      </div>
    </div>
  );
}

export default App;
