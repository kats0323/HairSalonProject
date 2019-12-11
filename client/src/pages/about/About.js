import React, { Component } from 'react';
import axios from 'axios';

const AboutFunction = props => (
    <tr>
        <td>{props.about.introduction}</td>
        <td>{props.about.image}</td>
    </tr>
)


export default class About extends Component {
    constructor(props) {
        super(props);

        this.deleteAbout = this.deleteAbout.bind(this)

        this.state = { about: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/about/')
            .then(response => {
                this.setState({ about: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteAbout(id) {
        axios.delete('http://localhost:5000/about/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            about: this.state.about.filter(el => el._id !== id)
        })
    }

    aboutList() {
        return this.state.about.map(currentabout => {
            return <AboutFunction about={currentabout} deleteAbout={this.deleteAbout} key={currentabout._id} />;
        })
    }

    render() {
        return (
            <div style={{ paddingLeft: "350px" }}>
                <h1>About</h1>
                <br />
                <h3>
                    {this.aboutList()}
                </h3>

            </div>
        )
    }
}