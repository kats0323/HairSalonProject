import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const PhotoFunction = props => (
    <tr>
        <img src={props.photos.photo} style={{ width: "500px", margin: "20px", height: "300px" }} />
    </tr>
)


export default class PhotoList extends Component {
    constructor(props) {
        super(props);


        this.state = { photos: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/photos/')
            .then(response => {
                this.setState({ photos: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }



    photoList() {
        return this.state.photos.map(currentphoto => {
            return <PhotoFunction photos={currentphoto} key={currentphoto._id} />;
        })
    }

    render() {
        return (
            <div style={{ paddingLeft: "200px" }}>
                <h3>Prices LIst</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.photoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}