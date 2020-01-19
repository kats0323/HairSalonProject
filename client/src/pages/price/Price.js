import React, { Component } from 'react';
import axios from 'axios';
import './price.css'
import '../../common.css'
import { Card, Col } from 'antd';



const PriceFunction = props => (
    <div className="price_background">
        {props.language == "Japanese" ? (
            <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                    <h2>{props.prices.price}</h2>
                    <h2 className="japanese">{props.prices.ja_course}</h2>
                    <br />
                    <h5 className="japanese">{props.prices.ja_detail}</h5>
                </Card>
            </Col >
        ) : (
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                    <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                        <h2>{props.prices.price}</h2>
                        <h2 id="english">{props.prices.en_course}</h2>
                        <br />
                        <h5 id="english">{props.prices.en_detail}</h5>
                    </Card>
                </Col >
            )}
    </div>
)


export default class Price extends Component {
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
            return <PriceFunction prices={currentprice} deletePrice={this.deletePrice} key={currentprice._id} language={this.props.language} />;
        })
    }

    render() {

        return (
            <div class="background">
                <h1 style={{ textAlign: "center", paddingTop: "20px" }}>Menu</h1>
                {this.priceList()}

            </div >
        )
    }
}