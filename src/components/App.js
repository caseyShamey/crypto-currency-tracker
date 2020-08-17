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

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);
      const res = await axios.get("https://api.nomics.com/v1/currencies/ticker?key=4582ca2d8e989291b7cb5c9236018ace")
      setCurrencies(res.data);
      setLoading(false);
    }

    fetchCurrencies();
  }, []);

  // Change view
  const detail = () => setView('detail')
  const viewCurrencies = () => setView('currencies')

  //Detail Currency
  const selectCurrency = (id) => {
    detail()
    setSelectedCurrency(currencies[id])
  }

  if (view === 'currencies') {
    return (
      <div>
        <CurrenciesView selectCurrency={selectCurrency} selectedCurrency={selectedCurrency} currencies={currencies} loading={loading} />
      </div>
    )
  } else if (view === "detail") {
    return (
      <div>
        <CurrencyDetail currency={selectedCurrency} viewCurrencies={viewCurrencies} />
      </div>
    )
  }
}

export default App;