import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'
function News({ channelId, l, newsData }) {

    const [loading, setLoading] = useState(l);
    const [news, setNews] = useState();
    const [prev, setPrev] = useState();
    const [selected, setSelected] = useState();
    const fetchChannel = async (channelId) => {
        const domain = channelId.replace('http://', '').replace('https://', '').replace('www.', '')
        console.log(domain)
        const res = await axios.get(`https://newsapi.org/v2/everything?domains=${domain}&apiKey=fc62c650d19b4e3186cad1cc396ef847`)
        setNews(res.data.articles)
        setLoading(false);
        setPrev(channelId)
        console.log(res)
        return console.log("inside request")
    }

    console.log(selected)
    if (channelId != prev) {
        fetchChannel(channelId)
    }
    if (loading) {
        return (
            <div>
            </div>
        )
    }
    if (news.length == 0) {
        console.log(news.length)
        return (<Alert variant="danger">
            <Alert.Heading>No News Available</Alert.Heading></Alert>)
    }
    return (
        <div className="mt-2">
            <div className="row">
                <h2 className="text-primary">News</h2>
            </div>
            <div>
                <ul className="list-group mb-4">
                    {news.map(news => (
                        <li key={news.id} className="list-group-item">
                            <a onClick={() => newsData(news)} onChange={() => setSelected(news.title)}>{news.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default News