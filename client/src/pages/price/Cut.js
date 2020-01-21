import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './price.css'
import axios from 'axios';


const Sline = ({ color }) => (
    <div className="style-line">
        <hr style={{ color: "green", border: "0.4px solid", width: "60%", }} />
    </div>
);

const CutFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <div>
                <div className="pricePadding">
                    {props.cuts.ja_course && <h3 className="japanese">{props.cuts.ja_course}</h3>}
                    {props.cuts.ja_price && <h4>{props.cuts.ja_detail}</h4>}
                    {props.cuts.ja_detail && <h5 className="japanese">{props.cuts.ja_detail}</h5>}
                </div>
            </div>
        ) : (
                <div>
                    <div className="pricePadding">
                        {props.cuts.en_course && <h3 id="english">{props.cuts.en_course}</h3 >}
                        {props.cuts.en_price && <h4>{props.cuts.en_price}</h4>}
                        {props.cuts.en_detail && <h5 id="english">{props.cuts.en_detail}</h5>}
                    </div>
                </div>
            )}
    </div>
)



export default class CutList extends Component {
    constructor(props) {
        super(props);

        this.state = { cuts: [] };
    }

    componentDidMount() {
        axios.get('/cut/')
            .then(response => {
                this.setState({ cuts: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }


    cutList() {
        return this.state.cuts.map(currentcut => {
            return <CutFunction cuts={currentcut} deleteCut={this.deleteCut} key={currentcut._id} />;
        })
    }

    render() {
        return (
            <div class="price_background">
                <Sline />
                <div >
                    <div className="priceList">
                        <h2>CUT</h2>
                        {this.cutList()}
                    </div>
                </div>
                <Link to="/prices"><button>MENU</button></Link>
                <Sline />
            </div >
        )
    }
}