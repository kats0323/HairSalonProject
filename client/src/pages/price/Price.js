import React, { Component } from 'react';
import axios from 'axios';
import './price.css'
import '../../common.css'
import { Card, Col } from 'antd';


const Sline = ({ color }) => (
    <div class="style-line">
        <hr style={{ color: "green", border: "0.4px solid", width: "60%", }} />
    </div>
);
const Line = ({ color }) => (
    <div class="style-line">
        <hr style={{ color: "green", border: "0.4px solid", width: "100%", }} />
    </div>
);


const CutPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <div>
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                    <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                        {props.cut.ja_price && <Line />}
                        {props.cut.ja_course && <h3 className="japanese">{props.cut.ja_course}</h3>}
                        {props.cut.ja_price && <h4>{props.cut.ja_detail}</h4>}
                        {props.cut.ja_detail && <h5 className="japanese">{props.cut.ja_detail}</h5>}
                    </Card>
                </Col >
            </div>
        ) : (
                <div>
                    <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                        <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                            {props.cut.en_price && <Line />}
                            {props.cut.en_course && <h3 id="english">{props.cut.en_course}</h3 >}
                            {props.cut.en_price && <h4>{props.cut.en_price}</h4>}
                            {props.cut.en_detail && <h5 id="english">{props.cut.en_detail}</h5>}
                        </Card>
                    </Col>
                </div>
            )}
    </div>
)

const ColorPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <div>
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                    <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                        {props.colour.ja_price && <Line />}
                        {props.colour.ja_course && <h3 className="japanese">{props.colour.ja_course}</h3>}
                        {props.colour.ja_price && <h4>{props.colour.ja_price}</h4>}
                        {props.colour.ja_detail && <h5 className="japanese">{props.colour.ja_detail}</h5>}
                    </Card>
                </Col >
            </div>
        ) : (
                <div>
                    <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                        <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                            {props.colour.en_price && <Line />}
                            {props.colour.en_course && <h3 id="english">{props.colour.en_course}</h3>}
                            {props.colour.en_price && <h4>{props.colour.en_price}</h4>}
                            {props.colour.en_detail && <h5 id="english">{props.colour.en_detail}</h5>}
                        </Card>
                    </Col >
                </div>
            )}
    </div>
)

const PermPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <div>
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                    <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                        {props.perm.ja_price && <Line />}
                        {props.perm.ja_course && <h3 className="japanese">{props.perm.ja_course}</h3>}
                        {props.perm.ja_price && <h4>{props.perm.ja_price}</h4>}
                        {props.perm.ja_detail && <h5 className="japanese">{props.perm.ja_detail}</h5>}
                    </Card>
                </Col >
            </div>
        ) : (
                <div>
                    <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                        <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                            {props.perm.en_price && <Line />}
                            {props.perm.en_course && <h3 id="english">{props.perm.en_course}</h3>}
                            {props.perm.en_price && <h4>{props.perm.en_price}</h4>}
                            {props.perm.en_detail && <h5 id="english">{props.perm.en_detail}</h5>}
                        </Card>
                    </Col >
                </div>
            )}
    </div>
)

const OtherPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                    {props.other.ja_price && <Line />}
                    {props.other.ja_price && <h3>{props.other.ja_price}</h3>}
                    {props.other.ja_course && <h4 className="japanese">{props.other.ja_course}</h4>}
                    {props.other.ja_detail && <h5 className="japanese">{props.other.ja_detail}</h5>}
                </Card>
            </Col >
        ) : (
                <Col style={{ display: "flex", flexDirection: "row", justifyContent: "center", color: "green" }}>
                    <Card style={{ border: "none", textAlign: "center", width: "600px" }}>
                        {props.other.en_price && <Line />}
                        {props.other.en_course && <h3 className="english">{props.other.en_course}</h3>}
                        {props.other.en_price && <h4>{props.other.en_price}</h4>}
                        {props.other.en_detail && <h5 className="english">{props.other.en_detail}</h5>}
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
                    <h2 style={{ color: "green", textAlign: "center" }}>CUT</h2>
                    {this.cutList()}
                    <h2 style={{ color: "green", textAlign: "center" }}>COLOUR</h2>
                    {this.colourList()}
                    <h2 style={{ color: "green", textAlign: "center" }}>PERM</h2>
                    {this.permList()}
                    <h2 style={{ color: "green", textAlign: "center" }}>OTHER</h2>
                    {this.otherList()}
                </div>
            </div >
        )
    }
}
