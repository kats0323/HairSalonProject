import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './price.css'
import '../../common.css'



const Sline = ({ color }) => (
    <div className="style-line">
        <hr style={{ color: "green", border: "0.4px solid", width: "60%", }} />
    </div>
);


export default class Price extends Component {


    render() {
        return (
            <div class="price_background">
                <div className="menu_price container">
                    <Link to="/services/cut">
                        <h3 className="menu_title">CUT</h3>
                        <div className="menu_cut_img">
                            <img src={process.env.PUBLIC_URL + '/img/_image12.jpeg'} alt="Cut" style={{ height: "80px" }} />
                            <img src={process.env.PUBLIC_URL + '/img/more_info.jpg'} alt="" class="active_cut"></img>
                        </div>
                    </Link>

                    <Link to="/services/color">
                        <h3 className="menu_title">COLOR</h3>
                        <div className="menu_color_img">

                            <img src={process.env.PUBLIC_URL + '/img/_image7.jpeg'} alt="Color" />
                            <img src={process.env.PUBLIC_URL + '/img/more_info.jpg'} alt="" class="active_color"></img>
                        </div>
                    </Link>

                    <Link to="/services/perm">
                        <h3 className="menu_title">PERM & OTHER</h3>
                        <div className="menu_perm_img" >
                            <img src={process.env.PUBLIC_URL + '/img/_image8.jpeg'} alt="Perm" />
                            <img src={process.env.PUBLIC_URL + '/img/more_info.jpg'} alt="" class="active_perm"></img>
                        </div>
                    </Link>

                </div>
                <Sline />
            </div >
        )
    }
}
