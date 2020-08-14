import React, { useState } from 'react'

const Pagination = ({ paginate, currentPage, numberPaginated, lastInPaginatedRange, paginateLastRange, paginateFirstRange, firstInPaginatedRange }) => {

  const pageRange = [];
  // const [previousPaginationState, setPreviousPaginationState] = useState('disabled');
  // const [nextPaginationState, setNextPaginationState] = useState('null');

  // for(let i = 1; i <= Math.ceil(totalCurrencies / currenciesPerPage); i++) {
  //   pageNumbers.push(i)
  // }
  if (currentPage <= numberPaginated) {
    for (let i = 1; i <= numberPaginated; i++) {
      pageRange.push(i)
    }
  } else {
    for (let j = firstInPaginatedRange; j <= lastInPaginatedRange; j++) {
      pageRange.push(j)
    }
  }

  // const numberPaginate = (number) => {
  //   paginate(number)
  // }

  const previousPaginate = () => {
    if (currentPage <= numberPaginated) {
      paginateFirstRange(1)
      paginateLastRange(numberPaginated)
      paginate(1)
    } else {
      paginateFirstRange(pageRange[0] - numberPaginated)
      paginateLastRange(pageRange[0] - 1)
      paginate(pageRange[0] - numberPaginated)
    }
  }

  const nextPaginate = () => {
    paginateLastRange(pageRange[pageRange.length - 1] + numberPaginated)
    paginateFirstRange(pageRange[pageRange.length - 1] + 1)
    paginate(lastInPaginatedRange + 1)
  }



  // pageStart = pageRange[0]
  // pageEnd = pageRange[numberPaginated - 1]

  // for(let j = 1; j < numberPaginated + 1; j++) {
  //   if (currentPage + j < 1) {
  //     pageEnd = numberPaginated
  //     paginate(1)
  //   } else if (currentPage <= numberPaginated) {
  //     pageRange.push(j)
  //   } else {
  //     pageRange.push(pageEnd + j)
  //   }
  //   paginate(pageStart)
  // }

  // pageStart = pageRange[0]
  // pageEnd = pageRange[pageRange.length - 1]

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
