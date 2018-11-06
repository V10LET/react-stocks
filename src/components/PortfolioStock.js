import React,{Fragment} from 'react'

const Stock = ({stock}) => (
  <Fragment>
    <li class="list-group-item">
      {stock.ticker} : {stock.price} : {stock.time}
    </li>
  </Fragment>
);

export default Stock
