import React, { Component } from 'react';
import axios from "axios";


export default class EditPrice extends Component {
    constructor(props) {
        super(props)

        this.onChangeJaCourse = this.onChangeJaCourse.bind(this);
        this.onChangeEnCourse = this.onChangeEnCourse.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeJaDetail = this.onChangeJaDetail.bind(this);
        this.onChangeEnDetail = this.onChangeEnDetail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            ja_course: "",
            en_course: "",
            price: "",
            ja_detail: "",
            en_detail: ""
        }
    }

    componentDidMount() {

        axios.get('/prices/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    course: response.data.course,
                    price: response.data.price
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeJaCourse(e) {
        this.setState({
            ja_course: e.target.value
        })
    }
    onChangeEnCourse(e) {
        this.setState({
            en_course: e.target.value
        })
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }
    onChangeJaDetail(e) {
        this.setState({
            ja_detail: e.target.value
        })
    }
    onChangeEnDetail(e) {
        this.setState({
            en_detail: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const price = {
            ja_course: this.state.ja_course,
            en_course: this.state.en_course,
            price: this.state.price,
            ja_detail: this.state.ja_detail,
            en_detail: this.state.en_detail,
        }

        console.log(price);

        axios.post('/prices/update/' + this.props.match.params.id, price)
            .then(res => console.log(res.data));

        this.setState({
            ja_course: "",
            en_course: "",
            price: "",
            ja_detail: "",
            en_detail: ""
        })
        window.location = "/admin/prices"

    }
    render() {
        return (
            <div>
                <h3>Edit Price</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Japanese Course: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.ja_course}
                            onChange={this.onChangeJaCourse}
                        />
                    </div>
                    <div className="form-group">
                        <label>English Course: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.en_course}
                            onChange={this.onChangeEnCourse}
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
                        <label>Japanese Detail: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.ja_detail}
                            onChange={this.onChangeJaDetail}
                        />
                    </div>
                    <div className="form-group">
                        <label>English Detail: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.en_detail}
                            onChange={this.onChangeEnDetail}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Edit Price" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}