import React, { useState, useEffect } from 'react';
import axios from 'axios'

function News({ channelId }) {

    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState('');
    const fetchChannel = async (channelId) => {
        const domain=channelId.replace('http://','').replace('https://','').replace('www.','')
        console.log(domain)
        const res = await axios.get(`https://newsapi.org/v2/everything?domains=${domain}&apiKey=6bd739815b4b407dbb9ea58f67fe8e1a`)
        setNews(res);
        setLoading(false);
    }
    if (channelId && loading==true) {
        fetchChannel(channelId)
        }
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