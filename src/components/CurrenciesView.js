import React, { useState } from 'react';

import Currencies from './Currencies';
import Pagination from './Pagination';
import Search from './Search';
import './CurrenciesView.css';

const CurrenciesView = ({ selectCurrency, search, currencies, loading, numberOfCurrencies, firstInPaginatedRange, setFirstInPaginatedRange }) => {
  const [firstCurrency, setFirstCurrency] = useState(0);
  const [currenciesPerPage] = useState(12);
  const [numberPaginated] = useState(5);
  // const [firstInPaginatedRange, setFirstInPaginatedRange] = useState(1);

  // Get current currencies
  const indexOfLastCurrency = firstCurrency + currenciesPerPage - 1;
  const currentCurrencies = currencies.slice(firstCurrency, indexOfLastCurrency + 1);

  return (
    <div className='container mt-5'>
      <div className="heading-container">
        <h1 onClick={() => window.location.reload(false)} className='text-primary mb-3 crypto-title'>Cryptocurrencies Tracker</h1>
        <Search srch={search} />
      </div>
        <Currencies
          currentCurrencies={currentCurrencies}
          loading={loading}
          selectCurrency={selectCurrency}
          firstCurrency={firstCurrency}
        />
        <Pagination
        className="pagination"
        setFirstCurrency={setFirstCurrency}
        numberPaginated={numberPaginated}
        setFirstInPaginatedRange={setFirstInPaginatedRange}
        firstInPaginatedRange={firstInPaginatedRange}
        currenciesPerPage={currenciesPerPage}
        numberOfCurrencies={numberOfCurrencies}
        />
    </div>
  )
}

export default CurrenciesView;