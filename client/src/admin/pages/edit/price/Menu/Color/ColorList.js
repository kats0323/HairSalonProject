import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card } from "antd";
import "../../../../partials/edit.css"


const ColorFunction = props => (
    <div className="edit_container">
        <Card className="container" style={{ border: "3px solid #004d25", backgroundColor: "#a4d5bd", display: "flex", justifyContent: "center" }}>
            <p style={{ fontSize: "20px", color: "black" }}>コース</p>
            <p className="admin_words">{props.colors.ja_course}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>Course</p>
            <p className="admin_words">{props.colors.en_course}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>プライス</p>
            <p className="admin_words">{props.colors.ja_price}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>Price</p>
            <p className="admin_words">{props.colors.en_price}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>詳細</p>
            <p className="admin_words">{props.colors.ja_detail}</p>
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>Detail</p>
            <p className="admin_words">{props.colors.en_detail}</p>
            <br />
            <br />
            <br />
            <button> <Link to={"/admin/services/color/edit/" + props.colors._id}>Edit</Link></button>
            <br />
            <br />
            <button href="#" onClick={() => { props.deleteColor(props.colors._id) }}>Delete</button>
            <br />
        </Card>
    </div>

)




class ColorList extends Component {
    constructor(props) {
        super(props);

        this.deleteColor = this.deleteColor.bind(this)

        this.state = { colors: [] };
    }

    componentDidMount() {
        axios.get('/color/')
            .then(response => {
                this.setState({ colors: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteColor(id) {
        axios.delete('/color/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            colors: this.state.colors.filter(el => el._id !== id)
        })
    }

    colorList() {
        return this.state.colors.map(currentcolor => {
            return <ColorFunction colors={currentcolor} deleteColor={this.deleteColor} key={currentcolor._id} />;
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
                    <h3>Color List</h3>
                    <br />
                    <button><Link to={"/admin/services/color/create/"}>Create</Link></button>
                    <br />

                    {this.colorList()}
                </div>
            )
        }
    }
}

ColorList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(ColorList);