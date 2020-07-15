import React from 'react'

const Channels =  ({channels,loading,channelName}) =>{
    if(loading){
        return(
            <div>
                <h2>Loading....</h2>
            </div>
        )
    }
    return(
        <ul className="list-group mb-4">
            {channels.map(channels=>(
        
                <li key={channels.id} className="list-group-item">
                    <a onClick={()=> channelName(channels)}>{channels.name}</a>
                </li>
            ))}
        </ul>
    )
}

export default Channels