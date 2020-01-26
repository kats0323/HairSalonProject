import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from "antd";
import "../../../../partials/edit.css"

const CutFunction = props => (
    <div className="edit_container">
        <Card className="container" style={{ border: "3px solid #004d25", backgroundColor: "#a4d5bd", display: "flex", justifyContent: "center" }}>
            <p style={{ fontSize: "20px", color: "black" }}>コース</p>
            <p className="admin_words">{props.cuts.ja_course}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>Course</p>
            <p className="admin_words">{props.cuts.en_course}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>プライス</p>
            <p className="admin_words">{props.cuts.ja_price}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>プライス</p>
            <p className="admin_words">{props.cuts.ja_price}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>詳細</p>
            <p className="admin_words">{props.cuts.ja_detail}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>Detail</p>
            <p className="admin_words">{props.cuts.en_detail}</p>
            <br />
            <br />
            <br />
            <button> <Link to={"/admin/services/cut/edit/" + props.cuts._id}>Edit</Link></button>
            <br />
            <br />
            <button href="#" onClick={() => { props.deleteCut(props.cuts._id) }}>Delete</button>
            <br />
        </Card>
    </div>
)


class CutList extends Component {
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
                        <a href="/admin">GO TO LOGIN PAGE</a>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={{ textAlign: "center" }}>
                    <h3>Cut List</h3>
                    <br />
                    <button><Link to={"/admin/services/cut/create/"}>Create</Link></button>
                    <br />
                    {this.cutList()}

                </div>
            )
        }
    }
}

CutList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(CutList);