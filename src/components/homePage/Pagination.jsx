import React from 'react'

const Pagination = ({ onPageChange, currentPage, posts, pageSize }) => {
    const totalPages = Math.ceil(posts.length / pageSize);
    const renderPaginationLinks = () => {
        return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (

            <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
                <a href='#' onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
    return (
        <div>
            <ul className='flex-wrap gap-4 pagination mt-8' >
                <li>
                    <button onClick={()=> onPageChange(currentPage-1)} disabled={currentPage ===1}>Previous</button>
                </li>
                <div className='flex gap-7'>
                    {renderPaginationLinks()}
                </div>
                <li>
                    <button onClick={()=> onPageChange(currentPage+1)} 
                    disabled={currentPage ===totalPages}>Nexts</button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination