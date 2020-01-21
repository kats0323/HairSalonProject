import React, { Component } from 'react';

import axios from 'axios';


const ColorFunction = props => (
    <tr>
        <td id="japanese">{props.colors.ja_course}</td>
        <td id="english">{props.colors.en_course}</td>
        <td>{props.colors.ja_price}</td>
        <td>{props.colors.en_price}</td>
        <td id="japanese">{props.colors.ja_detail}</td>
        <td id="english">{props.colors.en_detail}</td>
        <td>
            <button href="#" onClick={() => { props.deleteColor(props.colors._id) }}>delete</button>
        </td>
    </tr>
)


export default class ColorList extends Component {
    constructor(props) {
        super(props);

        this.deleteColor = this.deleteColor.bind(this)

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

    deleteColor(id) {
        axios.delete('/color/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            colors: this.state.colors.filter(el => el._id !== id)
        })
    }

    colorList() {
        return this.state.colors.map(currentcolor => {
            return <ColorFunction colors={currentcolor} deleteColor={this.deleteColor} key={currentcolor._id} />;
        })
    }

    render() {
        return (
            <div >
                <h3>Color List</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Japanese Course</th>
                            <th>English Course</th>
                            <th>Japanese Price</th>
                            <th>English Price</th>
                            <th>Japanese Detail</th>
                            <th>English Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.colorList()}
                    </tbody>
                </table>
            </div>
        )
    }
}