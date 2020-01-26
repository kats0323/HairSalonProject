import React, { Component } from 'react';
import './price.css'
import { Link } from "react-router-dom";
import './price.css'
import axios from 'axios';



const Sline = ({ color }) => (
    <div className="style-line">
        <hr style={{ color: "green", border: "0.4px solid", width: "60%", }} />
    </div>
);


const LineDot = ({ color }) => (
    <div className='line-dot'><span></span></div>
);


const PermFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <div>
                <div className="pricePadding">
                    {props.perms.ja_course && <h3 className="japanese">{props.perms.ja_course}</h3>}
                    {props.perms.ja_price && <h4>{props.perms.ja_detail}</h4>}
                    {props.perms.ja_detail && <h5 className="japanese">{props.perms.ja_detail}</h5>}
                    <LineDot />
                </div>
            </div>
        ) : (
                <div>
                    <div className="pricePadding">
                        {props.perms.en_course && <h3 id="english">{props.perms.en_course}</h3 >}
                        {props.perms.en_price && <h4>{props.perms.en_price}</h4>}
                        {props.perms.en_detail && <h5 id="english">{props.perms.en_detail}</h5>}
                        <LineDot />
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
                    {props.other.ja_price && <h3 className="japanese">{props.other.ja_price}</h3>}
                    {props.other.ja_course && <h4 className="japanese">{props.other.ja_course}</h4>}
                    {props.other.ja_detail && <h5 className="japanese">{props.other.ja_detail}</h5>}
                    {props.other.ja_course !== "" ? (
                        <LineDot />
                    ) : (
                            console.log("")
                        )}
                </div>
            </div>
        ) : (
                <div>
                    <div className="pricePadding">
                        {props.other.en_course && <h3 className="english">{props.other.en_course}</h3>}
                        {props.other.en_price && <h4 className="english">{props.other.en_price}</h4>}
                        {props.other.en_detail && <h5 className="english">{props.other.en_detail}</h5>}
                        {props.other.en_course !== "" ? (
                            <LineDot />
                        ) : (
                                console.log("")
                            )}
                    </div>
                </div>
            )}
    </div>
)

export default class Perm extends Component {
    constructor(props) {
        super(props);
        this.state = { perms: [] };
    }

    componentDidMount() {
        axios.get('/perm/')
            .then(response => {
                this.setState({ perms: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    permList() {
        return this.state.perms.slice(5, 50).map(currentperm => {
            return <PermFunction perms={currentperm} key={currentperm._id} language={this.props.language} />;
        })
    }

    otherList() {
        return this.state.perms.slice(0, 5).map(otherprice => {
            return <OtherPriceFunction other={otherprice} key={otherprice._id} language={this.props.language} />;
        })
    }

    render() {
        return (
            <div class="price_background">
                <Sline />
                <div class="pricePad">
                    <div className="priceList">
                        <h2>PERM</h2>
                        {this.permList()}
                    </div>
                    <div className="priceList">
                        <h2>OTHER</h2>
                        {this.otherList()}
                    </div>
                    <Link to="/prices" className='title-color-perm'>MENU</Link>
                </div>
                <Sline />
            </div >
        )
    }
}