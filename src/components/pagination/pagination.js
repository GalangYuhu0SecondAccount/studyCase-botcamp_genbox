import React from "react";


const Pagination = ({postPerPage , length , handlePagination , currentPage}) => {
    let PaginationNumber = []


    for (let i = 0; i <= Math.ceil( length / postPerPage );  i++) {
        PaginationNumber.push(i);
        
    }


    return (
        <>
        <div className="">
            {
                PaginationNumber.map((data) => (
                    <button key={data} onClick={() => handlePagination(data)} className={currentPage === data ? 'active' : ''}>
                        {data}
                    </button>
                ))
            }
        </div>
        </>
    )
}


export default Pagination;