import React, { Component } from 'react';
import axios from 'axios';
import './price.css'
import '../../common.css'
import { Row, Col } from 'antd';


const Sline = ({ color }) => (
    <div className="style-line">
        <hr style={{ color: "green", border: "0.4px solid", width: "60%", }} />
    </div>
);



const CutPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <div>
                <div className="pricePadding"> 
                {props.cut.ja_course && <h3 className="japanese">{props.cut.ja_course}</h3>}
                {props.cut.ja_price && <h4>{props.cut.ja_detail}</h4>}
                {props.cut.ja_detail && <h5 className="japanese">{props.cut.ja_detail}</h5>}
                </div>
            </div>
        ) : (
                <div>
                    <div className="pricePadding"> 
                    {props.cut.en_course && <h3 id="english">{props.cut.en_course}</h3 >}
                    {props.cut.en_price && <h4>{props.cut.en_price}</h4>}
                    {props.cut.en_detail && <h5 id="english">{props.cut.en_detail}</h5>}
                    </div>
                </div>
            )}
    </div>
)

const ColorPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <div>
                <div className="pricePadding"> 
                {props.colour.ja_course && <h3 className="japanese">{props.colour.ja_course}</h3>}
                {props.colour.ja_price && <h4>{props.colour.ja_price}</h4>}
                {props.colour.ja_detail && <h5 className="japanese">{props.colour.ja_detail}</h5>}
                </div>
            </div>
        ) : (
                <div>
                    <div className="pricePadding"> 
                    {props.colour.en_course && <h3 id="english">{props.colour.en_course}</h3>}
                    {props.colour.en_price && <h4>{props.colour.en_price}</h4>}
                    {props.colour.en_detail && <h5 id="english">{props.colour.en_detail}</h5>}
                    </div>
                </div>
            )}
    </div>
)

const PermPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <div>
                <div className="pricePadding"> 
                {props.perm.ja_course && <h3 className="japanese">{props.perm.ja_course}</h3>}
                {props.perm.ja_price && <h4>{props.perm.ja_price}</h4>}
                {props.perm.ja_detail && <h5 className="japanese">{props.perm.ja_detail}</h5>}
                </div>
            </div>
        ) : (
            <div>
                <div className="pricePadding"> 
                {props.perm.en_course && <h3 id="english">{props.perm.en_course}</h3>}
                {props.perm.en_price && <h4>{props.perm.en_price}</h4>}
                {props.perm.en_detail && <h5 id="english">{props.perm.en_detail}</h5>}
                </div>
            </div>
            )}
    </div>
)

const OtherPriceFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <div>
                <div className="pricePadding">
                {props.other.ja_price && <h3>{props.other.ja_price}</h3>}
                {props.other.ja_course && <h4 className="japanese">{props.other.ja_course}</h4>}
                {props.other.ja_detail && <h5 className="japanese">{props.other.ja_detail}</h5>}
                </div>
            </div>
        ) : (
            <div>
                <div className="pricePadding"> 
                {props.other.en_course && <h3 className="english">{props.other.en_course}</h3>}
                {props.other.en_price && <h4>{props.other.en_price}</h4>}
                {props.other.en_detail && <h5 className="english">{props.other.en_detail}</h5>}
                </div>
            </div>
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
