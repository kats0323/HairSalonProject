import React, { Component } from 'react';
import axios from 'axios';
import './price.css'
import '../../common.css'
import { Card, Col, Row } from 'antd';



const CutPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <Col>
                <Card style={{ border: "none" }}>
                    <h2>{props.cut.price}</h2>
                    <h2 className="japanese">{props.cut.ja_course}</h2>
                    <br />
                    <h5 className="japanese">{props.cut.ja_detail}</h5>
                </Card>
            </Col >
        ) : (
                    <Card style={{ border: "none" }}>
                        <h2>{props.cut.price}</h2>
                        <h2 id="english">{props.cut.en_course}</h2>
                        <br />
                        <h5 id="english">{props.cut.en_detail}</h5>
                    </Card>
            )}
    </div>
)

const ColorPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <Col>
                <Card style={{ border: "none" }}>
                    <h2>{props.colour.price}</h2>
                    <h2 className="japanese">{props.colour.ja_course}</h2>
                    <br />
                    <h5 className="japanese">{props.colour.ja_detail}</h5>
                </Card>
            </Col >
        ) : (
                <Col>
                    <Card style={{ border: "none"}}>
                        <h2>{props.colour.price}</h2>
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
            <Col>
                <Card style={{ border: "none"}}>
                    <h2>{props.perm.price}</h2>
                    <h2 className="japanese">{props.perm.ja_course}</h2>
                    <br />
                    <h5 className="japanese">{props.perm.ja_detail}</h5>
                </Card>
            </Col >
        ) : (
                <Col>
                    <Card style={{ border: "none"}}>
                        <h2>{props.perm.price}</h2>
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
            <Col >
                <Card style={{ border: "none" }}>
                    <h2>{props.other.price}</h2>
                    <h2 className="japanese">{props.other.ja_course}</h2>
                    <br />
                    <h5 className="japanese">{props.other.ja_detail}</h5>
                </Card>
            </Col >
        ) : (
                <Col >
                    <Card style={{ border: "none" }}>
                        <h2>{props.other.price}</h2>
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
        const Line = ({ color }) => (
             <div class="style-line">
                <hr style={{ color: "green",border:"0.4px solid", width:"60%",}} /> 
            </div>
         );

        return (
            <div class="background">
                <Line />
                    <h1 style={{ textAlign: "center", paddingTop: "20px", paddingBottom: "20px" }}>Menu</h1>
                <div class="pricePad"> 
                    <h1 style={{ color: "green" }}>CUT</h1>
                    <Row  type="flex" justify="start">
                        <Col span={3}>{this.cutList()}</Col>
                    </Row>
                    <h1 style={{ color: "green"}}>COLOUR</h1>
                    {this.colourList()}
                    <h1 style={{ color: "green"}}>PERM</h1>
                    {this.permList()}
                    <h1 style={{ color: "green" }}>OTHER</h1>
                    {this.otherList()}
                </div>
            </div >
        )
    }
}
