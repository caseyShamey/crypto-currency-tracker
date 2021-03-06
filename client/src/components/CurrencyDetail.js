import React, { useState } from 'react';
import TimeAgo from 'timeago-react';
import Charts from './Charts';
import TimeButton from './TimeButton'

import "./CurrencyDetail.css";

const CurrencyDetail = ({ currency, viewCurrencies, loading, setLoading }) => {
  const [time, setTime] = useState([1, "days"]);

  let { id, name, symbol, rank, price, price_timestamp, high, high_timestamp, circulating_supply, max_supply, market_cap, logo_url } = currency

  // Add commas to large numbers
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
      <button
        type="button"
        className="btn btn-primary back"
        onClick={() => viewCurrencies()}
      >
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </button>
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
      <div className="chart-container">
        <Charts loading={loading} setLoading={setLoading} name={name} id={id} time={time} />
      </div>
      <div className="time-button-container">
        <TimeButton className="time-button" time={[1, "days"]} text={'1 day'} setTime={setTime} />
        <TimeButton className="time-button" time={[1, "weeks"]} text={'1 week'} setTime={setTime} />
        <TimeButton className="time-button" time={[1, "months"]} text={'1 month'} setTime={setTime} />
        <TimeButton className="time-button" time={[3, "months"]} text={'3 months'} setTime={setTime} />
        <TimeButton className="time-button" time={[1, "years"]} text={'1 year'} setTime={setTime} />
        <TimeButton className="time-button" time={[5, "years"]} text={'5 years'} setTime={setTime} />
      </div>
    </div>
  )
}

export default CurrencyDetail;

