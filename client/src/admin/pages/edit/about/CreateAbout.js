import React, { Component } from 'react';
import axios from "axios";


export default class CreateAbout extends Component {
    constructor(props) {
        super(props)

        this.onChangeIntroduction = this.onChangeIntroduction.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            introduction: "",
            image: ""
        }
    }
    onChangeIntroduction(e) {
        this.setState({
            introduction: e.target.value
        })
    }
    onChangeImage(e) {
        this.setState({
            image: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const about = {
            introduction: this.state.introduction,
            image: this.state.image
        }

        console.log(about);

        axios.post('http://localhost:5000/about/add', about)
            .then(res => console.log(res.data));

        this.setState({
            introduction: "",
            image: ""
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
                        <label>Image: </label>
                        <input type="file"
                            required
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeImage}
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