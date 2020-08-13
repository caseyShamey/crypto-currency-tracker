import React from 'react'
import './Currencies.css'

const Currencies = ({ currencies, loading}) => {
  if(loading) {
    return <h2>Loading...</h2>
  }
  return (
    <ul className="currencyList">
        {currencies.map((currency) => (
          <li className="currency" key={currency.id}>
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
