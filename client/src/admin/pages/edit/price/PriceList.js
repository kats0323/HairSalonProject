import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PriceFunction = props => (
    <tr>
        <td id="japanese">{props.prices.ja_course}</td>
        <td id="english">{props.prices.en_course}</td>
        <td>{props.prices.ja_price}</td>
        <td>{props.prices.en_price}</td>
        <td id="japanese">{props.prices.ja_detail}</td>
        <td id="english">{props.prices.en_detail}</td>
        <td>
            <Link to={"/admin/prices/edit/" + props.prices._id}>edit</Link> | <button href="#" onClick={() => { props.deletePrice(props.prices._id) }}>delete</button>
        </td>
    </tr>
)


export default class PriceList extends Component {
    constructor(props) {
        super(props);

        this.deletePrice = this.deletePrice.bind(this)

        this.state = { prices: [] };
    }

    componentDidMount() {
        axios.get('/prices/')
            .then(response => {
                this.setState({ prices: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePrice(id) {
        axios.delete('/prices/' + id)
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
            <div >
                <h3>Prices LIst</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Japanese Course</th>
                            <th>English Course</th>
                            <th>Japanese Price</th>
                            <th>English Price</th>
                            <th>Japanese Detail</th>
                            <th>English Course</th>
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