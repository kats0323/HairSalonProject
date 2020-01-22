import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './price.css'
import axios from 'axios';


const Sline = ({ color }) => (
    <div className="style-line">
        <hr style={{ color: "green", border: "0.4px solid", width: "60%", }} />
    </div>
);

const LineDot = ({ color }) =>(
    <div className='line-dot'><span></span></div>
);

const ColorFunction = props => (
    <div className="price_background">
        {props.language === "Japanese" ? (
            <div>
                <div className="pricePadding">
                   
                        {props.colors.ja_course && <h3 className="japanese">{props.colors.ja_course}</h3>}
                        {props.colors.ja_price && <h4>{props.colors.ja_detail}</h4>}
                        {props.colors.ja_detail && <h5 className="japanese">{props.colors.ja_detail}</h5>}
                    <LineDot/>
                </div>
            </div>
        ) : (
                <div>
                    <div className="pricePadding">
                      
                            {props.colors.en_course && <h3 id="english">{props.colors.en_course}</h3 >}
                            {props.colors.en_price && <h4>{props.colors.en_price}</h4>}
                            {props.colors.en_detail && <h5 id="english">{props.colors.en_detail}</h5>}
                        <LineDot/>
                    </div>
                </div>
            )}
    </div>
)



export default class ColorList extends Component {
    constructor(props) {
        super(props);
        this.state = { colors: [] };
    }

    componentDidMount() {
        axios.get('/color/')
            .then(response => {
                this.setState({ colors: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }



    colorList() {
        return this.state.colors.map(currentcolor => {
            return <ColorFunction colors={currentcolor} key={currentcolor._id} />;
        })
    }

    render() {
        return (
            <div class="price_background">
                <Sline />
                <div class="pricePad">
                    <div className="priceList">
                        <h2 className='title-color'>COLOR</h2>
                        <lineDot>
                            {this.colorList()}
                        </lineDot>
                        <Link to="/prices" className='title-color-menu'>MENU</Link>
                    </div>
                </div>
                <Sline />
            </div >
        )
    }
}