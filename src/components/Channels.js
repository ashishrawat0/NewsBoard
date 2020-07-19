import React, { useReducer, useContext, useState } from 'react'
import { SourceContext } from '../Context/SourceContext'
const favTrue =true;
const Channels = ({ fetchChannel,favNews }) => {
    const { value, value1 } = useContext(SourceContext)
    const [channels, setChannel] = value
    const [currentChannel] = value1
    if (currentChannel) {
        return (
            <div><button onClick={()=> favNews(favTrue)} >fav</button>
                <div className='list-group list-group-flush'>

                    {currentChannel.map(channels => (
                        <a onClick={() => { fetchChannel(channels) }} className="list-group-item list-group-item-action">{channels.name}</a>

                    ))}
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <h2>Loading....</h2>
            </div>
        )
    }
}

export default Channels