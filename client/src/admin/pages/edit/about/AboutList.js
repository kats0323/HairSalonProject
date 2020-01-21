import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'

const AboutFunction = props => (
    <tr>
        <h2>{props.about.en_introduction}</h2>
        <h4>{props.about.ja_introduction}</h4>
        <br />
        <img src={props.about.photo} style={{ width: "500px", margin: "20px", height: "300px" }} alt="avatar" />
        <td>
            <Link to={"/admin/about/edit/" + props.about._id}>edit</Link> |    <button href="#" onClick={() => { props.deleteAbout(props.about._id) }}>delete</button>
        </td>

    </tr >
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
                <div>
                    <h1> NOT AUTHORISED</h1>
                    <a href="/admin">GO TO DASHBOARD</a>
                </div>
            )
        } else {
            return (

                <div>

                    <h1>About</h1>
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
