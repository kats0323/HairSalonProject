import React, { Component } from "react";

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "Hair Cut",
            price: "$20"

        }
    }
    render() {
        return (
            <div>
                <h1>Price</h1>
                <h2>{this.state.title}</h2>
                <h2>{this.state.price}</h2>
            </div>
        );
    };
};

export default Contact;