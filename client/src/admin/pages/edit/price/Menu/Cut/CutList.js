import React, { Component } from 'react';

import axios from 'axios';


const CutFunction = props => (
    <tr>
        <td id="japanese">{props.cuts.ja_course}</td>
        <td id="english">{props.cuts.en_course}</td>
        <td>{props.cuts.ja_price}</td>
        <td>{props.cuts.en_price}</td>
        <td id="japanese">{props.cuts.ja_detail}</td>
        <td id="english">{props.cuts.en_detail}</td>
        <td>
            <button href="#" onClick={() => { props.deleteCut(props.cuts._id) }}>delete</button>
        </td>
    </tr>
)


export default class CutList extends Component {
    constructor(props) {
        super(props);

        this.deleteCut = this.deleteCut.bind(this)

        this.state = { cuts: [] };
    }

    componentDidMount() {
        axios.get('/cut/')
            .then(response => {
                this.setState({ cuts: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCut(id) {
        axios.delete('/cut/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            cuts: this.state.cuts.filter(el => el._id !== id)
        })
    }

    cutList() {
        return this.state.cuts.map(currentcut => {
            return <CutFunction cuts={currentcut} deleteCut={this.deleteCut} key={currentcut._id} />;
        })
    }

    render() {
        return (
            <div >
                <h3>Cut List</h3>
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
                        {this.cutList()}
                    </tbody>
                </table>
            </div>
        )
    }
}