import React, { useState, useEffect } from 'react';
import ModalDialog from 'react-bootstrap/ModalDialog'
import Alert from 'react-bootstrap/Alert'
function News({ news, newsData }) {
    console.log(news)
    if (news == undefined) {

        return (
            <div>
            </div>
        )
    }

    if (news.length == 0) {
        return (
            <div className="mt-5">
                <Alert variant="danger" >
                    <Alert.Heading>No News Available</Alert.Heading>
                </Alert>
            </div>)
    }
    else {
        return (
            <div className="mt-2">
                <div className="row">
                    <h2 style={{ fontFamily: 'serif' }} className="text-primary ml-5">{news[0].source.name}</h2>
                </div>
                <div className="list-group list-group-flush">
                    {news.map(news => (
                        <a activeClassName="active" className="list-group-item list-group-item-action" onClick={() => { newsData(news); }}>{news.title}</a>
                    ))}
                </div>
            </div>
        )
    }
}

export default News