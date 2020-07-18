import React from 'react'
import Card from 'react-bootstrap/Card'
const Content = ({ newsRes, newsChannel }) => {
    if (newsRes == undefined || newsChannel != newsRes.source.id) {
        return (
            <div></div>
        )
    }
    return (
        <div>
            <div className="mt-4">Content</div>
            <div className="mt-2">
                <Card>
                    <Card.Body>
                        <Card.Title>{newsRes.title}</Card.Title>
                        <Card.Img variant="top" src={newsRes.urlToImage} />
                        <Card.Text className="mt-2">
                            {newsRes.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default Content