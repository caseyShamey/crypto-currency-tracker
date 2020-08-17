import React from 'react'

const Pagination = ({ paginate, currentPage, numberPaginated, lastInPaginatedRange, paginateLastRange, paginateFirstRange, firstInPaginatedRange, indexOfLastCurrency, currenciesPerPage }) => {

  const pageRange = [];

  if (currentPage <= numberPaginated) {
    for (let i = 1; i <= numberPaginated; i++) {
      pageRange.push(i)
    }
  } else {
    for (let j = firstInPaginatedRange; j <= lastInPaginatedRange; j++) {
      pageRange.push(j)
    }
  }

  const previousPaginate = () => {
    if (currentPage <= currenciesPerPage) {
      paginateFirstRange(1)
      paginateLastRange(numberPaginated)
      paginate(0)
    } else {
      paginateFirstRange(pageRange[0] - numberPaginated)
      paginateLastRange(pageRange[0] - 1)
      paginate(pageRange[0] - numberPaginated)
    }
  }

  const nextPaginate = () => {
    paginateLastRange(pageRange[pageRange.length - 1] + numberPaginated)
    paginateFirstRange(pageRange[pageRange.length - 1] + 1)
    paginate(indexOfLastCurrency + 1)
  }

  return (
    <nav>
        <ul className="pagination justify-content-center pagination-lg">
          <li className="page-item">
            <a onClick={previousPaginate} className="page-link" href="#">
              Previous
            </a>
          </li>
          {pageRange.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link" href="#">
              {number}
            </a>
          </li>
          ))}
          <li className="page-item">
            <a onClick={nextPaginate} className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default Pagination
