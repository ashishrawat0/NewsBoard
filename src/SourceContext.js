import React, { useState, createContext, useEffect } from "react"
import axios from 'axios'
export const SourceContext = createContext();

export const SourceProvider = props => {
  
  var currentPage=1;
  if(props.pageNumber==undefined){
    currentPage=1
  }
  else{
    currentPage=props.pageNumber
  }
  const [channelsPerPage] = useState(11);
  const [channels, setChannel] = useState([]);
  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get("https://newsapi.org/v2/sources?apiKey=fc62c650d19b4e3186cad1cc396ef847")
      setChannel(res.data.sources);
    }
    fetchChannel();
  }, []);
  console.log(props)
  const indexOfLastChannel = channelsPerPage * currentPage;
  const indexofFirstChannel = indexOfLastChannel - channelsPerPage;
  const currentChannel = channels.slice(indexofFirstChannel, indexOfLastChannel);

console.log(currentPage)

  return (<SourceContext.Provider value={{value:[channels, setChannel],value1:[currentChannel]}}>{props.children}</SourceContext.Provider>)
}   