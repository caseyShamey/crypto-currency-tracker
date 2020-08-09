import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    currencies: []
  }

  sortCurrencies = (data) => {
    data.sort(function(a, b) {
      return a.rank - b.rank
    })
  }

  componentDidMount() {
    fetch("https://api.nomics.com/v1/currencies/ticker?key=4582ca2d8e989291b7cb5c9236018ace")
      .then(response => response.json())
      .then(currenciesList => {
        this.setState({currencies: currenciesList})
      })
  }

  render() {

    return (
      <div>
        <h1>Cryptocurrencies</h1>
        <ul>
          {this.state.currencies.map((currency) => (
            <li key={currency.id}>
              <img className="logo" alt={currency.name} src={currency.logo_url} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App;