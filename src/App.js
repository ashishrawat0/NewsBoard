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
  const [pageNumber, setcurrentPage] = useState();
  const check = true;
  const [news, setNewsDetails] = useState([]);
  const [fav, setFav] = useState({});
  const [isFav, setFavBool] = useState()
  const [starNews, setStar] =useState([])
  const [hit,setHit] =useState(false)
  /////// fetch news details///

  const fetchChannel = async (channels) => {
    const domain = channels.url.replace('http://', '').replace('https://', '').replace('www.', '')
    const res = await axios.get(`https://newsapi.org/v2/everything?domains=${domain}&apiKey=fc62c650d19b4e3186cad1cc396ef847`)
    setNewsDetails(res.data.articles)
    setName(channels.id);
    setHit(true)
  }

  ////change page/////

  const paginate = (number) => {
    setcurrentPage(number);
  }

  const channelName = (channels) => {
    setName(channels.id);
    console.log("seting the channel")
  }
  const favNews =(favTrue) =>{
    setFavBool(favTrue)

  }
  console.log(newsRes)
  /////News Data /////
  function addFav(news) {
    if(news.title in fav){
      console.log(news.title)
      delete fav[news.title]
    }
    else{
      fav[news.title]=news
    }
    
  }
  const favourite = (news) =>{
    addFav(news);
  } 
  const newsData = (news) => {
    setNews(news);
   
  };
  if(isFav){
    var arr=[]
    for(var key in fav){
      arr.push(fav[key])
    }
    setFavBool(false)    
    setNewsDetails(arr)
  }

  ///// Div Style ////

  const divStyle = {
    display: 'flex-container',
  }

  return (
    <div class="row">
      <div className="col-md-4 mt-2" style={divStyle}>
        <h2 className="text-primary" style={{ textAlign: "center", fontFamily: 'serif' }}>News Channels</h2>
        <SourceProvider pageNumber={pageNumber}>
          <Channels fetchChannel={fetchChannel} favNews={favNews}></Channels>
          <Pagination paginate={paginate} />
        </SourceProvider>
      </div>
      <div className="col-md-4">
        <News hit={hit} news={news} l={check} newsData={newsData} fav={fav} favourite={favourite}/>
      </div>
      <div className="col-md-4">
        <Content newsRes={newsRes} newsChannel={newsChannel} isFav={isFav} />
      </div>
    </div>
  );
}

export default App;
