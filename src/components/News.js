import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
function News({ hit, news, newsData, fav, favourite }) {
  const [current, setCurrent] = useState();
  console.log(news);
  if (hit == false && news.length == 0) {
    return <div></div>;
  } else if (news.length == 0) {
    return (
      <div className="mt-5">
        <Alert variant="danger">
          <Alert.Heading>No News Available</Alert.Heading>
        </Alert>
      </div>
    );
  } else {
    return (
      <div className="mt-2">
        <div className="row">
          <h2 style={{ fontFamily: 'serif' }} className="text-primary ml-5">
            {current}
          </h2>
        </div>
        <div className="list-group list-group-flush">
          {news.map((news) => (
            <a
              className="list-group-item list-group-item-action"
              onClick={() => {
                newsData(news);
                setCurrent(news.source.name);
              }}
            >
              {news.title}{' '}
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi-bi-star"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  favourite(news);
                }}
              >
                {' '}
                <path
                  d={
                    news.title in fav
                      ? 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'
                      : 'M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'
                  }
                />
              </svg>
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
