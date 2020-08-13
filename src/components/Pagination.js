import React, { useState } from 'react'

const Pagination = ({ currenciesPerPage, totalCurrencies, paginate, currentPage, numberPaginated, lastCurrency }) => {
  const pageNumbers = [];
  const pageRange = [];
  // const [previousPaginationState, setPreviousPaginationState] = useState('disabled');
  // const [nextPaginationState, setNextPaginationState] = useState('null');

  for(let i = 1; i <= Math.ceil(totalCurrencies / currenciesPerPage); i++) {
    pageNumbers.push(i)
  }

  for(let j = 0; j < numberPaginated; j++) {
    if (currentPage + j < 1) {
      paginate(1)
    }
      pageRange.push(currentPage + j)
  }

  // if (pageRange[0] === 1) {
  //   setPreviousPaginationState('disabled')
  // } else {
  //   setPreviousPaginationState('null')
  // }

  // if (pageRange[numberPaginated - 1] === lastCurrency) {
  //   setNextPaginationState('disabled')
  // } else {
  //   setNextPaginationState('null')
  // }

  return (
    <nav>
        <ul className="pagination justify-content-center pagination-lg">
          <li className="page-item">
            <a onClick={() => paginate(pageRange[0] - numberPaginated)} className="page-link" href="#">
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
            <a onClick={() => paginate(pageRange[numberPaginated - 1] + 1)} className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default Pagination
