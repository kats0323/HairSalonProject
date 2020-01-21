import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from "react-redux";
import PropTypes from 'prop-types'


const PhotoFunction = props => (
    <div>
        <img src={props.photos.photo} alt="pg" id="image_class" style={{ width: "500px", margin: "20px", height: "300px", cursor: "pointer" }} />
        <button href="#" onClick={() => { props.deletePhoto(props.photos._id) }}>delete</button>
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
                <div style={{ paddingLeft: "200px" }}>
                    <h3>Photo Gallery</h3>
                    <table className="table">
                        <thead className="thead-light">

                        </thead>
                        <tbody>
                            {this.photoList()}
                        </tbody>
                    </table>
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

