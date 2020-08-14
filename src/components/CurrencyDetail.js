import React from 'react';
import "./CurrencyDetail.css";

const CurrencyDetail = ({ currency }) => {
  return (
    <div>
      {currency.id}
    </div>
  )
}

export default CurrencyDetail;

/*
logo
currency name     symbol
rank
price       as of ____ ago
high price of _____  was reached on

circulating supply
max supply

market cap
*/
