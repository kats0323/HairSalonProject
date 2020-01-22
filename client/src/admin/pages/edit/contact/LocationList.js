import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'

const LocationFunction = props => (
    <div>
        <h4>street</h4>
        {props.locations.street}
        <br />
        <h4>suburb</h4>
        {props.locations.suburb}
        <br />
        <h4>State</h4>
        {props.locations.state}
        <br />
        <h4>state</h4>
        {props.locations.post_code}
        location
        <h4>google</h4>
        <iframe src={props.locations.google} title="google"></iframe>
        <br />
        {props.locations.google}
        <br />
        <h4>shop_info_1_en</h4>
        {props.locations.shop_info_1_en}
        <br />
        <h4>shop_info_1_ja</h4>
        {props.locations.shop_info_1_ja}
        <br />
        <h4>shop_info_2_en</h4>
        {props.locations.shop_info_2_en}
        <br />
        <h4>shop_info_2_ja</h4>
        {props.locations.shop_info_2_ja}
        <br />
        <h4>shop_extra_info_en</h4>
        {props.locations.shop_extra_info_en}
        <br />
        <h4>shop_extra_info_ja</h4>
        {props.locations.shop_extra_info_ja}
        <br />
        <h4>shop_photo1</h4>
        <img src={props.locations.shop_photo1} style={{ width: "500px", margin: "20px", height: "300px" }} alt="shop_photo" />

        <Link to={"/admin/locations/edit/" + props.locations._id}>edit</Link> | <button href="#" onClick={() => { props.deleteLocation(props.locations._id) }}>delete</button>
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
                <div>
                    <h1>Location</h1>
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
