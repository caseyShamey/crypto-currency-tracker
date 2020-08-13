import React from 'react'

const Currencies = ({ currencies, loading}) => {
  if(loading) {
    return <h2>Loading...</h2>
  }
  return (
    <ul className="currencyList">
        {currencies.map((currency) => (
          <li className="currency" key={currency.id}>
            <p>{currency.name}</p>
            <img className="logo" alt={currency.name} src={currency.logo_url} />
          </li>
        ))}
      </ul>
  )
}

export default Currencies
