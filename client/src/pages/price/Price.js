import React, { Component } from 'react';
import axios from 'axios';
import './price.css'
import { Card, Col } from 'antd';


const PriceFunction = props => (
    <Col style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <Card style={{border:"none", textAlign:"center"}}>
            <h2>{props.prices.course}</h2>
            <h4>{props.prices.price}</h4>
        </Card>
    </Col>
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
            <div class="background">
                <div style={{display:"flex", flexDirection:"row", justifyContent:"center", paddingTop:"1%"}}>
                    <h3 style={{fontSize:"2rem", padding:"40px",borderStyle: "solid",borderWeight:"2px", width:"250px"}}>Prices List</h3>
                </div>
                {this.priceList()}
            </div>
        )
    }
}