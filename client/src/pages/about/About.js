import React, { Component } from 'react';
import axios from 'axios';
import './About.css'
import Footer from '../partials/_footer'


const AboutFunction = props => (

    <div>
        {props.language === "Japanese" ? (

            <div className="about_position">
                <div className="aboutImageCenter">
                    <img src={props.about.photo} className="about_img" alt="avatar" />
                </div>
                <h3 className="about_intro">{props.about.ja_introduction}</h3>
            </div>
        ) : (
                <div className="about_position">
                <div className="aboutImageCenter">
                    <img src={props.about.photo} className="about_img" alt="avatar" />
                </div>
                    <h3 className="about_intro">{props.about.en_introduction}</h3>
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
            <div>
                <div className="aboutPad">
                    <h1 style={{ textAlign: "center" }}>About Miho</h1>
                    {this.aboutList()}

                </div>
                <Footer />
            </div >

        )
    }
}