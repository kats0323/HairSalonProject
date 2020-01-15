import React, { Component } from 'react';
import axios from "axios";


export default class EditAbout extends Component {
    constructor(props) {
        super(props)

        this.onChangeEnIntroduction = this.onChangeEnIntroduction.bind(this);
        this.onChangeJaIntroduction = this.onChangeJaIntroduction.bind(this);
        this.onPhotoChange = this.onPhotoChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            en_introduction: "",
            ja_introduction: "",
            photo: ""
        }
    }

    componentDidMount() {

        axios.get('/about/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    en_introduction: response.data.en_introduction,
                    ja_introduction: response.data.ja_introduction,
                    photo: response.data.photo

                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeEnIntroduction(e) {
        this.setState({
            en_introduction: e.target.value
        })
    }
    onChangeJaIntroduction(e) {
        this.setState({
            ja_introduction: e.target.value
        })
        console.log(this.state.ja_introduction)
    }
    onPhotoChange(e) {
        console.log("PHOTOS", e.target.files[0])
        this.setState({
            ja_introduction: "test"
        })
        console.log("photo state", this.state.ja_introduction)
    }
    onSubmit(e) {
        e.preventDefault();

        const about = {
            en_introduction: this.state.en_introduction,
            ja_introduction: this.state.ja_introduction,
            photo: this.state.photo
        }
        console.log("TESTTTT ABOUT", about);
        axios.put('/about/update/' + this.props.match.params.id, about)
            .then(res => console.log(res.data));

        this.setState({
            en_introduction: "",
            ja_introduction: "",
            photo: ""
        })
        // window.location = '/admin/about';
    }
    render() {
        console.log(this.props.match.params.id)
        return (
            <div className="container" style={{ paddingLeft: "200px" }}>
                <div className="row">
                    <form onSubmit={this.onSubmit} enctype="multipart/form-data">
                        <div className="form-group">
                            <label>English Introduction: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="en_introduction"
                                value={this.state.en_introduction}
                                onChange={this.onChangeEnIntroduction}
                            />
                        </div>
                        <div className="form-group">
                            <label>Japanese Introduction: </label>
                            <input type="text"
                                required
                                className="form-control"
                                name="ja_introduction"
                                value={this.state.ja_introduction}
                                onChange={this.onChangeJaIntroduction}
                            />
                        </div>
                        <div className="form-group">
                            <input type="file" name="photo" onClick={this.onPhotoChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit" onSubmit={this.onSubmit}>Upload</button>
                        </div>
                    </form>
                </div>
            </div >
        )
    }

}