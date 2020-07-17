import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
const Channels =  ({channels,loading,channelName}) =>{
    if(loading){
        return(
            <div>
                <h2>Loading....</h2>
            </div>
        )
    }
    return(
        < ListGroup active as ="ul">
            {channels.map(channels=>(
                <ListGroup.Item as="li"  key={channels.id}>
                    <a onClick={()=> channelName(channels)}>{channels.name}</a>
                </ListGroup.Item>
            ))}
        </ ListGroup>
    )
}

export default Channels