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
                    <div key={number} className="pageItem">
                        <a onClick={() => {paginate(number)
                        }} href="!#" className="pageLink">
                            {number}
                            </a>                        

                    </div>
                ))}
            </div>

            
        </nav>
    )
}
