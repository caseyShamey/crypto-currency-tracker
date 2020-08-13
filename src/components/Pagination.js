import React from 'react'

const Pagination = ({ currenciesPerPage, totalCurrencies, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalCurrencies / currenciesPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <nav>
        <ul className="pagination justify-content-center pagination-lg">
          {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link" href="#">
              {number}
            </a>
          </li>

          ))}
        </ul>
      </nav>
  )
}

export default Pagination
