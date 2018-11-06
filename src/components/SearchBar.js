import React, {Fragment} from 'react';

const SearchBar = ({handleInput, handleRadio, handleSelect}) => {

    return (<Fragment>
        <strong>Search for Stocks!</strong>
        <input type="text" onChange={handleInput}/>
        <br/>

        <strong>Sort by:</strong>
        <label>
            <input type="radio" value="Alphabetically" checked={false} onChange={handleRadio}/>
            Alphabetically
        </label>
        <label>
            <input type="radio" value="Price" checked={false} onChange={handleRadio}/>
            Price
        </label>
        <br/>

        <label>
            <strong>Filter:</strong>
            <select onChange={handleSelect}>
                <option value="All" default>All</option>
                <option value="Tech">Tech</option>
                <option value="Sportswear">Sportswear</option>
                <option value="Finance">Finance</option>
            </select>
        </label>

    </Fragment>);
}

export default SearchBar;
