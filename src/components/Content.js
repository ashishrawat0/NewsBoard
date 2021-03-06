import React from 'react';
import Card from 'react-bootstrap/Card';
const Content = ({ newsRes, selectedChannels, newsChannel }) => {
  if (
    newsRes == undefined ||
    selectedChannels.includes(newsRes.source.id) == false
  ) {
    return <div></div>;
  }
  return (
    <div>
      <div className="mt-5">
        <Card style={{ border: 'none' }}>
          <Card.Body>
            <Card.Title className="mt-1">{newsRes.title}</Card.Title>
            <Card.Img
              variant="top"
              src={newsRes.urlToImage}
              alt="Image not found"
            />
            <Card.Text className="mt-2">{newsRes.description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default Content;
