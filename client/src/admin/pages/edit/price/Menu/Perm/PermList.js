import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from "antd";
import "../../../../partials/edit.css"

const PermFunction = props => (
    <div>
        {props.perms.ja_course !== "" ? (
            <div className="edit_container">
                <Card className="container" style={{ border: "3px solid #004d25", backgroundColor: "#a4d5bd", display: "flex", justifyContent: "center" }}>
                    <p style={{ fontSize: "20px", color: "black" }}>コース</p>
                    <p className="admin_words">{props.perms.ja_course}</p>
                    <br />
                    <p style={{ fontSize: "20px", color: "black" }}>Course</p>
                    <p className="admin_words">{props.perms.en_course}</p>
                    <br />
                    <p style={{ fontSize: "20px", color: "black" }}>プライス</p>
                    <p className="admin_words">{props.perms.ja_price}</p>
                    <br />
                    <p style={{ fontSize: "20px", color: "black" }}>Price</p>
                    <p className="admin_words">{props.perms.en_price}</p>
                    <br />
                    <p style={{ fontSize: "20px", color: "black" }}>詳細</p>
                    <p className="admin_words">{props.perms.ja_detail}</p>
                    <br />
                    <p style={{ fontSize: "20px", color: "black" }}>Detail</p>
                    <p className="admin_words">{props.perms.en_detail}</p>
                    <br />
                    <br />
                    <br />
                    <button> <Link to={"/admin/services/color/edit/" + props.perms._id}>Edit</Link></button>
                    <br />
                    <br />
                    <button href="#" onClick={() => { props.deletePerm(props.perms._id) }}>Delete</button>
                    <br />
                </Card>
            </div>
        ) : (

                <div className="edit_container">
                    <Card className="container" style={{ border: "3px solid #004d25", backgroundColor: "#e6bfb2", display: "flex", justifyContent: "center" }}>
                        <p style={{ fontSize: "20px", color: "black" }}>コース</p>
                        <p className="admin_words">{props.perms.ja_course}</p>
                        <br />
                        <p style={{ fontSize: "20px", color: "black" }}>Course</p>
                        <p className="admin_words">{props.perms.en_course}</p>
                        <br />
                        <p style={{ fontSize: "20px", color: "black" }}>プライス</p>
                        <p className="admin_words">{props.perms.ja_price}</p>
                        <br />
                        <p style={{ fontSize: "20px", color: "black" }}>Price</p>
                        <p className="admin_words">{props.perms.en_price}</p>
                        <br />
                        <p style={{ fontSize: "20px", color: "black" }}>詳細</p>
                        <p className="admin_words">{props.perms.ja_detail}</p>
                        <br />
                        <p style={{ fontSize: "20px", color: "black" }}>Detail</p>
                        <p className="admin_words">{props.perms.en_detail}</p>
                        <br />
                        <br />
                        <br />
                        <button> <Link to={"/admin/services/color/edit/" + props.perms._id}>Edit</Link></button>
                        <br />
                        <br />
                        <button href="#" onClick={() => { props.deletePerm(props.perms._id) }}>Delete</button>
                        <br />
                    </Card>
                </div>
            )}
    </div>
)


class PermList extends Component {
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
                    <h3>Perm List</h3>
                    <br />
                    <button><Link to={"/admin/services/perm/create/"}>Create</Link></button>
                    <br />
                    {this.permList()}

                </div>
            )
        }
    }
}

PermList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(PermList);