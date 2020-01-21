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

    cutList() {
        return this.state.prices.slice(0, 8).map(cutprice => {

            return <CutPriceFunction cut={cutprice} deletePrice={this.deletePrice} key={cutprice._id} language={this.props.language} />;
        })
    }

    colourList() {
        return this.state.prices.slice(9, 19).map(colourprice => {
            return <ColorPriceFunction colour={colourprice} deletePrice={this.deletePrice} key={colourprice._id} language={this.props.language} />;
        })
    }

    permList() {
        return this.state.prices.slice(20, 24).map(permprice => {
            return <PermPriceFunction perm={permprice} deletePrice={this.deletePrice} key={permprice._id} language={this.props.language} />;
        })
    }

    otherList() {
        return this.state.prices.slice(25, 29).map(otherprice => {
            return <OtherPriceFunction other={otherprice} deletePrice={this.deletePrice} key={otherprice._id} language={this.props.language} />;
        })
    }

    render() {
        return (
            <div class="price_background">
                    <Sline />
                <div class="pricePad">
                        <Row type="flex" justify="center">
                        <Col span={10} order={1}>
                            <div className="priceList">
                                    <h2>CUT</h2>
                                    {this.cutList()}
                                </div>
                        </Col>
                        <Col span={10} order={2}>
                                <div className="priceList">
                                    <h2>COLOUR</h2>
                                    {this.colourList()}
                                </div>
                        </Col>
                        <Col span={10} order={3}>
                            <div className="priceList">
                                    <h2>PERM</h2>
                                    {this.permList()}
                                </div>
                        </Col>
                        <Col span={10} order={4}>
                            <div className="priceList">
                                    <h2>Other</h2>
                                    {this.otherList()}
                                </div>
                        </Col>
                    </Row>  
                </div>
                    <Sline />
            </div >
        )
    }
}
