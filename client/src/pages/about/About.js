import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import './About.css'
import Footer from '../partials/_footer'


const AboutFunction = props => (
    <div>
        {props.language == "Japanese" ? (
            <div>
                <p>{props.about.ja_introduction}</p>
                <img src={props.about.photo} style={{ width: "500px", margin: "20px", height: "300px" }} />
            </div>
        ) : (
                <div>
                    <p>{props.about.en_introduction}</p>
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
        const Line = ({ color }) => (
            <div class="style-line">
               <hr style={{ color: "green",border:"0.4px solid", width:"100%",}} /> 
           </div>
        );
        return (
            <div>
            
                <div className="aboutPad">
                 <Line />
                    <Row>
                        <Col>
                        <h1 style={{textAlign:"center"}}>About</h1>
                            <h3>
                            {this.aboutList()}
                        </h3>
                        </Col>
                    </Row>
                    <Line />
                </div>
                <Footer />
            </div>

        )
    }
}