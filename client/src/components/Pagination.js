import React, { useEffect } from 'react'

const Pagination = ({
  setFirstCurrency,
  numberPaginated,
  setFirstInPaginatedRange,
  firstInPaginatedRange,
  currenciesPerPage,
  numberOfCurrencies
 }) => {

  useEffect(() => {
    setFirstCurrency(firstInPaginatedRange * currenciesPerPage - currenciesPerPage)
  }, [currenciesPerPage, firstInPaginatedRange, setFirstCurrency])

  const pageRange = [];

  if (firstInPaginatedRange + numberPaginated >= numberOfCurrencies / numberPaginated) {
    for (let i = firstInPaginatedRange; i <= numberOfCurrencies / numberPaginated; i++) {
      pageRange.push(i)
    }
  } else if (firstInPaginatedRange <= numberPaginated) {
    for (let i = 1; i <= numberPaginated; i++) {
      pageRange.push(i)
    }
  } else {
    for (let j = firstInPaginatedRange; j <= firstInPaginatedRange + numberPaginated - 1; j++) {
      pageRange.push(j)
    }
  }

  const selectPage = (number) => {
    setFirstCurrency(number * currenciesPerPage - currenciesPerPage)
  }

  const previousPaginate = () => {
    if (firstInPaginatedRange > 1) {
      setFirstInPaginatedRange(firstInPaginatedRange - numberPaginated)
    }
  }

  const nextPaginate = () => {
    if (numberOfCurrencies / currenciesPerPage > firstInPaginatedRange + numberPaginated) {
      setFirstInPaginatedRange(firstInPaginatedRange + numberPaginated)
    }
  }

  return (
    <nav>
        <ul className="pagination justify-content-center pagination-lg">
          <li className="page-item">
            <p onClick={previousPaginate} className="page-link">
              Previous
            </p>
          </li>
          {pageRange.map(number => (
          <li key={number} className="page-item">
            <p onClick={() => selectPage(number)} className="page-link">
              {number}
            </p>
          </li>
          ))}
          <li className="page-item">
            <p onClick={nextPaginate} className="page-link">
              Next
            </p>
          </li>
        </ul>
      </nav>
  )
}

export default Pagination
