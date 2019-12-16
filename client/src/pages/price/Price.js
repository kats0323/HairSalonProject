import React, { Component } from 'react';
import axios from 'axios';

const PriceFunction = props => (
    <tr>
        <td>{props.prices.course}</td>
        <td>{props.prices.price}</td>
    </tr>
)


export default class Price extends Component {
    constructor(props) {
        super(props);

        this.deletePrice = this.deletePrice.bind(this)

        this.state = { prices: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/prices/')
            .then(response => {
                this.setState({ prices: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePrice(id) {
        axios.delete('http://localhost:5000/prices/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            prices: this.state.prices.filter(el => el._id !== id)
        })
    }

    priceList() {
        return this.state.prices.map(currentprice => {
            return <PriceFunction prices={currentprice} deletePrice={this.deletePrice} key={currentprice._id} />;
        })
    }

    render() {
        return (
            <div style={{ paddingLeft: "350px" }}>
                <h3>Prices List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Course</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.priceList()}
                    </tbody>
                </table>
            </div>
        )
    }
}