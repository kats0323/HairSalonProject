import React, { Component } from 'react';
import axios from "axios";


export default class CreatePrice extends Component {
    constructor(props) {
        super(props)

        this.onChangeCourse = this.onChangeCourse.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            course: "",
            price: ""
        }
    }
    onChangeCourse(e) {
        this.setState({
            course: e.target.value
        })
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const price = {
            course: this.state.course,
            price: this.state.price
        }

        console.log(price);

        axios.post('http://localhost:5000/prices/add', price)
            .then(res => console.log(res.data));

        this.setState({
            course: "",
            price: ""
        })
        window.location = "/admin/prices"

    }
    render() {
        return (
            <div style={{ paddingLeft: "200px" }}>
                <h3>Create New Price</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Course: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.course}
                            onChange={this.onChangeCourse}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Price" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}