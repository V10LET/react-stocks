import React, { Component, Fragment } from 'react';
import PortfolioStock from '../components/PortfolioStock'

let padding = { paddingBottom: '20px' }

class PortfolioContainer extends Component {

  render() {
      const {stocks} = this.props
    return (
      <Fragment>
        <ul className="list-group">
          <h2>My Portfolio</h2>
          {
              Object.values(stocks).map(stock=> {
                  console.log(stock)
                  return <div key={stock.id} style={padding}>Name: {stock.name}<br/>Ticker: {stock.ticker}<br/>Price: ${stock.price}</div>
              })
          }
        </ul>
      </Fragment>
    );
  }

}

export default PortfolioContainer;
