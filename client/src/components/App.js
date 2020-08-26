import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CurrenciesView from './CurrenciesView';
import CurrencyDetail from './CurrencyDetail';
import './App.css';

const App = () => {
  const [view, setView] = useState('currencies');
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberOfCurrencies, setNumberOfCurrencies] = useState(0)
  const [firstInPaginatedRange, setFirstInPaginatedRange] = useState(1);
  const [firstCurrency, setFirstCurrency] = useState(0);
  const [currenciesPerPage] = useState(12);
  const [numberPaginated] = useState(5);

// Fetch ticker data
  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);
      const res = await axios.get("/prices")
        setCurrencies(res.data);
        setNumberOfCurrencies(res.data.length)
        setLoading(false);
    }

    fetchCurrencies();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Change view
  const detail = () => setView('detail');
  const viewCurrencies = () => setView('currencies');

  // Detail Currency
  const selectCurrency = (id) => {
    detail()
    setSelectedCurrency(currencies[id])
  }

  // Search logic
  const search = (searchTerm) => {
    let results = [];
    for (let el of currencies) {
      let lowCaseName = el.name.toLowerCase()
      let lowCaseId = el.id.toLowerCase()
      searchTerm = searchTerm.toLowerCase()
      if (lowCaseName.includes(searchTerm.toLowerCase()) || lowCaseId.includes(searchTerm.toLowerCase())) {
        results.push(el)
      }
    }
    setCurrencies(results)
    setNumberOfCurrencies(results.length)
    setFirstInPaginatedRange(1)
  }

  if (view === 'currencies') {
    return (
      <div>
        <CurrenciesView
          selectCurrency={selectCurrency}
          selectedCurrency={selectedCurrency}
          currencies={currencies}
          loading={loading}
          numberOfCurrencies={numberOfCurrencies}
          search={search}
          firstInPaginatedRange={firstInPaginatedRange}
          setFirstInPaginatedRange={setFirstInPaginatedRange}
          firstCurrency={firstCurrency}
          setFirstCurrency={setFirstCurrency}
          currenciesPerPage={currenciesPerPage}
          numberPaginated={numberPaginated}
        />
      </div>
    )
  } else if (view === "detail") {
    return (
      <div>
        <CurrencyDetail currency={selectedCurrency} viewCurrencies={viewCurrencies} loading={loading} setLoading={setLoading} />
      </div>
    )
  }
}

export default App;