import React, { Component } from 'react';

import axios from 'axios';


const PermFunction = props => (
    <tr>
        <td id="japanese">{props.perms.ja_course}</td>
        <td id="english">{props.perms.en_course}</td>
        <td>{props.perms.ja_price}</td>
        <td>{props.perms.en_price}</td>
        <td id="japanese">{props.perms.ja_detail}</td>
        <td id="english">{props.perms.en_detail}</td>
        <td>
            <button href="#" onClick={() => { props.deletePerm(props.perms._id) }}>delete</button>
        </td>
    </tr>
)


export default class PermList extends Component {
    constructor(props) {
        super(props);

        this.deletePerm = this.deletePerm.bind(this)

        this.state = { perms: [] };
    }

    componentDidMount() {
        axios.get('/perm/')
            .then(response => {
                this.setState({ perms: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePerm(id) {
        axios.delete('/perm/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            perms: this.state.perms.filter(el => el._id !== id)
        })
    }

    permList() {
        return this.state.perms.map(currentperm => {
            return <PermFunction perms={currentperm} deletePerm={this.deletePerm} key={currentperm._id} />;
        })
    }

    render() {
        return (
            <div >
                <h3>Perm List</h3>
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
                        {this.permList()}
                    </tbody>
                </table>
            </div>
        )
    }
}