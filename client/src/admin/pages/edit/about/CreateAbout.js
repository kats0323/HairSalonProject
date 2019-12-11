import React, { Component } from 'react';
import axios from "axios";


export default class CreateAbout extends Component {
    constructor(props) {
        super(props)

        this.onChangeIntroduction = this.onChangeIntroduction.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            introduction: ""
        }
    }
    onChangeIntroduction(e) {
        this.setState({
            introduction: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const about = {
            introduction: this.state.introduction
        }

        console.log(about);

        axios.post('http://localhost:5000/about/add', about)
            .then(res => console.log(res.data));

        this.setState({
            introduction: ""
        })


    }
    render() {
        return (
            <div style={{ paddingLeft: "200px" }}>
                <h3>Create About</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Introduction: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.introduction}
                            onChange={this.onChangeIntroduction}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create About" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}