import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import "../../partials/edit.css"
import { Card } from "antd";


const PhotoFunction = props => (
    <div className="edit_container">
        <Card className="container" style={{ border: "3px solid #004d25", backgroundColor: "#a4d5bd", display: "flex", justifyContent: "center" }}>

            <img className="adminImg" src={props.photos.photo} style={{ width: "500px", margin: "20px", height: "300px" }} alt="photo_ga" />
            <br />
            <br />
            <button href="#" onClick={() => { props.deletePhoto(props.photos._id) }}>delete</button>
            <br />
            <br />
        </Card>
    </div>
)




class PhotoList extends Component {
    constructor(props) {
        super(props);

        this.deletePhoto = this.deletePhoto.bind(this)
        this.state = { photos: [] };
    }

    componentDidMount() {
        axios.get('/photos/')
            .then(response => {
                this.setState({ photos: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deletePhoto(id) {
        axios.delete('/photos/' + id)
            .then(response => { console.log(response.data) });

        this.setState({
            photos: this.state.photos.filter(el => el._id !== id)
        })
    }



    photoList() {
        return this.state.photos.map(currentphoto => {
            return <PhotoFunction photos={currentphoto} key={currentphoto._id} deletePhoto={this.deletePhoto} />;
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
                    <h3>Photo Gallery</h3>
                    <br />
                    <button><Link to={"/admin/blogs/create/"}>Create</Link></button>
                    <br />
                    {this.photoList()}
                    <button><Link to={"/admin/"}>Admin Page</Link></button>
                </div>
            )
        }
    }
}
PhotoList.propTypes = {
    isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps)(PhotoList);

