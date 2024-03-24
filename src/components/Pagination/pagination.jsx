import React from "react";
import "../Pagination/pagination.css"

const Pagination = ({postPerPage , length , handlePagination , currentPage}) => {
    let PaginationNumber = [];


    for (let i = 1; i <= Math.ceil( length / postPerPage );  i++) {
        PaginationNumber.push(i);
        
    }


    return (
        <>
        <div className="pagination">
            {
                PaginationNumber.map((data) => (
                    <button key={data} onClick={() => handlePagination(data)} className={currentPage === data ? "active" : ""}>
                        {data}
                    </button>
                ))
            }
        </div>
        </>
    )
}


export default Pagination;