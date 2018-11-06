import React, {Component, Fragment} from 'react'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

    state = {
        stocks: [],
        purchased: [],
        searchTerm: "",
        option: ""
    }

    componentDidMount() { this.fetch()}

    fetch = () => {
        fetch("http://localhost:3000/stocks")
        .then(r => r.json())
        .then(r => this.setState({stocks: Object.values(r)}))
    }

    // search bar
    handleInput = (event) => {
        this.setState({searchTerm: event.target.value.toLowerCase()})
    }

    // radio buttons
    handleRadio = (event) => {
        let input = event.target.value
        if (input === "Price") {
            const stocks = Object.values(this.state.stocks).sort( (stock1, stock2) => {
                let price1 = stock1.price
                let price2 = stock2.price
                return price1 - price2
            })
            this.setState({ stocks })
        } else if (input === "Alphabetically" && event.target.checked){
            const stocks = Object.values(this.state.stocks).sort( (stock1, stock2) => {
                let name1 = stock1.name
                let name2 = stock2.name
                return name1.localeCompare(name2)
            })
            this.setState({ stocks })
        }
    }

    // dropdown
    handleSelect = (event) => {
        let input
        event.target.value === "All" ? input = "" : input = event.target.value
        this.setState({ option: input})
    }


    // purchase a stock
    handlePurchase = (event) => {
        Object.values(this.state.stocks).map(stock=> {
            const newStock = {
                ...stock, time: new Date().toLocaleString()
            }
            if (stock.id === Number(event.target.value)) {
                this.setState({purchased: [...this.state.purchased, newStock]})
            }
        })
    }

    render() {
        const {stocks, searchTerm} = this.state
        const searchedStocks = Object.values(stocks).filter(stock=> {
            return stock.name.toLowerCase().includes(searchTerm) || stock.ticker.toLowerCase().includes(searchTerm)
        })
        const dropdownType = Object.values(searchedStocks).filter(stock => stock.type.includes(this.state.option))

        return (
            <Fragment>
                <SearchBar handleInput={this.handleInput} handleRadio={this.handleRadio} handleSelect={this.handleSelect}/>

                <div className="row">
                    <div className="col-8">

                        <StockContainer stocks={dropdownType} handlePurchase={this.handlePurchase}/>

                    </div>
                    <div className="col-4">

                        <PortfolioContainer stocks={this.state.purchased} />

                    </div>
                </div>
            </Fragment>
        )
    }

}

export default MainContainer
