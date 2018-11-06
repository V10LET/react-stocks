import React,{Fragment} from 'react'

const Stock = ({stock, handlePurchase}) => (
  <Fragment>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
                stock.name
          }</h5>
          <p className="card-text">${
            stock.price
          }</p>
      <button className="btn btn-primary" onClick={handlePurchase} value={stock.id}>Buy Stock</button>
      </div>
    </div>


  </Fragment>
);

export default Stock
