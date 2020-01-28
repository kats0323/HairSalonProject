import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Card } from "antd";
import "../../partials/edit.css"

const AboutFunction = props => (

    <div className="edit_container">
        <Card className="container" style={{ border: "3px solid #004d25", backgroundColor: "#a4d5bd", display: "flex", justifyContent: "center" }}>
            <p style={{ fontSize: "20px", color: "black" }}>English Introduction</p>
            <p className="admin_words">{props.about.en_introduction}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>自己紹介</p>
            <p>{props.about.ja_introduction}</p>
            <br />
            <img className="adminImg" src={props.about.photo} style={{ width: "500px", margin: "20px", height: "300px" }} alt="avatar" />
            <br />
            <button><Link to={"/admin/about/create/"}>Create</Link></button>
            <br />
            <br />
            <button><Link to={"/admin/about/edit/" + props.about._id}>Edit</Link></button>
            <br />
            <br />
            <button href="#" onClick={() => { props.deleteAbout(props.about._id) }}>Delete</button>
            <br />
            <br />
        </Card>
    </div>

)


class AboutList extends Component {
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
            return <AboutFunction about={currentabout} deleteAbout={this.deleteAbout} key={currentabout._id} />;
        })
    }

    render() {
        if (!this.props.isAuthenticated) {
            return (
                <div className='not-allowed'>
                    {/* ここだけ */}
                    <div className='cool-green-logo'>
                        <img src={process.env.PUBLIC_URL + '/img/GreenLogo.png'} alt="logo" style={{ height: "80px" }} />
                        {/* <hr className='logo-line'width="600" color="green" noshade></hr> */}
                    </div>
                    <h1 className='not-author'> NOT AUTHORISED</h1>
                    <p className='message_'>Plese logoin before you go into admin page </p>
                    <div className='dashboard_'>
                        <a href="/admin">GO TO DASHBOARD</a>
                    </div>
                </div>
            )
        } else {
            return (

                <div style={{ textAlign: "center" }}>

                    <h1 className="admin_title_page">About Admin Page</h1>
                    <br />
                    <h3>
                        {this.aboutList()}
                    </h3>

                </div>
            )
        }
    }
}


AboutList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(AboutList);
