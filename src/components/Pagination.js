import React from "react"

const Pagination = ({ ChannelsPerPage, totalChannels }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalChannels / ChannelsPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className="Pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="!#" className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination