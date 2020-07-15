import React, { useState, useEffect } from 'react';
import axios from 'axios'

function News({ channelId }) {

    const [loading, setLoading] = useState([]);
    const [news,setNews]=useState([]);
    useEffect(() => {
        if(channelId!=undefined){
        const fetchChannel = async () => {
          setLoading(true);
          const res = await axios.get(`https://newsapi.org/v2/everything?domains=${channelId}&apiKey=2c27260665d5434cb5c68ead5b2e3cb9`)
          setNews(res);
          setLoading(false)
        }
        
        fetchChannel()
    }
      }, []);

    console.log(news)
    return (
        <div>
            <div>
                News
            </div>
            <div className="row">
                <div className="col-md-4"><p>Image</p></div>
                <div className="col-md-4">{channelId}</div>
            </div>
            <div>
                <p>
                    List Of News
                </p>
            </div>
        </div>
    )
}

export default News