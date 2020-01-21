import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'

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


class PriceList extends Component {
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
        if (!this.props.isAuthenticated) {
            return (
                <div>
                    <h1> NOT AUTHORISED</h1>
                    <a href="/admin">GO TO DASHBOARD</a>
                </div>
            )
        } else {
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
}
PriceList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(PriceList);
