import React from 'react';
import styles from './Pagination.modules.css'

export const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for(let i =1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <div className="pagination">
                {pageNumbers.map(number => (
                    <div key={number} className="page-item">
                        <a onClick={() => {paginate(number)
                        }} href="!#" className="page-link">
                            {number}
                            </a>                        

                    </div>
                ))}
            </div>

            
        </nav>
    )
}
