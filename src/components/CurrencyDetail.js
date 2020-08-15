import React from 'react';
import TimeAgo from 'timeago-react';


import "./CurrencyDetail.css";

const CurrencyDetail = ({ currency }) => {
  let { name, symbol, rank, price, price_timestamp, high, high_timestamp, circulating_supply, max_supply, market_cap, logo_url } = currency

  const numWithCommas = (num) => {
    if (num === undefined) {
      return 'NA'
    } else {
    let num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return num_parts.join(".");
    }
  }

  return (
    <div className="currency-detail-container">
      <div className="detail-image-container">
        <img className="detail-logo" alt={name} src={logo_url} />
      </div>
      <div className="name-container">
        <h1>{name} ({symbol})</h1>
      </div>
      <div className="info-container">
        <h3>Rank: {rank}</h3>
        <h3>
          Price: ${numWithCommas(price)} as of <span> </span>
          <TimeAgo
            datetime={price_timestamp}
          />
        </h3>
        <h3>
          High price of ${numWithCommas(high)} was reached <span> </span>
          <TimeAgo
            datetime={high_timestamp}
          />
        </h3>
        <h3>Circulating Supply: {numWithCommas(circulating_supply)}</h3>
        <h3>Max Supply: {numWithCommas(max_supply)}</h3>
        <h3>Market Cap: {numWithCommas(market_cap)}</h3>
      </div>
    </div>
  )
}

export default CurrencyDetail;

