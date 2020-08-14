import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Currencies from './Currencies';
import Pagination from './Pagination';
import './CurrenciesView.css';

const CurrenciesView = ({ selectCurrency, selectedCurrency, currencies, loading }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currenciesPerPage] = useState(12);
  const [numberPaginated] = useState(5);
  const [lastInPaginatedRange, setLastInPaginatedRange] = useState(5);
  const [firstInPaginatedRange, setFirstInPaginatedRange] = useState(1);

  // Get current currencies
  const indexOfLastCurrency = currentPage * currenciesPerPage;
  const indexOfFirstCurrency = indexOfLastCurrency - currenciesPerPage;
  const currentCurrencies = currencies.slice(indexOfFirstCurrency, indexOfLastCurrency);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Set first and last in range
  const paginateLastRange = (lastNum) => setLastInPaginatedRange(lastNum)
  const paginateFirstRange = (firstNum) => setFirstInPaginatedRange(firstNum)

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Cryptocurrencies Tracker</h1>
        <Currencies
          currencies={currentCurrencies}
          loading={loading}
          selectCurrency={selectCurrency}
        />
        <Pagination
        className="pagination"
        paginate={paginate}
        currentPage={currentPage}
        numberPaginated={numberPaginated}
        lastInPaginatedRange={lastInPaginatedRange}
        paginateLastRange={paginateLastRange}
        paginateFirstRange={paginateFirstRange}
        firstInPaginatedRange={firstInPaginatedRange}
        />
    </div>
  )
}

export default CurrenciesView;