import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import "./admin_price.css"

const PhotoFunction = props => (
    <div>
        <img src={props.photos.photo} alt="pg" id="image_class" style={{ width: "500px", margin: "20px", height: "300px", cursor: "pointer" }} />
        <button href="#" onClick={() => { props.deletePhoto(props.photos._id) }}>delete</button>
    </div>
)




export default class PhotoList extends Component {
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