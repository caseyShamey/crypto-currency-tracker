import React from 'react'
import './Currencies.css'

const Currencies = ({ currentCurrencies, loading, selectCurrency, firstCurrency }) => {
  if(loading) {
    return <h2>Loading...</h2>
  }
  return (
    <ul className="currencyList">
        {currentCurrencies.map((currency, i) => (
          <li onClick={() => selectCurrency(i + firstCurrency)} className="currency" key={currency.id}>
            <p>{currency.name}</p>
            <div className="image-container">
              <img className="logo" alt={currency.name} src={currency.logo_url} />
            </div>
          </li>
        ))}
      </ul>
  )
}

export default Currencies
