import React, { Component } from 'react';
import axios from 'axios';
import './About.style.css';


const AboutFunction = props => (
    <div>
        {props.language == "Japanese" ? (
            <div>
                <h2>{props.about.ja_introduction}</h2>
                <img src={props.about.photo} style={{ width: "500px", margin: "20px", height: "300px" }} />
            </div>
        ) : (
                <div>
                    <h2>{props.about.en_introduction}</h2>
                    <img src={props.about.photo} style={{ width: "500px", margin: "20px", height: "300px" }} />
                </div>
            )}
    </div>
)


export default class About extends Component {
    constructor(props) {
        super(props);
        this.deleteAbout = this.deleteAbout.bind(this)
        this.state = { about: [] };
    }

    componentDidMount() {
        axios.get('/about/')
            .then(response => {
                this.setState({ about: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteAbout(id) {
        axios.delete('/about/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            about: this.state.about.filter(el => el._id !== id)
        })
    }

    aboutList() {
        return this.state.about.map(currentabout => {
            return <AboutFunction about={currentabout} deleteAbout={this.deleteAbout} key={currentabout._id} language={this.props.language} />;
        })
    }

    render() {

        return (
            <div className='style-about'>
                <h1 className='about-title'>About</h1>
                <br />
                <h3>
                    {this.aboutList()}
                </h3>
            </div>
        )
    }
}