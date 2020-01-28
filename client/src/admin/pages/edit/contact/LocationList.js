import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { Card } from "antd";
import "../../partials/edit.css"

const LocationFunction = props => (
    <div className="edit_container">
        <Card className="container" style={{ border: "3px solid #004d25", backgroundColor: "#a4d5bd", display: "flex", justifyContent: "center" }}>
            <div className="word_position">
                <p style={{ fontSize: "20px", color: "black" }}>Street</p>
                <p className="admin_words">{props.locations.street}</p>
                <br />
                <p style={{ fontSize: "20px", color: "black" }}>Suburb</p>
                <p className="admin_words">{props.locations.suburb}</p>
                <br />
                <p style={{ fontSize: "20px", color: "black" }}>State</p>
                <p className="admin_words">{props.locations.state}</p>
                <br />
                <p style={{ fontSize: "20px", color: "black" }}>Post Code</p>
                <p className="admin_words">{props.locations.post_code}</p>
                <br />
                <p style={{ fontSize: "20px", color: "black" }}>Shop Information 1</p>
                <p className="admin_words">{props.locations.shop_info_1_en}</p>
                <br />
                <p style={{ fontSize: "20px", color: "black" }}>情報１</p>
                <p className="admin_words">{props.locations.shop_info_1_ja}</p>
                <br />
                <p style={{ fontSize: "20px", color: "black" }}>Shop Information 2</p>
                <p className="admin_words">{props.locations.shop_info_2_en}</p>
                <br />
                <p style={{ fontSize: "20px", color: "black" }}>情報２</p>
                <p className="admin_words">{props.locations.shop_info_2_ja}</p>
                <br />
                <p style={{ fontSize: "20px", color: "black" }}>Extra Information</p>
                <p className="admin_words">{props.locations.shop_extra_info_en}</p>
                <br />
                <p style={{ fontSize: "20px", color: "black" }}>エクストラ情報</p>
                <p className="admin_words">{props.locations.shop_extra_info_ja}</p>
                <br />
            </div>
            <img className="adminImg" src={props.locations.shop_photo1} style={{ width: "500px", margin: "20px", height: "300px" }} alt="photo_shop" />
            <br />
            <p style={{ fontSize: "20px", color: "black" }}>Google map</p>
            <p className="admin_words">{props.locations.google}</p>
            <br />
            <iframe src={props.locations.google} title="google" class="iframe_size"></iframe>
            <br />
            <button> <Link to={"/admin/locations/edit/" + props.locations._id}>Edit</Link></button>
            <br />
            <br />
            <button href="#" onClick={() => { props.deleteLocation(props.locations._id) }}>Delete</button>
            <br />
        </Card>
    </div>

)


class LocationList extends Component {
    constructor(props) {
        super(props);

        this.deleteLocation = this.deleteLocation.bind(this)

        this.state = { locations: [] };
    }

    componentDidMount() {
        axios.get('/locations/')
            .then(response => {
                this.setState({ locations: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteLocation(id) {
        axios.delete('/locations/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            locations: this.state.locations.filter(el => el._id !== id)
        })
    }

    locationList() {
        return this.state.locations.map(currentlocation => {
            return <LocationFunction locations={currentlocation} deleteLocation={this.deleteLocation} key={currentlocation._id} />;
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
                    <h1>Location</h1>
                    <br />
                    <button><Link to={"/admin/locations/create/"}>Create</Link></button>
                    <br />
                    <br />
                    {this.locationList()}
                </div>
            )
        }
    }
}

LocationList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(LocationList);
