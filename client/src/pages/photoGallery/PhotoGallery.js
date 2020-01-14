import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';

import axios from 'axios';
import './gallery.css'


const PhotoFunction = props => (
    <tr>
        <img src={props.photos.photo} style={{ width: "400px", margin: "20px", height: "300px" }} />
    </tr>
)


export default class PhotoGallery extends Component {
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
        const ColoredLine = ({ color }) => (
            <hr style={{ color: "gray",border:"2px dashed"}} /> 
         );

       
        return (
            <div>
                <h1 class="title-gallery-center">PhotoGallery</h1>
                <ColoredLine />
                    <Row type="flex" justify="start">
                        {this.photoList()}
                         {this.photoList()}
                          {this.photoList()}
                    </Row>
            </div>
        )
    }
}
