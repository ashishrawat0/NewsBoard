import React from "react"

const Pagination = ({ ChannelsPerPage, totalChannels, paginate}) => {
    const pageNumbers = [];
    const liStyle={"width":'30px'}

    for (let i = 1; i <= Math.ceil(totalChannels / 11); i++) {
        pageNumbers.push(i)
    }
    return ( 
        <div>       
        <nav style={liStyle}>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={()=> paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    )
}

export default Pagination