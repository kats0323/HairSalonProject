import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePhoto extends Component {

    constructor(props) {
        super(props);

        this.onPhotoChange = this.onPhotoChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            photo: ''
        }
    }

    onPhotoChange(e) {
        this.setState({ photo: e.target.files[0] })
    }
    onSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('photo', this.state.photo)
        axios.post("/photos/add", formData, {
        }).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className="container" style={{ paddingLeft: "200px" }}>
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={this.onPhotoChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}