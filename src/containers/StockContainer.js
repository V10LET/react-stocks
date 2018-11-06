import React, { Component, Fragment } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
      const {stocks, handlePurchase} = this.props
    return (
      <Fragment>
        <h2>Stocks</h2>
        {
          Object.values(stocks).map(stock=> {
              return <Stock key={stock.id} stock={stock} handlePurchase={handlePurchase}/>
          })
        }
      </Fragment>
    );
  }

}

export default StockContainer;
