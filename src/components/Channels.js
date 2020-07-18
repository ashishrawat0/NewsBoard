import React, { useReducer, useContext, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import {SourceContext} from '../SourceContext' 

const Channels =  ({channelName}) =>{
    const {value,value1} = useContext(SourceContext)
    const [channels,setChannel]= value
    const [currentChannel] = value1
    const [loading, setLoading] = useState(true);
    
    // if (channels)
    // {
    //     setLoading(false);

    // }
    // if(loading){
    //     return(
    //         <div>
    //             <h2>Loading....</h2>
    //         </div>
    //     )
    // }
    return(
        < ListGroup active as ="ul">
            {currentChannel.map(channels=>(
                <ListGroup.Item as="li"  key={channels.id}>
                    <a onClick={()=> channelName(channels)}>{channels.name}</a>
                </ListGroup.Item>
            ))}
        </ ListGroup>
    )
}

export default Channels