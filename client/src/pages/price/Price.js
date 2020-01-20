import React, { Component } from 'react';
import axios from 'axios';
import './price.css'
import '../../common.css'
import { Card, Col } from 'antd';



const CutPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                    <h2>{props.cut.ja_price}</h2>
                    <h2 className="japanese">{props.cut.ja_course}</h2>
                    <br />
                    <h5 className="japanese">{props.cut.ja_detail}</h5>
                </Card>
            </Col >
        ) : (
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                    <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                        <h2>{props.cut.en_price}</h2>
                        <h2 id="english">{props.cut.en_course}</h2>
                        <br />
                        <h5 id="english">{props.cut.en_detail}</h5>
                    </Card>
                </Col >
            )}
    </div>
)

const ColorPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                    <h2>{props.colour.ja_price}</h2>
                    <h2 className="japanese">{props.colour.ja_course}</h2>
                    <br />
                    <h5 className="japanese">{props.colour.ja_detail}</h5>
                </Card>
            </Col >
        ) : (
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                    <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                        <h2>{props.colour.en_price}</h2>
                        <h2 id="english">{props.colour.en_course}</h2>
                        <br />
                        <h5 id="english">{props.colour.en_detail}</h5>
                    </Card>
                </Col >
            )}
    </div>
)

const PermPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                    <h2>{props.perm.ja_price}</h2>
                    <h2 className="japanese">{props.perm.ja_course}</h2>
                    <br />
                    <h5 className="japanese">{props.perm.ja_detail}</h5>
                </Card>
            </Col >
        ) : (
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                    <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                        <h2>{props.perm.en_price}</h2>
                        <h2 id="english">{props.perm.en_course}</h2>
                        <br />
                        <h5 id="english">{props.perm.en_detail}</h5>
                    </Card>
                </Col >
            )}
    </div>
)

const OtherPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                    <h2>{props.other.ja_price}</h2>
                    <h2 className="japanese">{props.other.ja_course}</h2>
                    <br />
                    <h5 className="japanese">{props.other.ja_detail}</h5>
                </Card>
            </Col >
        ) : (
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                    <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                        <h2>{props.other.en_price}</h2>
                        <h2 id="english">{props.other.en_course}</h2>
                        <br />
                        <h5 id="english">{props.other.en_detail}</h5>
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
        return this.state.prices.slice(0, 9).map(cutprice => {

            return <CutPriceFunction cut={cutprice} deletePrice={this.deletePrice} key={cutprice._id} language={this.props.language} />;
        })
    }

    colourList() {
        return this.state.prices.slice(10, 21).map(colourprice => {
            return <ColorPriceFunction colour={colourprice} deletePrice={this.deletePrice} key={colourprice._id} language={this.props.language} />;
        })
    }

    permList() {
        return this.state.prices.slice(22, 26).map(permprice => {
            return <PermPriceFunction perm={permprice} deletePrice={this.deletePrice} key={permprice._id} language={this.props.language} />;
        })
    }

    otherList() {
        return this.state.prices.slice(27, 31).map(otherprice => {
            return <OtherPriceFunction other={otherprice} deletePrice={this.deletePrice} key={otherprice._id} language={this.props.language} />;
        })
    }

    render() {

        return (
            <div class="background">
                <h1 style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>Menu</h1>
                <h1 style={{ color: "red", textAlign: "center" }}>CUT</h1>
                {this.cutList()}
                <h1 style={{ color: "red", textAlign: "center" }}>COLOUR</h1>
                {this.colourList()}
                <h1 style={{ color: "red", textAlign: "center" }}>PERM</h1>
                {this.permList()}
                <h1 style={{ color: "red", textAlign: "center" }}>OTHER</h1>
                {this.otherList()}
            </div >
        )
    }
}
